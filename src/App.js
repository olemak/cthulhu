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

// TUT
//import Footer from './components/todotut/Footer'
//import AddTodo from './containers/AddTodo'
//import VisibleTodoList from './containers/VisibleTodoList'



class App extends Component {
  constructor(){
    super()
    this.displayContent = this.displayContent.bind(this)
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
            <h2   className="sheet__header__title">Cthulhu Character Sheet</h2>
            <img  className="sheet__header__menu" src={hamburger} alt="menu" />
        </header>
        
        <main className="sheet__main">
          {this.displayContent()}
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