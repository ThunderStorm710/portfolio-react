import React from 'react';
import './Footer.css';

function Footer({theme}) {
    return (

        <footer className={`footer ${theme}`}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

            <div className="footer-content">
                <div className="footer-text">
                    © 2024 All rights reserved.
                </div>
                <div className="footer-icons">
                    <a href="https://linkedin.com/pedro-ascensao" className={`text-${theme}`}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/ThunderStorm710" className={`text-${theme}`}>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
