import React, { Component } from 'react'
//import { Link } from 'react-router'
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
      title:      'Occupations',
      context:    'chooseOccupation',
      text:       'placeholder', 
      details: {
        name:       'none',
        occupation: 'none',
        age: 0 
      },
      stats:      [],
      skills:     [],
      weapons:    []
      }

    this.displayContent = this.displayContent.bind(this)
    this._displayMenu = this._displayMenu.bind(this)
    this.the_clickHandler = this.the_clickHandler.bind(this)
  }


  the_clickHandler(action){
    this.setState({[action.index]: action.value})
    console.log("Clicking was involved", action)
  }

  _displayMenu(){
    const action = {
      index: 'context',
      value: 'menu'
    }
    this.the_clickHandler(action)
  }

  displayContent(activeContent){
    let displayContent;
      switch(activeContent){
        case 'menu':
          displayContent = <Menu clickHandler={this.the_clickHandler}/>
        break
        case 'create':
          displayContent = <Create clickHandler={this.the_clickHandler}/>
        break
        case 'chooseOccupation':
          displayContent = <ChooseOccupation clickHandler={this.the_clickHandler}/>
        break
        case 'character':
          displayContent = <Character />
        break
        case 'text':
          displayContent = <Text textIndex={this.state.text} />
        break
        case 'select':
          displayContent = <SelectCharacter />
        break
        default:
        displayContent = <Menu clickHandler={this.the_clickHandler}/>
      }
      return displayContent
  }

  render() {
    return (
      <div className="Sheet">
        
        <header className="sheet__header">
            <img  className="sheet__header__logo" src={logo} alt="logo"/>
            <h2   className="sheet__header__title">{this.state.title}</h2>
            <img  className="sheet__header__menu" src={hamburger} onClick={this._displayMenu} alt="menu" />
        </header>
        
        <main className="sheet__main">
          {this.displayContent(this.state.context)}
        </main>

        <footer className="sheet__footer">
          <span onClick={()=>{
            this.the_clickHandler({index: 'text', value: 'about'})
            this.the_clickHandler({index: 'context', value: 'text'})
          }}>ccs@0.2.3</span>
          <span onClick={()=>{
            this.the_clickHandler({index: 'text', value: 'colophon'})
            this.the_clickHandler({index: 'context', value: 'text'})
          }}>by @ol3mak</span>
          <span onClick={()=>{
            this.the_clickHandler({index: 'text', value: 'subscribe'})
            this.the_clickHandler({index: 'context', value: 'text'})
          }}>GM options</span>          
        </footer>

      </div>
    );
  }
}

export default App