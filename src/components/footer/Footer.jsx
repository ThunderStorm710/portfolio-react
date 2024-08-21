import React from 'react';
import './Footer.css';

function Footer({ theme }) {
    const currentYear = new Date().getFullYear();
    const iconColor = theme === 'light' ? 'deepskyblue' : 'greenyellow';

    return (
        <footer className={`footer ${theme}`}>
            <div className="footer-content">
                <div className="footer-icons">
                    <button className="icon-btn" style={{ color: iconColor }}>
                        <i className="fas fa-comment"></i>
                    </button>
                    <button className="icon-btn" style={{ color: iconColor }}>
                        <i className="fas fa-university"></i>
                    </button>
                    <button className="icon-btn" style={{ color: iconColor }}>
                        <i className="fas fa-wifi"></i>
                    </button>
                    <button className="icon-btn" style={{ color: iconColor }}>
                        <i className="fas fa-podcast"></i>
                    </button>
                </div>

                <div className={`footer-text ${theme === 'light' ? 'text-deepskyblue' : 'text-greenyellow'}`}>
                    © {currentYear} — <strong>All Rights Reserved.</strong>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
