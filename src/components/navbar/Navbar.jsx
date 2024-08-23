import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className={`navbar ${theme}`}>
            <div className="logo">Pedro Ascensão</div>
            <ul className={`nav-links ${menuOpen ? 'mobile-nav' : ''}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon}/>
            </button>
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
}

export default Navbar;