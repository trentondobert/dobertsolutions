import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import "./Contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <PageWrapper>
            <div className="contact-container">
                <h1 className="contact-header">Interested in working with me? Contact me and I'll get back to you as soon as I can. </h1>
                <div className="top-row">
                    <div className="left-box">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name <span className="optional">(optional)</span></label>
                                    <input type="text" id="lastName" name="lastName" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        Phone <span className="optional">(optional)</span>
                                    </label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="right-box">
                        <h2>Contact Info</h2>
                        <p><strong>Email:</strong> <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:trentondobert@gmail.com" className="contact-item">trentondobert@gmail.com</a></p>
                        <p><strong>Phone:</strong> <FontAwesomeIcon icon={faPhone} /> <a href="tel:+17276373649" className="contact-item">(727) 637-3649</a></p>
                        <p><strong>Location:</strong> St Petersburg, Florida</p>
                        <p><strong>Time Zone:</strong> EST</p>

                        <h4>Find me online:</h4>
                        <div className="social-icons">
                            <p><strong>GitHub:</strong> <FontAwesomeIcon icon={faGithub} />{' '} <a className="contact-item" href="https://github.com/trentondobert" target="_blank" rel="noopener noreferrer" target="_blank">github.com/trentondobert</a></p>
                            <p><strong>LinkedIn:</strong> <FontAwesomeIcon icon={faLinkedin} />{' '} <a className="contact-item" href="https://linkedin.com/in/trenton-dobert-5a53a3b8" target="_blank" rel="noopener noreferrer" target="_blank">linkedin.com/in/trenton-dobert-5a53a3b8</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Contact;
