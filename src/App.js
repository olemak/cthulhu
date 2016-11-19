import React, { Component } from 'react'

// Assets
import './App.css';
import logo from './assets/images/cthulhu.svg'
import hamburger from './assets/icons/menu-hamburger.svg'


// Components
import Menu from './components/menu/Menu.js'



class App extends Component {
  render() {
    return (
      <div className="Sheet">
        
        <header className="sheet__header">
            <img  className="sheet__header__logo" src={logo} alt="logo"/>
            <h2   className="sheet__header__title">Cthulhu Character Sheet</h2>
            <img  className="sheet__header__menu" src={hamburger} alt="menu" />
        </header>
        
        <main className="sheet__main">
          <Menu />
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