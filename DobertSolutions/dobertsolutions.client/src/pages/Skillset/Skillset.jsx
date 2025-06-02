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
    const [skills, setSkills] = useState([]);

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

