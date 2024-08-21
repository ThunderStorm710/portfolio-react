import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const sections = document.querySelectorAll('.section');

        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px',
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`about-page ${theme}`}>
            <button onClick={toggleTheme} className="theme-toggle-btn">
                Toggle Theme
            </button>

            <section className="landing-section">
                <h1>Welcome to My Portfolio</h1>
                <p>I am Pedro Ascensão, a Computer Engineering student with a passion for technology and innovation.</p>
                <p>Explore my journey, skills, and projects. Click the button below to download my CV.</p>
                <a href="/path/to/your/cv.pdf" download className="download-btn">Download CV</a>
            </section>

            <section className="section" id="about">
                <img src="/path/to/about-image.jpg" alt="About Me" className="section-image" />
                <div className="section-content">
                    <h2>About Me</h2>
                    <p>I am a Computer Engineering student currently pursuing a Master's degree at the University of Coimbra...</p>
                </div>
            </section>

            {/* Additional sections... */}
        </div>
    );
}

export default About;
