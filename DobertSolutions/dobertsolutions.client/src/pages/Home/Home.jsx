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
                    <div className="whatIDo">
                        <div className="what-i-do-container">
                            <h3>What I do (hover):</h3>
                            <div className="what-i-do-item">
                                <div className="title">Design and Develop Fullstack Web Apps</div>
                                <div className="description">I craft robust front-to-back solutions using modern frameworks, ensuring seamless integration between UI and backend logic.</div>
                            </div>

                            <div className="what-i-do-item">
                                <div className="title">Implement RESTful Applications</div>
                                <div className="description">I Build scalable APIs that follow REST principles for efficient client-server communication and data handling.</div>
                            </div>

                            <div className="what-i-do-item">
                                <div className="title">Migrate Legacy Software to Newer Technology</div>
                                <div className="description">I refactor and modernize outdated systems to improve performance, maintainability, and compatibility with current tech stacks.</div>
                            </div>

                            <div className="what-i-do-item">
                                <div className="title">Document Processes, Code and UI for Easy Understanding</div>
                                <div className="description">I create clear, developer-friendly documentation to accelerate onboarding and reduce future maintenance headaches.</div>
                            </div>
                            <div className="what-i-do-item">
                                <div className="title">Develop with UI/UX Best Practices</div>
                                <div className="description">I design interfaces focused on usability, accessibility, and responsiveness to deliver a refined user experience.</div>
                            </div>
                            <div className="what-i-do-item">
                                <div className="title">Optimize Performance and Scalability</div>
                                <div className="description">Collaborate with clients to gather requirements, provide technical guidance, and deliver solutions that meet their business goals.</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right-panel">
                    <div className="profile-wrapper">
                        <img src="/assets/profilepic.jpg" alt="Trenton Picture" className="profile-img" />

                        <div className="contact-info">
                            <p><strong>Email:</strong> <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:trentondobert@gmail.com" className="contact-item">trentondobert@gmail.com</a></p>
                            <p><strong>Phone:</strong> <FontAwesomeIcon icon={faPhone} /> <a href="tel:+17276373649" className="contact-item">(727)637-3649</a></p>
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
