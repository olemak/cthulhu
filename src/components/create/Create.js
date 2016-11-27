import React, { Component } from 'react';
import Age from '../ageEffect/Age.js'
import DamageBonus from '../damageBonus/DamageBonus.js'

import './style.css'

// Icons
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/remove.svg'
import error from '../../assets/icons/error.svg'

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
			Age: 	30,
			MoveRate: 8,
			DamageBonus: '',
			Build: '' 
		}
		this.changeAge = this.changeAge.bind(this)
		this.changeStat = this.changeStat.bind(this)
		this.changeState = this.changeState.bind(this)
		this.changeDamageBonus = this.changeDamageBonus.bind(this)
	}

	/* LIFECYCLE */
	componentDidUpdate(prevProps, prevState){
		if (this.state.Age !== prevState.Age ) this.moveModifier(this.state.STR.value, this.state.DEX.value, this.state.SIZ.value, this.state.Age)
	}

	/* APP STATE */

	save = () =>{
		const __updateStats = {}
		this.state.stats.map(stat => 
			__updateStats[stat] = this.state[stat].value
		)
		this.props.clickHandler({index: "stats", value: __updateStats})
		
		const __updateDetails = {
			age: this.state.Age,
			stats: this.state.stats,
			build: this.state.Build,
			moveRate: this.state.MoveRate,
			damageBonus: this.state.DamageBonus
		}

		this.props.clickHandler({index: "details", value: __updateDetails})
		this.props.clickHandler({index: "context", value: "chooseOccupation"})
	}

	/* BOUND */
	changeAge(newAge){
		this.setState({Age: newAge})
	}

	changeStat(action){
		let activeStat = action.STAT
		let newValue 	= this.state[activeStat].value + action.CHANGE
		let newStat 	= (stat => stat)(this.state[activeStat])
			newStat.value = newValue
		this.setState({[activeStat]: newStat})

		if (activeStat === "STR" ||
			activeStat === "DEX" ||
			activeStat === "SIZ") {
			this.moveModifier(	this.state.STR.value, 
								this.state.DEX.value, 
								this.state.SIZ.value, 
								this.state.Age
			)
		}
	}

	changeState(action){
		this.setState(action)
	}

	changeDamageBonus(actions){
		this.changeState(actions.DamageBonus)
		this.changeState(actions.Build)
	}

	/* LOGIC */
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
		this.moveModifier(this.state.STR, this.state.DEX, this.state.SIZ, this.state.Age)
	}

	moveModifier = (STR, DEX, SIZ, age) => {
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
    							{(stat.value < 90 ? 
    								<img className="icon" src={plus} onClick={()=>this.changeStat({"STAT": stat.name, "CHANGE": 5 })} role="presentation"/>:
    								<img className="icon" src={error} role="presentation"/>)}
			    			</div>
    						<div className="Stat__interaction__down">
    							{(stat.value > 0 ? 
    							<img className="icon" src={minus} onClick={()=>this.changeStat({"STAT": stat.name, "CHANGE": -5 })} role="presentation" />:
								<img className="icon" src={error} role="presentation"/>)}
    						</div>
    					</div>	    					
    				</div>
        		)
	        })}
        	<button className="Create__button" onClick={this.generateStats}>Random Stats</button>
        	<Age age={this.state.Age} change={this.changeAge} />
        </div>

        <h5 className="Create__MoveRate">Move Rate: {this.state.MoveRate} yards/round</h5>
        <DamageBonus STR={this.state.STR.value} SIZ={this.state.SIZ.value} change={this.changeDamageBonus} damageBonus={this.state.DamageBonus} build={this.state.Build} /> 
        <button className="Create__button" onClick={this.save}>Save & Proceed</button>
      </div>
    )
  }
}

export default Create
