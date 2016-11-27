import React, { Component } from 'react';
import Occupation from '../Occupation/Occupation.js'

import occupations from '../../assets/occupations/occupations.js'

//import './style.css'

// Icons
//import error from '../../assets/icons/error.svg'

class ChooseOccupation extends Component {
	constructor(){
		super()
		this.state={
		}
	}

	componentWillMount(){
		console.log("Choose Occupation componentWillMount")
//		this.props.clickHandler({index: "title", value: "Occupation"})
	}

	/* LIFECYCLE */
	componentDidUpdate(prevProps, prevState){
	}


  render() {
    return (
      <div className="ChooseOccupation" key>
      	{occupations.map((occupation, i) => {
      		return <Occupation details={occupation} key={"occupation"+i}/>
      	})}      	
     </div>
    )
  }
}

export default ChooseOccupation
