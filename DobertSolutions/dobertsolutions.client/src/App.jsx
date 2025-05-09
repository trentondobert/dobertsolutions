import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

import Home from './pages/Home/Home'
import SkillSet from './pages/SkillSet/SkillSet'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);


function App() {
    return (
        <Router>
            <NavBar />
            <div className="p-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skillset" element={<SkillSet />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
