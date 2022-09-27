import React from 'react'
import './footer.css'
import {FaGithub ,FaFacebook,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="follow">
        <div className="icon-follow">
        <ul>
          <li><FaGithub /></li>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
        </ul>
        </div>
        <div className="copyd">
         <p> <span>made by </span>Akanksha Mankar</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer