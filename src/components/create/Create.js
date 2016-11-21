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
			Luck: 	{name: "Luck",value:50, desc: "Luck",			type: "luck", roll: {numberOfDice: 3, dicetype: 6, plus: 0, multiplier: 5} }
					
		}
		this.changeStat = this.changeStat.bind(this)
	}

	changeStat(action){
		let activeStat = action.STAT
		let newValue = this.state[activeStat].value + action.CHANGE
		let newStat = this.state[activeStat]
			newStat.value = newValue
		this.setState({[activeStat]: newStat})
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

	        <h4>Move Rate: 30 yards/round</h4>
	        <h4>Damage Bonus: 1d6</h4>
	        <h4>Character age: 30</h4>
        
        <button className="Create__button" disabled={true}>Generate Randomly</button>

        <button className="Create__button" disabled={true}>Save Stats</button>


      </div>
    );
  }
}

export default Create
