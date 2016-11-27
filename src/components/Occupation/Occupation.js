import React, { Component } from 'react';

import './style.css'

// Icons
import error from '../../assets/icons/error.svg'

class Occupation extends Component {
	constructor(){
		super()
		this.state={
			expand: false
		}
//		this.expand = this.expand.bind(this)
//		this.occupationDetails = this.occupationDetails.bind(this)
	}

	/* LIFECYCLE */
	componentWillMount(){
		console.log("Occupation componentWillMount")
	}

	componentDidUpdate(prevProps, prevState){
	}

	/* BOUND */
	expand = event => {
		this.setState({expand: !this.state.expand})
	}

	occupationDetails = () => {
		return (
				<div>
					<p>{this.props.details.description}</p>
					<p>SKILLS: {this.props.details.skills}</p>
				</div>
			)
	}


	selectOccupation = action => {
		console.log("Great! So you found out what you want to be when you grow up!")
	}

  render() {
    return (
      <div className="Occupation">
      	<div className="Occupation__title" onClick={this.expand}>    	  	
	      	<h4>
	      		<img className={this.state.expand ? 'icon Occupation__icon Occupation__icon--close' : 'icon Occupation__icon'} src={error} role="presentation"/>{this.props.details.name}
	      	</h4>
	     </div>
	     {(this.state.expand ? this.occupationDetails() : '')}
     </div>
    )
  }
}

export default Occupation
