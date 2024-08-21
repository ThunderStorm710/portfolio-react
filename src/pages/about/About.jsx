import React, {useState, useEffect} from 'react';
import './About.css';
import merit from "../../assets/Merit-awards.jpg"
import lei from "../../assets/dei.png"
import mei from "../../assets/mei.png"
import power from "../../assets/power.png"
import oreos from "../../assets/oreos.jpg"
import tutor from "../../assets/tutor.webp"
import linguas from "../../assets/linguas.jpg"
import backend from "../../assets/backend.jpg"

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
                <div className="overlay"></div>
                <h1>About me</h1>
                <p>I am Pedro Ascensão, a Computer Engineering student with a passion for technology and innovation.</p>
                <p>Explore my journey, skills, and projects</p>
                <a href="https://drive.google.com/file/d/1C1nCXdLMTtenBOZzlHRiRoLGwaaDUxq2/view?usp=sharing" download
                   className="download-btn">Download CV</a>
            </section>

            <section className="section" id="about">
                <img src={backend} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>About Me</h2>
                    <p>I have a strong interest in a wide variety of programming languages and technologies, with a
                        focus on software
                        applications and web and backend development. I am eager for knowledge and that is why I always
                        strive to
                        continually encourage my learning and my ability to solve problems allows me to quickly adapt to
                        new technologies
                        and face more complex challenges.</p>
                </div>
            </section>

            <section className="section" id="about">
                <img src={mei} alt="About Me" className="section-image mei"/>
                <div className="section-content">
                    <h2>Master's Degree in Computer Engineering </h2>
                    <h3>Software Engineering</h3>
                    <h3><a href="https://www.uc.pt">Faculty of Sciences and Technologies of the University of
                        Coimbra</a> -> 2023 – 2025</h3>
                    <p>Expected grade: 16/17</p>
                </div>
            </section>

            <section className="section" id="about">
                <img src={lei} alt="About Me" className="section-image lei"/>
                <div className="section-content">
                    <h2>Bachelor's Degree in Computer Engineering</h2>
                    <h3><a href="https://www.uc.pt">Faculty of Sciences and Technologies of the University of
                        Coimbra</a> -> 2020 – 2023</h3>
                    <p>Final grade: 16</p>
                </div>
            </section>
            <section className="section" id="about">
                <img src={merit} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>Honours and awards</h2>
                    <p>Merit Board 5% Best Students in the academic year 2021/2022.</p>
                </div>
            </section>
            <section className="section" id="about">
                <img src={power} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>POWER - Empowering a digital future </h2>
                    <h3>Graduate Scholarship</h3>
                    <h3><a href="https://www.cisuc.uc.pt/en/projects/power">Center for Informatics and Systems of the
                        University of Coimbra</a> -> 10-2023 – 07-2024</h3>
                    <ul>
                        <li>Literature review of benchmarks to evaluate Kubernetes cluster performance</li>
                        <li>K-Bench & Kube-Bench Literature Review,</li>
                        <li>Requirements gathering for management and data plans</li>
                        <li>Management and orchestration of K3s, Microk8s, K8s and K0s clusters (1 master 2 workers)</li>
                        <li>Running performance evaluation experiments comparing different cluster solutions</li>
                        <li>Results analysis</li>
                        <li>Preparation of final presentation of results</li>
                        <li>Process documentation</li>
                        <li>Writing a scientific article and presenting it at the IEEE MELECON 2024 International Forum</li>
                        <p>Article can be found <a href="https://ieeexplore.ieee.org/abstract/document/10608706">here</a>.</p>
                    </ul>
                </div>
            </section>

            <section className="section" id="about">
                <img src={oreos} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>OREOS - Orchestration and Resource optimization for rEliable and lOw-latency Service</h2>
                    <h3>Scientific Research Initiation Scholarship</h3>
                    <h3><a
                        href="https://www.cisuc.uc.pt/en/projects/oreos-orchestration-and-resource-optimization-for-reliable-and-low-latency-services">Center
                        for Informatics and Systems of the
                        University of Coimbra</a> -> 06-2022 – 09-2023</h3>
                    <ul>
                        <li>Minikube literature review, clusters, containers, microservices architecture, application
                            deployment in Cloud-to-Edge environments</li>
                        <li>Installing Minikube and deploying a "Hello World" application</li>
                        <li>Cluster installation of a simple monolithic application</li>
                        <li>Installing a second application based on microservices</li>
                        <li>Preparation of final presentation of results</li>
                        <li>Process documentation</li>
                        <li>Literature review Raspberry Pi, Raspbian, ClusterHat, Microk8s, K8s, K3s</li>
                        <li>Requirements gathering for management and data plans</li>
                        <li>Management and orchestration of K3s, Microk8s, and K8s clusters and 1 Raspberry Pi 3 together with 4 Raspberry Pi 0 with the topology (1 master 3/4 workers)</li>
                        <li>Conducting a set of tests to determine what can be done with management and orchestration tools</li>
                        <li>Preparation of final presentation of results</li>
                        <p>Demo can be found <a
                            href="https://youtu.be/fupUqLEvXzU">here</a>.</p>
                    </ul>
                </div>
            </section>
            <section className="section" id="about">
                <img src={tutor} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>Private tutor -> 2017 – Current</h2>
                    <p>High school level: Physical Chemistry A, Mathematics A, Philosophy and English</p>
                    <p>University level: Mathematical Analysis (I, II and III) and Programming (Python, C, Java,
                        C++)</p>
                </div>
            </section>
            <section className="section" id="about">
                <img src={linguas} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>Spoken languages</h2>
                    <p> Mother Tongue: Portuguese</p>
                    <p>English: Level C1</p>
                    <p>French: Level B1</p>
                    <p>Spanish: Level B1</p>
                </div>
            </section>

        </div>
    );
}

export default About;