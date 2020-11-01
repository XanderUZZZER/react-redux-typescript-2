import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className='nav-wrapper  blue lighten-1'>
        <div className='container'>
          <a href='/' className='brand-logo'>
            Typescript+React
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='/'>Todo list</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
