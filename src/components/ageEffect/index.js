import React, { Component } from 'react';
import AgeEffect from '../ageEffect/'

import './style.css'

class AgeEffect extends Component {
	constructor(){
		super()
		}
		this.state = {
			age: 30,
			ageEffect: {text:"_"}
		}
		this.changeAge = this.changeAge.bind(this)
	}

	componentWillMount(){
		this.setAgeEffect(this.props.age || 30)
	}

	componentWillUpdate(){

	}

	componentDidUpdate(prevProps, prevState){
	}


	setAgeEffect = age => {
		let ageEffects = [
			{min: 15, 	max: 19,	checks: 0, appminus:  0, statminus: 0,	text: "Deduct 5 points from STR or SIZ, and also from EDU. Re-roll Luck, use highest value."},
			{min: 20, 	max: 39,	checks: 1, appminus:  0, statminus: 0,	text: "One improvement check for EDU."},
			{min: 40, 	max: 49,	checks: 2, appminus:  5, statminus: 5,	text: "Deduct 5 points from STR, CON or DEX, and also from APP. Make 2 improvement checks for EDU."},
			{min: 50, 	max: 59,	checks: 3, appminus: 10, statminus: 10,	text: "Deduct 10 points from STR, CON or DEX (split across one, two or all three), and also from APP. Make 3 improvement checks for EDU."},
			{min: 60, 	max: 69,	checks: 4, appminus: 15, statminus: 20,	text: "Deduct 20 points from STR, CON or DEX (split across one, two or all three), and reduce APP by 15. Make 4 improvement checks for EDU."},
			{min: 70, 	max: 79,	checks: 4, appminus: 20, statminus: 40,	text: "Deduct 40 points from STR, CON or DEX (split across one, two or all three), and reduce APP by 20. Make 4 improvement checks for EDU."},
			{min: 80, 	max: 89,	checks: 4, appminus: 25, statminus: 80, text: "Deduct 80 points from STR, CON or DEX (split across one, two or all three), and reduce APP by 25. Make 4 improvement checks for EDU."}
		].find(bracket => bracket.min <= age && bracket.max >= age)
			this.setState({ageEffect: ageEffects})
	}

	changeAge = action => {
		let age = (a => {return a})(this.state.Age)
		if (action === "OLDER") age++
		if (action === "YOUNGER") age--
		this.setState({Age: age})
	}


  render() {
    return (
        <div className="AgeEffect">
        	<h4>
        	Age:
			<img src={plus} onClick={()=>this.changeAge("OLDER")} role="presentation"/>				    				
        	<span className="Age__value">{this.state.Age}</span>
			<img src={minus} onClick={()=>this.changeAge("YOUNGER")} role="presentation" />
        	</h4>
        	<ageEffect />
        	<h5>{this.state.ageEffect.text}</h5>
	    </div>
    )
  }
}

export default Create
