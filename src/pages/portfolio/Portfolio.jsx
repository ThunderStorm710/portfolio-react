import React, {useEffect, useState} from 'react';
import './Portfolio.css';
import n3e from "../../assets/n3e.PNG"
import gec from "../../assets/gec.PNG"
import django_react from "../../assets/django-react.avif"
import jogo from "../../assets/jogo.png"
import googol from "../../assets/googol.jpg"
import assignment1 from "../../assets/assignment1.PNG"
import assignment2 from "../../assets/assignment2.PNG"
import assignment3 from "../../assets/assignment3.PNG"
import is_assignment2 from "../../assets/is-assignment2.PNG"
import is_assignment1 from "../../assets/is-assignment1.png"
import es1 from "../../assets/es1.PNG"
import SO from "../../assets/SO-image.PNG"
import RC from "../../assets/RC.PNG"

function Portfolio() {

    useEffect(() => {
        const sections = document.querySelectorAll('.portfolio-section');

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
        document.title = "Portfolio";

    }, []);

    const [data, setData] = useState(0);
    const [cv, setCV] = useState(0);


    useEffect(() => {

        // Fazer a requisição HTTP
        fetch('https://worker-portfolio.pascensao77.workers.dev/?pageType=portfolio')
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

    const fetchData = () => {
        fetch('https://worker-portfolio.pascensao77.workers.dev/?pageType=cv')
            .then(response => response.json())
            .then(result => {
                setCV(result);
                console.log(result); // Verificar o resultado da requisição
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        console.log(cv); // Verificar o valor de data após ser atualizado
    }, [cv]);

    return (
        <div className={`portfolio-page`}>
            <section className="landing-portfolio-section">
                <div className="overlay"></div>
                <h1>Portfolio</h1>
                <p>On this page you can find all the projects I have completed to date!</p>
                <p>Looking forward to the next one!</p>
                <a href="https://drive.google.com/file/d/1C1nCXdLMTtenBOZzlHRiRoLGwaaDUxq2/view?usp=sharing" download
                   className="portfolio-btn" onClick={fetchData}>Download CV</a>
            </section>

            <section className="portfolio-section" id="portfolio">
                <img src={django_react} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
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

            <section className="portfolio-section" id="portfolio">
                <img src={n3e} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
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

            <section className="portfolio-section" id="portfolio">
                <img src={gec} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
                    <h2>GEC Website</h2>
                    <h3>Software Engineering</h3>
                    <h3>Link to the website can be found <a href="https://gec-tmr.vercel.app">here</a></h3>
                    <p>Creation of a website to be used by GEC</p>
                    <ul>
                        <li>Backend: Python Django</li>
                        <li>Deployment: Vercel</li>
                    </ul>
                </div>
            </section>

            <section className="portfolio-section" id="portfolio">
                <img src={es1} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
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
                                <li>Elastic Beanstalk</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="portfolio-section" id="portfolio">
                <img src={googol} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
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
            <section className="portfolio-section" id="portfolio">
                <img src={SO} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
                    <h2>Simulator for Task Offloading on Edge</h2>
                    <p>The project aims to create a simulator that reproduces a simplified edge computing environment,
                        where mobile devices (clients) can offload tasks to geographically nearby servers, called Edge
                        Servers. The system needs to manage the distribution of these tasks, ensuring efficient
                        execution considering available resources and temporal limitations.</p>
                    <p>Structures Used:</p>
                    <ul>
                        <li>Mobile Node: Process that generates and sends tasks for offloading through a named pipe.
                            Several of these processes can run simultaneously.
                        </li>
                        <li>System Manager: Process responsible for starting the system, reading the configuration file
                            and creating the necessary processes.
                        </li>
                        <li>Task Manager: Process that manages the reception of tasks and their distribution to Edge
                            Servers. It creates the Edge Server processes and manages the job queue, assigning
                            priorities and dispatching jobs for execution.
                        </li>
                        <li>Edge Server: Processes that simulate the execution of tasks. Each Edge Server has two vCPUs
                            (virtual CPUs), which can be in different performance modes (High performance, Normal, or
                            Stopped).
                        </li>
                        <li>Monitor: Process that controls the number of active vCPUs on each Edge Server, adjusting
                            performance according to the task load on the system.
                        </li>
                        <li>Maintenance Manager: Process responsible for the periodic maintenance of Edge Servers,
                            coordinating when each server should enter maintenance mode.
                        </li>
                        <li>Shared Memory: Used to store and share information between processes, such as the processing
                            capacity of vCPUs and the status of servers.
                        </li>
                        <li>Named Pipes: For sending tasks from the Mobile Node to the Task Manager</li>
                        <li>Unnamed Pipes: For communication between Task Manager and Edge Servers.</li>
                        <li>Message Queue (MQ): For exchanging information between Edge Servers and Maintenance
                            Manager.
                        </li>
                    </ul>
                    <p>Tools used:</p>
                    <ul>
                        <li>Makefile: Necessary to compile the program.</li>
                        <li>Configuration Files: A configuration file defines parameters such as the number of Edge
                            Servers, processing capacity, and rules for managing tasks.
                        </li>
                        <li>Log File: To record all relevant events during the execution of the simulator.</li>
                        <li>Debugging Tools: Valgrind.</li>
                        <li>Programming Language: C.</li>

                    </ul>
                </div>
            </section>
            <section className="portfolio-section" id="portfolio">
                <img src={RC} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
                    <h2>Stock Market Application</h2>
                    <p>The project aims to implement a stock exchange transaction system, using various communication
                        techniques and protocols from the TCP/IP stack. The work is divided into two phases, with each
                        phase being evaluated separately.</p>
                    <p>Network Topology:</p>
                    <ul>
                        <li>The communication network is made up of three routers and three switches. </li>
                        <li>Includes IPv4 addressing, where different networks use different IP address ranges, and main router implements NAT.</li>
                    </ul>
                    <p>Structures Used:</p>
                    <ul>
                        <li>Exchange Server: It manages stock markets, with up to three stocks per market. Generates and
                            sends share values to clients via multicast.
                        </li>
                        <li>Operations Terminal (Client): Authenticates the user to the server and allows to view and
                            interact with their stock portfolio and balance.
                        </li>
                        <li>Task Manager: Process that manages the reception of tasks and their distribution to Edge
                            Servers. It creates the Edge Server processes and manages the job queue, assigning
                            priorities and dispatching jobs for execution.
                        </li>
                    </ul>
                    <p>Tools used:</p>
                    <ul>
                        <li>GNS3: used to configure and simulate the network.</li>
                        <li>Makefile: Necessary to compile the programs.</li>
                        <li>Configuration Files: A configuration file defines parameters such as the number of brokers
                            and concurrent clients.
                        </li>
                        <li>Debugging Tools: Valgrind.</li>
                        <li>Programming Language: C.</li>
                        <li>Testing TCP and UDP communications: Netcat.</li>
                    </ul>
                </div>
            </section>
            <section className="portfolio-section" id="portfolio">
                <img src={is_assignment1} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
                    <h2>WebFlux-Based Web Application Development</h2>
                    <p>In this project, a web application was developed using the WebFlux framework, which is part of
                        Spring Boot. The focus was on creating reactive applications, both on the server and client
                        sides. The server exposed web services that allowed CRUD operations on data entities like Pet
                        and Owner. The client application consumed these services and performed a series of queries to
                        process and analyze the data in a non-blocking, reactive manner.</p>
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

            <section className="portfolio-section" id="portfolio">
                <img src={is_assignment2} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
                    <h2> Kafka Streams-Based E-Commerce Analytics</h2>
                    <p>This project involved creating a series of standalone applications to simulate an e-commerce
                        environment, focusing on real-time data processing using Apache Kafka and Kafka Streams. The
                        system was designed to handle streams of data related to sales and purchases of products (socks,
                        in this case). The goal was to compute various metrics such as revenue, expenses, and profit,
                        and then store the results back in a database.</p>
                    <ul>
                        <li>Apache Kafka: As the messaging system to handle streams of data.</li>
                        <li> Kafka Streams: For processing data in real-time, calculating metrics, and producing results
                            for storage.
                        </li>
                        <li>Kafka Connect: To automate the extraction and insertion of data from/to a database.</li>
                        <li> Docker and Docker Compose: For setting up the Kafka environment and related services.</li>
                        <li> Maven: For project management and building the applications.</li>
                        <li> Java: Used to implement Kafka producers, consumers, and stream processors.</li>
                    </ul>
                </div>
            </section>
            <section className="portfolio-section" id="portfolio">
                <img src={jogo} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
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
            <section className="portfolio-section" id="portfolio">
                <img src={assignment1} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
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
            <section className="portfolio-section" id="portfolio">
                <img src={assignment2} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
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
            <section className="portfolio-section" id="portfolio">
                <img src={assignment3} alt="About Me" className="portfolio-section-image"/>
                <div className="portfolio-section-content">
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