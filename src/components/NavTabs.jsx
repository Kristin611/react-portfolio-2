import { Link, useLocation } from 'react-router-dom';

import React from 'react'

const NavTabs = () => {
  return (
    <ul className='nav-tabs'>
            <li>
                <Link to='/'>About</Link>
            </li>
            <li>
                <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/resume'>Resume</Link>
            </li>

        </ul>
  )
}

export default NavTabs


