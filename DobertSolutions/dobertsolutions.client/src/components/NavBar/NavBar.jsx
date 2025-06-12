import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.scss'

const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/">
                    <button className={`nav-button ${currentPath === '/' ? 'active' : ''}`}>Home</button>
                </Link>
                <Link to="/skillset">
                    <button className={`nav-button ${currentPath === '/skillset' ? 'active' : ''}`}>SkillSet</button>
                </Link>
                <Link to="/portfolio">
                    <button className={`nav-button ${currentPath === '/portfolio' ? 'active' : ''}`}>Portfolio</button>
                </Link>
                <Link to="/contact">
                    <button className={`nav-button ${currentPath === '/contact' ? 'active' : ''}`}>Contact</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;
