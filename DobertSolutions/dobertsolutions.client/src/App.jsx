import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Skillset from './pages/Skillset/Skillset';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
    return (
        <>
            <NavBar />
            <div className="page-container">
                <section id="home">
                    <Home />
                </section>
                <section id="skillset">
                    <SkillSet />
                </section>
                <section id="portfolio">
                    <Portfolio />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <div id="footer" style={{ backgroundColor: '#051C38', padding: '10px', textAlign: 'center' }}>
                    <p>&copy;  {new Date().getFullYear()} Trenton Dobert. All rights reserved.</p>
                </div>
            </div>
            
        </>
    );
}

export default App;
