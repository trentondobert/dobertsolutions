import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import "./home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <PageWrapper>
            <div className="home-container">
                <div className="left-panel">
                    <h1>Welcome!</h1>
                    <p> It's a pleasure to meet you, I'm Trenton Dobert, an experienced ASP.NET Full Stack Web Developer
                        with 7 years of experience in developing scalable, efficient,
                        and robust web applications.
                    </p>
                    <p className="gradyQuote"> <i>The function of good software is to make the complex appear to be simple. - </i><a href="https://en.wikipedia.org/wiki/Grady_Booch" className="contact-item">Grady Booch</a></p>
                    <div class="whatIDo">
                        <div className="what-i-do-container">
                            <h3>What I do (hover):</h3>
                            <div className="what-i-do-item">
                                <div className="title">Design, Develop and Maintain Software</div>
                                <div className="description">I build scalable, maintainable fullstack applications with clean architecture and modern tooling.</div>
                            </div>

                            <div className="what-i-do-item">
                                <div className="title">Web API Development</div>
                                <div className="description">I create secure, RESTful APIs using ASP.NET Core with full CRUD operations and token-based auth.</div>
                            </div>

                            <div className="what-i-do-item">
                                <div className="title">Train and Engineer AI Neural Networks</div>
                                <div className="description">I experiment with neural networks using frameworks like TensorFlow and integrate them into custom solutions.</div>
                            </div>

                            <div className="what-i-do-item">
                                <div className="title">Create Technical Documentation</div>
                                <div className="description">I write clear, developer-friendly documentation for APIs, systems, and architecture decisions.</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right-panel">
                    <div className="profile-wrapper">
                        <img src="/assets/profilepic.jpg" alt="Trenton Picture" className="profile-img" />

                        <div className="contact-info">
                            <p><strong>Email:</strong> <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:trentondobert@gmail.com" className="contact-item">trentondobert@gmail.com</a></p>
                            <p><strong>Phone:</strong> <FontAwesomeIcon icon={faPhone} /> <a href="tel:+17276373649" className="contact-item">(727) 637-3649</a></p>
                            <p><strong>GitHub:</strong> <FontAwesomeIcon icon={faGithub} />{' '} <a className="contact-item" href="https://github.com/trentondobert" target="_blank" rel="noopener noreferrer" target="_blank">github.com/trentondobert</a></p>
                            <p><strong>LinkedIn:</strong> <FontAwesomeIcon icon={faLinkedin} />{' '} <a className="contact-item" href="https://linkedin.com/in/trenton-dobert-5a53a3b8" target="_blank" rel="noopener noreferrer" target="_blank">linkedin.com/in/trenton-dobert-5a53a3b8</a></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="home-bottom">
                
            </div>
        </PageWrapper>
    );
};

export default Home;
