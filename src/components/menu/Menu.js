import React, { Component } from 'react';

import './menu.css'

// Icons
import create from '../../assets/icons/plus.svg'
import select from '../../assets/icons/person-checked.svg'


class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <ul>
          <li className="menu__item menu__item--create"><img src={create} className="menu__item__icon" alt="presentation" />Create</li>
          <li className="menu__item menu__item--select"><img src={select} className="menu__item__icon" alt="presentation" />Select</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
