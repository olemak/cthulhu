import React, { Component } from 'react';

//import './style.css'


class DamageBonus extends Component {

	componentWillReceiveProps(nextProps){
		if ((this.props.STR !== nextProps.STR) || (this.props.SIZ !== nextProps.SIZ)) {
			this.props.change(this.damageBonus(nextProps.STR, nextProps.SIZ))
		}
	}

	damageBonus = (STR, SIZ) => {
			if (STR + SIZ < 65) 	return {DamageBonus: {DamageBonus: "-2"	},	Build: {	Build: -2	}}
			if (STR + SIZ < 85) 	return {DamageBonus: {DamageBonus: "-1"	},	Build: {	Build: -1	}}
			if (STR + SIZ < 125)	return {DamageBonus: {DamageBonus: "None"},	Build: {	Build: 0	}}
			if (STR + SIZ < 165) 	return {DamageBonus: {DamageBonus: "+1D4"},	Build: {	Build: 1	}}
			if (STR + SIZ < 205) 	return {DamageBonus: {DamageBonus: "+1D6"},	Build: {	Build: 2	}}
									return {DamageBonus: {DamageBonus: ''	},	Build: {	Build: ''	}}
	} 
	
  render() {
    return (
      <div className="DamageBonus">  
        <p>DamageBonus:  {this.props.damageBonus} (Build: {this.props.build})</p>
      </div>
    )
  }
}

export default DamageBonus
