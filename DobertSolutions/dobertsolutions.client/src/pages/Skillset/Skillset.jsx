import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import "./skillset.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faJs, faReact, faVuejs, faHtml5, faCss3Alt, faSass, faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import {
    faCode, faServer, faDatabase, faCloud, faCircleQuestion, faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import SkillCharts from "../../components/SkillCharts/SkillCharts";


// Register icons globally
library.add(
    faJs, faReact, faVuejs, faHtml5, faCss3Alt, faSass, faBootstrap,
    faCode, faServer, faDatabase, faCloud, faCircleQuestion, faLaptopCode
);

const Skillset = () => {
    /*const [skills, setSkills] = useState([]);

    useEffect(() => {
        const getSkills = async () => {
            try {
                const response = await fetch("/api/skillset");
                const data = await response.json();
                setSkills(data);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };

        getSkills();
    }, []);
    */

        const [skills] = useState([
        // Frontend (Type 1)
        { name: "JavaScript", score: 10, iconVariable: "js", iconColor: "#f7df1e", prefix: "fab", type: 1 },
        { name: "React", score: 9, iconVariable: "react", iconColor: "#61dafb", prefix: "fab", type: 1 },
        { name: "Vue.js", score: 8, iconVariable: "vuejs", iconColor: "#42b883", prefix: "fab", type: 1 },
        { name: "HTML5", score: 9, iconVariable: "html5", iconColor: "#e34f26", prefix: "fab", type: 1 },
        { name: "CSS3", score: 8, iconVariable: "css3-alt", iconColor: "#1572B6", prefix: "fab", type: 1 },
        { name: "Sass", score: 8, iconVariable: "sass", iconColor: "#cf649a", prefix: "fab", type: 1 },
        { name: "Bootstrap", score: 8, iconVariable: "bootstrap", iconColor: "#7952b3", prefix: "fab", type: 1 },
        { name: "Less", score: 6, iconVariable: "code", iconColor: "#f7df1e", prefix: "fas", type: 1 },

        // Backend (Type 2)
        { name: "ASP.NET", score: 9, iconVariable: "server", iconColor: "#512bd4", prefix: "fas", type: 2 },
        { name: "C#", score: 10, iconVariable: "laptop-code", iconColor: "#178600", prefix: "fas", type: 2 },
        { name: "Entity Framework", score: 7, iconVariable: "server", iconColor: "#00758f", prefix: "fas", type: 2 },
        { name: "REST APIs", score: 10, iconVariable: "cloud", iconColor: "#6366f1", prefix: "fas", type: 2 },
        { name: "SQL", score: 8, iconVariable: "database", iconColor: "#cc2927", prefix: "fas", type: 2 },

        // Other (Type 3)
        { name: "MVC/MVVM", score: 8, iconVariable: "layer-group", iconColor: "#4B7BEC", prefix: "fas", type: 3 },
        { name: "UX/UI Design", score: 7, iconVariable: "palette", iconColor: "#F39C12", prefix: "fas", type: 3 },
        { name: "Web Components", score: 9, iconVariable: "cubes", iconColor: "#16A085", prefix: "fas", type: 3 },
        { name: "Unit Testing", score: 7, iconVariable: "vial", iconColor: "#9B59B6", prefix: "fas", type: 3 },
        { name: "Dependency Injection", score: 8, iconVariable: "sitemap", iconColor: "#E67E22", prefix: "fas", type: 3 },
        { name: "LLM/AI tools", score: 8, iconVariable: "robot", iconColor: "#cc2927", prefix: "fas", type: 3 },
        { name: "Agile/Scrum", score: 9, iconVariable: "people-group", iconColor: "#2980B9", prefix: "fas", type: 3 },
        { name: "Cloud Development", score: 6, iconVariable: "cloud", iconColor: "#3498DB", prefix: "fas", type: 3 }
    ]);

    // Group skills by type
    const frontendSkills = skills.filter(s => s.type === 1);
    const backendSkills = skills.filter(s => s.type === 2);
    const otherSkills = skills.filter(s => s.type === 3);

    const renderSkillList = (skillGroup) => {
        return (
            <ul className="skill-list">
                {skillGroup.map(skill => (
                    <li key={skill.name} className="skill-card">
                        <div className="card-inner">
                            {/* Front Side */}
                            <div className="card-front">
                                <FontAwesomeIcon
                                    icon={skill.iconVariable ? [skill.prefix, skill.iconVariable] : ['fas', 'circle-question']}
                                    style={{ color: skill.iconColor }}
                                    className="fa-icon"
                                />
                                <span>{skill.name}</span>
                            </div>

                            {/* Back Side */}
                            <div className="card-back">
                                <span>Confidence: {skill.score}/10</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <PageWrapper>
            <div className="skillset-container">
                <h1 className="technical-header">Technical Skillset</h1>
                <div className="top-row">
                    <div className="left-box">
                        <h2>Frontend Tech</h2>
                        {renderSkillList(frontendSkills)}

                        <h2>Backend Tech</h2>
                        {renderSkillList(backendSkills)}
                    </div>

                    <div className="right-box">
                        <SkillCharts
                            frontendSkills={frontendSkills}
                            backendSkills={backendSkills}
                            otherSkills={otherSkills}
                        />
                    </div>
                </div>

                <div className="bottom-row tools">
                    <h2>Concepts and Technology</h2>
                    {renderSkillList(otherSkills)}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Skillset;

