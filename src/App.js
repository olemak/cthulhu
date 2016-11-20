import React, { Component } from 'react'

// Assets
import './App.css';
import logo from './assets/images/cthulhu.svg'
import hamburger from './assets/icons/menu-hamburger.svg'


// Components
import Menu from './components/menu/Menu'
import Text from './components/text/Text'
import Create from './components/create/Create'
import Character from './components/character/Character'

class App extends Component {
  constructor(){
    super()

    this.state = {
      title:      'Cthulhu Character Sheet',
      context:    'create',
      details: {
        name:       '',
        occupation: '',
        age: 0 
      },
      stats:      [],
      skills:     [],
      weapons:    []
      }

    this.displayContent = this.displayContent.bind(this)
    this.displayMenu = this.displayMenu.bind(this)
  }

  displayMenu(context){
    this.setState({context: context})
  }

  displayContent(activeContent){
    let displayContent;
      switch(activeContent){
        case 'menu':
          displayContent = <Menu />
        break
        case 'create':
          displayContent = <Create />
        break
        case 'character':
          displayContent = <Character />
        break
        case 'text':
          displayContent = <Text />
        break
        default:
        displayContent = <Menu />
      }
      return displayContent
  }

  render() {
    return (
      <div className="Sheet">
        
        <header className="sheet__header">
            <img  className="sheet__header__logo" src={logo} alt="logo"/>
            <h2   className="sheet__header__title">{this.state.title}</h2>
            <img  className="sheet__header__menu" src={hamburger} onClick={this.displayMenu} alt="menu" />
        </header>
        
        <main className="sheet__main">
          {this.displayContent(this.state.context)}
        </main>

        <footer className="sheet__footer">
          <span>ccs@0.2.3</span>
          <span>by @ol3mak</span>
          <span>GM options</span>          
        </footer>

      </div>
    );
  }
}

export default App