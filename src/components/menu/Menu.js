import React, { Component } from 'react';

import './menu.css'

// Icons
import create from '../../assets/icons/plus.svg'
import select from '../../assets/icons/person-checked.svg'


class Menu extends Component {
  constructor(){
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(action){
    this.props.clickHandler(action)
  }

  render() {
    return (
      <div className="Menu">
        <ul>
          <li className="menu__item menu__item--create" 
          onClick={()=>{
            this.clickHandler({index: 'context',value: 'create'})
            this.clickHandler({index: 'title',value: 'Create (1 of 3)'})
          }}>
              <img  src={create} className="menu__item__icon" alt="presentation" />
              Create
          </li>
          <li className="menu__item menu__item--select" onClick={()=>{this.clickHandler({index: 'context',value: 'select'})}}>
              <img src={select} className="menu__item__icon" alt="presentation" />
              Select
          </li>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
}


export default Menu
