import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import "./skillset.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Skillset = () => {
    return (
        <PageWrapper>       
            <div>
                <div className="skillset-container">
                    <div className="top-row">
                        <div className="left-box">
                            <h2>Frontend Tech</h2>
                            <ul className="skill-list">
                                <li><FontAwesomeIcon icon={['fab', 'js']} className="icon-js fa-icon" /> JavaScript</li>
                                <li><FontAwesomeIcon icon={['fab', 'react']} className="icon-react fa-icon" /> React</li>
                                <li><FontAwesomeIcon icon={['fab', 'vuejs']} className="icon-vue fa-icon" /> Vue.js</li>
                                <li><FontAwesomeIcon icon={['fab', 'html5']} className="icon-html fa-icon" /> HTML5</li>
                                <li><FontAwesomeIcon icon={['fab', 'css3-alt']} className="icon-css fa-icon" /> CSS3</li>
                                <li><FontAwesomeIcon icon={['fab', 'sass']} className="icon-sass fa-icon" /> SCSS</li>
                                <li><FontAwesomeIcon icon={['fas', 'code']} className="icon-less fa-icon" /> LESS</li>
                                <li><FontAwesomeIcon icon={['fab', 'bootstrap']} className="icon-bootstrap fa-icon" /> Bootstrap</li>
                            </ul>

                            <h2>Backend Tech</h2>
                            <ul className="skill-list">
                                <li><FontAwesomeIcon icon={['fas', 'server']} className="icon-aspnet fa-icon" /> ASP.NET Core</li>
                                <li><FontAwesomeIcon icon={['fas', 'code']} className="icon-csharp fa-icon" /> C#</li>
                                <li><FontAwesomeIcon icon={['fas', 'database']} className="icon-ef fa-icon" /> Entity Framework</li>
                                <li><FontAwesomeIcon icon={['fas', 'cloud']} className="icon-rest fa-icon" /> REST APIs</li>
                                <li><FontAwesomeIcon icon={['fas', 'database']} className="icon-sql fa-icon" /> SQL Server</li>
                            </ul>
                        </div>

                        <div className="right-box">
                            <h2>Placeholder for future content</h2>
                        </div>
                    </div>

                    <div className="bottom-row tools">
                        <h2>Languages and Technology</h2>
                        <ul>
                            <li>MVC / MVVM</li>
                            <li>Git, Postman, VS Code</li>
                            <li>Clean Architecture</li>
                        </ul>
                    </div>
                </div>
            </div>
        </PageWrapper>

    )
}

export default Skillset