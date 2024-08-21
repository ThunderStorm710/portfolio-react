import React, {useEffect} from 'react';
import './Portfolio.css';
import n3e from "../../assets/N3E.png"
import django_react from "../../assets/django-react.avif"
import power from "../../assets/power.png"
import oreos from "../../assets/oreos.jpg"
import tutor from "../../assets/tutor.webp"
import linguas from "../../assets/linguas.jpg"

function Portfolio() {

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

    return (
        <div className={`about-page`}>
            <section className="landing-section">
                <div className="overlay"></div>
                <h1>Portfolio</h1>
                <p>On this page you can find all the projects I have completed to date!</p>
                <p>Looking forward to the next one!</p>
                <a href="https://drive.google.com/file/d/1C1nCXdLMTtenBOZzlHRiRoLGwaaDUxq2/view?usp=sharing" download
                   className="download-btn">Download CV</a>
            </section>

            <section className="section" id="about">
                <img src={django_react} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>Quiz management application - MoelasWare</h2>
                    <p>Developed as a project for the Software Engineering discipline, integrated into the 2020-2021
                        Degree in Computer
                        Engineering at the University of Coimbra.</p>
                    <ul>
                        <li>Frontend: React JavaScript</li>
                        <li>Backend: Python Django</li>
                        <li>Database: SQLite & PostgreSQL</li>
                    </ul>
                </div>
            </section>

            <section className="section" id="about">
                <img src={n3e} alt="About Me" className="section-image mei"/>
                <div className="section-content">
                    <h2>N3E Website</h2>
                    <h3>Software Engineering</h3>
                    <h3>Link to the website can be found <a href="https://n3e.vercel.app">here</a></h3>
                    <p>Creation of a website to be used by IST’s N3E</p>
                    <ul>
                        <li>Backend: Python Django</li>
                        <li> Deployment: Vercel</li>
                        <li> Database: PostgreSQL (Render)
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section" id="about">
                <img src="" alt="About Me" className="section-image lei"/>
                <div className="section-content">
                    <h2>ClinicPlus</h2>
                    <p>Apply service design techniques to model a service, and in doing so:</p>
                    <ul>
                        <li>Obtain an understanding of the complexity of the services and the need for these
                            techniques
                        </li>
                        <li>Develop skills in using these techniques to diagnose and evolve existing services and to
                            design new ones
                        </li>
                        <li>Apply cloud-based technologies to create a simple environment and a powerful and responsive
                            service using AWS Web Services such as:
                            <ul>
                                <li>S3</li>
                                <li>EC2</li>
                                <li>VPC</li>
                                <li>Rekognition</li>
                                <li>Step Functions</li>
                                <li>Lambda Functions</li>
                                <li>Dynamo DB</li>
                                <li>RDS - PostgreSQL</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section" id="about">
                <img src="" alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>Googol: Web Page Search Engine</h2>
                    <p>The project aims to create a web page search engine with functionalities similar to services like
                        Google.com, Bing.com, and DuckDuckGo.com. The system includes automatic indexing (Web crawler)
                        and search capabilities. It should store relevant information about the pages, such as URL,
                        title, text citations, and more. Users can suggest URLs for indexing, and the system will
                        recursively index all links found on each page.</p>
                    <p>Tools used:</p>
                    <ul>
                        <li>Java RMI (Remote Method Invocation): For creating distributed applications.</li>
                        <li>Multicast Sockets: For server communication in a distributed environment.</li>
                        <li>Multithreading: To handle concurrent tasks in the system.</li>
                        <li>Spring Boot: For developing the web interface and ensuring modular and maintainable code.
                        </li>
                        <li>WebSockets: For real-time communication between clients and the server.</li>
                        <li>REST API Integration: For interacting with external web services, like the Hacker News
                            API.
                        </li>
                        <li>JSoup - Java Library</li>
                    </ul>
                </div>
            </section>
            <section className="section" id="about">
                <img src={power} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>WebFlux-Based Web Application Development</h2>
                    <p>In this project, a web application was developed using the WebFlux framework, which is part of Spring Boot. The focus was on creating reactive applications, both on the server and client sides. The server exposed web services that allowed CRUD operations on data entities like Pet and Owner. The client application consumed these services and performed a series of queries to process and analyze the data in a non-blocking, reactive manner.</p>
                    <ul>
                    <li>Spring Boot WebFlux: For developing the reactive web services.</li>
                        <li>Reactor Core: To implement reactive streams with classes like Flux and Mono.</li>
                        <li>Docker and Docker Compose: For environment setup and containerization, including using</li>
                        <li>PostgreSQL as the database.</li>
                        <li>Maven: For project management and building the application.</li>
                        <li>Java 18: Programming language used for developing the application.</li>
                    </ul>
                </div>
            </section>

            <section className="section" id="about">
                <img src={oreos} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2> Kafka Streams-Based E-Commerce Analytics</h2>
                    <p>This project involved creating a series of standalone applications to simulate an e-commerce environment, focusing on real-time data processing using Apache Kafka and Kafka Streams. The system was designed to handle streams of data related to sales and purchases of products (socks, in this case). The goal was to compute various metrics such as revenue, expenses, and profit, and then store the results back in a database.</p>
                    <ul>
                        <li>Apache Kafka: As the messaging system to handle streams of data.</li>
                        <li> Kafka Streams: For processing data in real-time, calculating metrics, and producing results
                            for storage.</li>
                        <li>Kafka Connect: To automate the extraction and insertion of data from/to a database.</li>
                        <li> Docker and Docker Compose: For setting up the Kafka environment and related services.</li>
                        <li> Maven: For project management and building the applications.</li>
                        <li> Java: Used to implement Kafka producers, consumers, and stream processors.</li>
                    </ul>
                </div>
            </section>
            <section className="section" id="about">
                <img src={tutor} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>2D Game -> Shades of Void</h2>
                    <p>2D game where players navigate through multiple levels across three different worlds. The player
                        can switch between worlds to overcome obstacles that may block progress in one world by
                        advancing in the others. Each world presents unique challenges that test the player's
                        skills.</p>
                    <p>Tools used:</p>
                    <ul>
                        <li>Unity</li>
                        <li>C#</li>
                    </ul>
                </div>
            </section>
            <section className="section" id="about">
                <img src={linguas} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>VPN Configuration and Two-Factor Authentication</h2>
                    <p>This project involved configuring a secure VPN tunnel in a "road warrior" scenario, where remote
                        clients access services on an internal network through a VPN gateway. The assignment focused on
                        setting up mutual authentication using X.509 certificates, alongside two-factor authentication
                        (2FA) for both VPN and web server (Apache) access. The task also included managing a Public Key
                        Infrastructure (PKI) for certificate issuance and revocation.</p>
                    <p>Tools used:</p>
                    <ul>
                        <li>OpenVPN: To create and manage the VPN tunnel.</li>
                        <li>Apache</li>
                        <li>Apache: For setting up a web server with HTTPS and enforcing 2FA.</li>
                        <li>OpenSSL: For managing the Certification Authority (CA) and issuing/revoking X.509
                            certificates.
                        </li>
                        <li>Google Authenticator: For generating one-time passwords as part of the 2FA process.</li>
                    </ul>
                </div>
            </section>
            <section className="section" id="about">
                <img src={linguas} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>Network Firewall and Intrusion Detection</h2>
                    <p>This project focused on configuring a network firewall using IPTables/Netfilter to protect a
                        network environment, including filtering and NAT. Additionally, Suricata was configured as an
                        Intrusion Detection and Prevention System (IDS/IPS) to detect and block various types of attacks
                        such as SQL injection, Denial of Service (DoS), and OS fingerprinting attempts.</p>
                    <p>Tools used:</p>
                    <ul>
                        <li>IPTables/Netfilter: For firewall configuration, including packet filtering and NAT.</li>
                        <li>Suricata: For setting up IDS/IPS functionalities to detect and react to network attacks.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section" id="about">
                <img src={linguas} alt="About Me" className="section-image"/>
                <div className="section-content">
                    <h2>Web Security Testing and Firewall Configuration</h2>
                    <p>This assignment was split into two phases: the first involved performing security testing on a
                        web application (OWASP JuiceShop) using tools like Kali Linux and OWASP ZAP, following the Web
                        Security Testing Guide (WSTG) guidelines. The second phase involved configuring a Web
                        Application Firewall (WAF) using ModSecurity to monitor, filter, and block HTTP traffic,
                        securing the web application against the identified vulnerabilities.</p>
                    <p>Tools used:</p>
                    <ul>
                        <li>OWASP JuiceShop: As the target web application for security testing.</li>
                        <li>ModSecurity: Configured as a WAF to protect the web application from identified threats.
                        </li>
                        <li>Kali Linux and OWASP ZAP: For performing automated and manual penetration testing.</li>
                        <li>Apache: Serving as the web server with ModSecurity integrated as a WAF.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;