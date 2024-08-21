import React from 'react';
import { Link } from 'react-router-dom';
import cisuc from '../../assets/CISUC.png';
import uc from '../../assets/UC.png';
import './Landing.css';

function Home({ theme }) {
    const scrollToSection = () => {
        const section = document.getElementById('about-me');
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`home ${theme}`}>
            <header className={`hero ${theme}`}>
                <div className="hero-content">
                    <h1>Hello,</h1>
                    <h2>I'm Pedro Ascensão</h2>
                    <p>Backend Developer & DevOps</p>
                    <Link to="/contact" className="btn">Contact Me</Link>
                </div>
                <img src={require('../../assets/person.webp')} alt="Person" className="hero-image" />
            </header>
            <div className={`arrow-down ${theme}`}>
                <a href="#about-me" onClick={scrollToSection}><i className="fas fa-chevron-down"></i></a>
            </div>
            {/* About Section */}
            <section className={`about ${theme}`} id="about-me">
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>I am a Computer Engineering student and am currently studying a Master's degree at the University of Coimbra (UC).</p>
                    <p>I have a strong interest in a wide variety of programming languages and technologies, with a focus on software applications and web and backend development.</p>
                    <p>I am eager for knowledge and that is why I always strive to continually encourage my learning and my ability to solve problems allows me to quickly adapt to new technologies and face more complex challenges.</p>
                    {/* Logos Section */}
                    <div className="logos">
                        <img src={cisuc} alt="CISUC Logo" className="logo" />
                        <img src={uc} alt="UC Logo" className="logo" />
                    </div>
                </div>
            </section>
            {/* Discover Section */}
            <section className={`discover ${theme}`}>
                <Link to="/about" className="discover-btn">Get to know me</Link>
            </section>
        </div>
    );
}

export default Home;
