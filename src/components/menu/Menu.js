import React from 'react';
import { Link } from 'react-router'


import './menu.css'
// Icons
import create from '../../assets/icons/plus.svg'
import select from '../../assets/icons/person-checked.svg'


const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li className="menu__item menu__item--create">
          <Link to="character/create">
            <img  src={create} className="menu__item__icon" alt="presentation" />
            Create
          </Link>
        </li>
        <li className="menu__item menu__item--select">
          <Link to="select">
            <img src={select} className="menu__item__icon" alt="presentation" />
            Select
          </Link>
        </li>
      </ul>
    </div>
  )  
}

export default Menu
