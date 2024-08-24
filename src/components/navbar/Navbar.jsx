import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${theme}`}>
            <div className="logo">Pedro Ascensão</div>
            <ul className={`nav-links ${menuOpen ? 'mobile-nav' : ''}`}>
                <li>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                </li>
                <li>
                    <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
            </button>
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
}

export default Navbar;