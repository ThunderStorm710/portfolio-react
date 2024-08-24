import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6lvkces', 'template_57xspw7', form.current, {
                publicKey: '5yMo8hsVJ9ZWS6cxt',
            })
            .then((result) => {
                    console.log(result.text);
                    alert('Thank you for reaching out! Your message has been sent.');
                    window.location.reload(); // Recarregar a página após o envio do email

                }, (error) => {
                    console.log(error.text);
                    alert('Oops! Something went wrong. Please try again.');
                },
            );
    };
    document.title = 'Contact - Pedro Ascensão';


    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <ul>
                        <li>
                            <i className="fab fa-linkedin"></i>
                            <span><a href="https://www.linkedin.com/in/pedro-ascensao/">LinkedIn Profile</a></span>
                        </li>
                        <li>
                            <i className="fab fa-github"></i>
                            <span><a href="https://github.com/ThunderStorm710">Github Profile</a></span>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Tomar & Coimbra</span>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <span>+351 968988525</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>pascensao77@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
