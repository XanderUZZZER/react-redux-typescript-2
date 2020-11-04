import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className='nav-wrapper  #7b1fa2 purple darken-2'>
        <div className='container'>
          <NavLink to='/' className='brand-logo'>
            Typescript+React
          </NavLink>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <NavLink to='/'>Todo list</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
