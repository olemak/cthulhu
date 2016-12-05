import React, { Component } from 'react'
import { Link } from 'react-router'
// Assets
import './App.css';
import logo from './assets/images/cthulhu.svg'
import hamburger from './assets/icons/menu-hamburger.svg'


// Components
import Menu from './components/menu/Menu'
import Text from './components/text/Text'
import Create from './components/create/Create'
import ChooseOccupation from './components/ChooseOccupation/ChooseOccupation'
import Character from './components/character/Character'
import SelectCharacter from './components/select/Select'

class App extends Component {
  constructor(){
    super()

    this.state = {
      text:       'placeholder',
      title: "Cthulhu", 
      details: {
        name:       'none',
        occupation: 'none',
        age: 0 
      },
      stats:      [],
      skills:     [],
      weapons:    []
      }

    this.the_clickHandler = this.the_clickHandler.bind(this)
  }


  the_clickHandler(action){
    this.setState({[action.index]: action.value})
    console.log("Clicking was involved", action)
  }
  



  render() {
    return (
      <div className="Sheet">
        <header className="sheet__header">
          <img  className="sheet__header__logo" src={logo} alt="logo"/>
            <h2   className="sheet__header__title">{this.state.title}</h2>
            <Link to="/menu">
              <img  className="sheet__header__menu" src={hamburger} alt="menu" />
            </Link>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App