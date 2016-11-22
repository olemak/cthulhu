import React, { Component } from 'react';

import './style.css'

// Icons
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/remove.svg'


class Create extends Component {
	constructor(){
		super()
		this.state={
			stats: 	["STR","DEX","POW","CON","APP","EDU","SIZ","INT","Luck"],
			STR: 	{name: "STR", value:50, desc: "Strength",		type: "base", roll: {numberOfDice: 3, dicetype: 6, plus: 0, multiplier: 5} },
			DEX: 	{name: "DEX", value:50, desc: "Dexiterity",		type: "base", roll: {numberOfDice: 3, dicetype: 6, plus: 0, multiplier: 5} },
			POW: 	{name: "POW", value:50, desc: "Power",			type: "base", roll: {numberOfDice: 3, dicetype: 6, plus: 0, multiplier: 5} },
			CON: 	{name: "CON", value:50, desc: "Constitution", 	type: "base", roll: {numberOfDice: 3, dicetype: 6, plus: 0, multiplier: 5} },
			APP: 	{name: "APP", value:50, desc: "Appearance",		type: "base", roll: {numberOfDice: 3, dicetype: 6, plus: 0, multiplier: 5} },
			EDU: 	{name: "EDU", value:50, desc: "Education",		type: "base", roll: {numberOfDice: 2, dicetype: 6, plus: 6, multiplier: 5} },
			SIZ: 	{name: "SIZ", value:50, desc: "Size",			type: "base", roll: {numberOfDice: 2, dicetype: 6, plus: 6, multiplier: 5} },
			INT: 	{name: "INT", value:50, desc: "Intelligence", 	type: "base", roll: {numberOfDice: 2, dicetype: 6, plus: 6, multiplier: 5} },
			Luck: 	{name: "Luck",value:50, desc: "Luck",			type: "luck", roll: {numberOfDice: 3, dicetype: 6, plus: 0, multiplier: 5} },
			MoveRate: 8,
			DamageBonus: 'No bonus'
		}
		this.changeStat = this.changeStat.bind(this)
	}

	changeStat(action){
		let activeStat = action.STAT
		let newValue = this.state[activeStat].value + action.CHANGE
		let newStat = this.state[activeStat]
			newStat.value = newValue
		this.setState({[activeStat]: newStat})
		this.moveModifier()
	}

	changeAge = action => {
		let age = (a => {return a})(this.state.Age)
		if (action === "OLDER") age++
		if (action === "YOUNGER") age--
		this.setState({Age: age})
		this.moveModifier()
	}

	d6 = num => {
		let dieRoll = 0;
		if (typeof num !== 'number') num = 1
		for (let i  = 0; i<num; i++) dieRoll += Math.round((Math.random() * 5) + 1)
		return dieRoll 
	}

	d100 = () => Math.round((Math.random() * 99) + 1)

	generateStats = () => {
		this.state.stats.map((statIndex)=>{
			let stat = ((s) => {return s})(this.state[statIndex])
				stat.value = (this.d6(stat.roll.numberOfDice) + stat.roll.plus) * stat.roll.multiplier
			this.setState({[statIndex]:stat})
			return stat
		})
		this.moveModifier()
	}

// AgeModifier (Age affects some starts other than move, which is now sorted)

	moveModifier = () => {
		let STR = this.state.STR.value
		let DEX = this.state.DEX.value
		let SIZ = this.state.SIZ.value
		let age = this.state.Age
		let moveModifier = 2

		if (DEX  <  SIZ  &&  STR  <  SIZ) 	moveModifier = 7
		if (STR  >= SIZ  ||  DEX  >= SIZ) 	moveModifier = 8
		if (STR  >  SIZ  &&  DEX  >  SIZ)	moveModifier = 9

		if ((age - 30) > 10) { // Older than 40
			let ageModifier = age -30
				ageModifier = ageModifier.toString().charAt(0)	
			moveModifier -= ageModifier
		}

		moveModifier = (moveModifier > 0 && age < 125 ? moveModifier : 0)

		this.setState({MoveRate: moveModifier})
	}



  render() {
    return (
      <div className="Create">
        <h3>Step 1 of 3: Abilities</h3>
	        <div className="Stats">
		        {this.state.stats.map(statIndex=>{
		        	let stat = this.state[statIndex]
		        	return (
							<div className={"Stat Stat__" + stat.name} key={"stat_"+stat.name}>	    					
		    					<h4 className="Stat__name">
		    						{stat.name}
		    					</h4>
		    					<div className="Stat__value">
		    						{stat.value}
		    					</div>

		    		    		<div className="Stat__interaction">
					    			<div className="Stat__interaction__up">
		    							<img src={plus} onClick={()=>this.changeStat({"STAT": stat.name, "CHANGE": 5 })} role="presentation"/>				    				
					    			</div>
		    						<div className="Stat__interaction__down">
		    							<img src={minus} onClick={()=>this.changeStat({"STAT": stat.name, "CHANGE": -5 })} role="presentation" />
		    						</div>
		    					</div>	    					
		    				</div>
		        		)
		        })}
	        </div>

	        <h4>Move Rate: {this.state.MoveRate} yards/round</h4>
	        <h4>Damage Bonus: 1d6</h4>
	        <div className="Age">
	        	<h4>
	        	Age:
				<img src={plus} onClick={()=>this.changeAge("OLDER")} role="presentation"/>				    				
	        	<span className="Age__value">{this.state.Age}</span>
				<img src={minus} onClick={()=>this.changeAge("YOUNGER")} role="presentation" />
	        	</h4>
		    </div>
        
        <button className="Create__button" onClick={this.generateStats}>Random Stats</button>

        <button className="Create__button">Save Stats</button>


      </div>
    );
  }
}

export default Create
