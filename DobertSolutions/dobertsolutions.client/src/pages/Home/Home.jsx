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
                    <p> It's a pleasure to meet you, I'm Trenton Dobert, an experienced ASP.NET Full Stack Developer
                        with 7 years of experience in developing scalable, efficient,
                        and robust web applications. Specializing in React, Vue.js,
                        C# backend development, SQL databases, and architecture patterns
                        like MVVM and MVC, I develop with modern technologies to deliver
                        high-performance software solutions tailored to your business and
                        individual needs. Whether it's building custom applications,
                        optimizing backend processes, or designing intuitive front-end interfaces,
                        I bring the expertise needed to turn your project vision into reality.
                    </p>
                </div>
                <div className="right-panel">
                    <div className="profile-wrapper">
                        <img src="/assets/TrentonDobertPic.jpg" alt="Trenton Picture" className="profile-img" />

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
                {/* Full-width section for future content*/}
            </div>
        </PageWrapper>
    );
};

export default Home;
