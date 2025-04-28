import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>
        <Link to="/skillset">
          <button className="nav-button">SkillSet</button>
        </Link>
        <Link to="/portfolio">
          <button className="nav-button">Portfolio</button>
        </Link>
        <Link to="/contact">
          <button className="nav-button">Contact</button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
