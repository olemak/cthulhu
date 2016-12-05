import React from 'react'
import { Link } from 'react-router'

// Assets
import './SheetHeader.css';
import logo from '../assets/images/cthulhu.svg'
import hamburger from '../assets/icons/menu-hamburger.svg'

export default function SheetHeader(){
	return(	
		<div>
	    	<img  className="sheet__header__logo" src={logo} alt="logo"/>
    		<h2   className="sheet__header__title">{this.state.title}</h2>
    		<Link to="/menu">
	    		<img  className="sheet__header__menu" src={hamburger} alt="menu" />
	    	</Link>
    	</div>
    )
}