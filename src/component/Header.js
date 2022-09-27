import React from 'react'
import Search from './Search'
import "./Header.css"
import { NavLink } from 'react-router-dom';
import {FaHome  } from "react-icons/fa";


const Header = () => {
  return (
    <>
    <nav className='nav'>
        <div className="navlinks">
          <NavLink className='iconhome' to="/"><FaHome/></NavLink>
          <Search></Search>
          
        </div>
       
    </nav>
    </>
  )
}

export default Header