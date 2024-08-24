import React, {useEffect, useState} from 'react';
import './Landing.css';
import uc from "../../assets/UC.png";
import cisuc from "../../assets/CISUC.png";

const Landing = () => {

    const [data, setData] = useState(0);


    useEffect(() => {
        document.title = "Home";

        // Fazer a requisição HTTP
        fetch('https://worker-portfolio.pascensao77.workers.dev/?pageType=landing')
            .then(response => response.json())
            .then(result => {
                setData(result);
                console.log(result); // Verificar o resultado da requisição
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        console.log(data); // Verificar o valor de data após ser atualizado
    }, [data]);

    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>Hello,</h1>
                    <h2>I'm Pedro Ascensão</h2>
                    <p>Backend Developer & DevOps</p>
                    <a href="#about" className="btn">Learn More</a>
                </div>
            </section>

            <div className="separator"></div>

            <section id="about" className="about">
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>I am a Computer Engineering student and am currently studying a Master's degree at the University
                        of Coimbra.</p>
                    <p>I have a strong interest in a wide variety of programming languages and technologies, with a
                        focus on software applications, backend development and devops.</p>
                </div>
                <section className="logos">
                    <img src={cisuc} alt="UC Logo" className="logo"/>
                    <img src={uc} alt="UC Logo" className="logo"/>
                </section>

                <div className="about-content">

                    <p>I am eager for knowledge and that is why I always strive to continually encourage my learning and
                        my ability to solve problems allows me to quickly adapt to new technologies and face more
                        complex challenges.</p>
                    <p>
                        Whether you're here to learn more about my work, or just curious, I hope you enjoy your stay.
                        Feel free to explore, and don't hesitate to reach out if you have any questions.
                    </p>
                </div>
                <section className="discover">
                    <a href="/about" className="discover-btn">Get to know me</a>
                </section>
            </section>
        </div>
    );
};

export default Landing;