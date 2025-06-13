import React, { useEffect, useState } from 'react';
import './navbar.scss';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sectionIds = ['home', 'skillset', 'portfolio', 'contact'];

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find(entry => entry.isIntersecting);
                if (visible) {
                    setActiveSection(visible.target.id);
                }
            },
            { threshold: 0.6 } // adjust sensitivity
        );

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const isActive = (id) => activeSection === id ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#home" className={`nav-button ${isActive('home')}`}>Home</a>
                <a href="#skillset" className={`nav-button ${isActive('skillset')}`}>SkillSet</a>
                <a href="#portfolio" className={`nav-button ${isActive('portfolio')}`}>Portfolio</a>
                <a href="#contact" className={`nav-button ${isActive('contact')}`}>Contact</a>
            </div>
        </nav>
    );
};

export default NavBar;
