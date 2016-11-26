import React, { Component } from 'react';

import './style.css'

// Icons
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/remove.svg'
import error from '../../assets/icons/error.svg'

class Age extends Component {
	constructor(){
		super()
		this.state = {
			ageEffect: {text:Age.Effects[1].text}
		}
		this.changeAge = this.changeAge.bind(this)
	}

	componentWillReceiveProps(){
		this.setAgeEffect(this.props.age)
	}

	setAgeEffect = age => {				
			this.setState({ageEffect: Age.Effects.find(bracket => bracket.min <= age && bracket.max >= age)})
	}

	changeAge = action => {
		let age = (age => age)(this.props.age)
		if (action === "OLDER") age++
		if (action === "YOUNGER") age--
		if (age < 90) this.props.change(age)
	}


  render() {
    return (
        <div className="Age">
        	<h4>
        	Age:
			{(this.props.age < 89 ? <img className="icon" src={plus} onClick={()=>this.changeAge("OLDER")} role="presentation"/> : <img  className="icon" src={error} role="presentation"/>)}			    				
        	<span className="Age__value">{this.props.age}</span>
			{(this.props.age > 15 ? <img className="icon" src={minus} onClick={()=>this.changeAge("YOUNGER")} role="presentation"/> : <img  className="icon" src={error} role="presentation"/>)}			    				
        	</h4>
        	<h5>{this.state.ageEffect.text}</h5>
	    </div>
    )
  }
}


Age.Effects = [
	{min: 15, 	max: 19,	checks: 0, appminus:  0, statminus: 0,	text: "Deduct 5 points from STR or SIZ, and also from EDU. Re-roll Luck, use highest value."},
	{min: 20, 	max: 39,	checks: 1, appminus:  0, statminus: 0,	text: "One improvement check for EDU."},
	{min: 40, 	max: 49,	checks: 2, appminus:  5, statminus: 5,	text: "Deduct 5 points from STR, CON or DEX, and also from APP. Make 2 improvement checks for EDU."},
	{min: 50, 	max: 59,	checks: 3, appminus: 10, statminus: 10,	text: "Deduct 10 points from STR, CON or DEX (split across one, two or all three), and also from APP. Make 3 improvement checks for EDU."},
	{min: 60, 	max: 69,	checks: 4, appminus: 15, statminus: 20,	text: "Deduct 20 points from STR, CON or DEX (split across one, two or all three), and reduce APP by 15. Make 4 improvement checks for EDU."},
	{min: 70, 	max: 79,	checks: 4, appminus: 20, statminus: 40,	text: "Deduct 40 points from STR, CON or DEX (split across one, two or all three), and reduce APP by 20. Make 4 improvement checks for EDU."},
	{min: 80, 	max: 89,	checks: 4, appminus: 25, statminus: 80, text: "Deduct 80 points from STR, CON or DEX (split across one, two or all three), and reduce APP by 25. Make 4 improvement checks for EDU."}
]
Age.defaultProps = {
	age: 30
}
Age.propTypes = {
	age: React.PropTypes.number.isRequired,
	change: React.PropTypes.func.isRequired
}

export default Age
