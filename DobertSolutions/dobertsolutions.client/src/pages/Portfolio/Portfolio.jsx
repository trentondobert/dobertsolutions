import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import './Portfolio.scss';

const Portfolio = () => {
    /*const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/portfolio");
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching portfolio projects:", error);
            }
        };

        fetchProjects();
    }, []);*/
        const projects = [
        {
            name: "Dobert Solutions",
            imageUrl: "/assets/projects/dobert-solutions.png",
            description: "A fullstack React + ASP.NET Core web app for showcasing skills and projects.",
            techStack: ["React", "ASP.NET Core", "SCSS", "Azure SQL", "MVC"],
            githubUrl: "https://github.com/trentondobert/dobertsolutions.git",
            liveDemoUrl: "https://dobertsolutions.com"
        },
        {
            name: "Kerry the Card Counter",
            imageUrl: "/assets/projects/kerry.png",
            description: "A Tensorflow Neural Network designed to learn how to Count Cards in Blackjack.",
            techStack: ["Python", "TensorFlow.js"],
            githubUrl: "https://github.com/trentondobert/KerryCardCounter",
            liveDemoUrl: ""
        },
        {
            name: "Seamless Gutters",
            imageUrl: "/assets/projects/Seamless-Gutters.png",
            description: "Marketing site for a Florida gutter cleaning business.",
            techStack: ["React", "Node.js", "MVC"],
            githubUrl: "https://github.com/trentondobert/SeamlessGutters",
            liveDemoUrl: ""
        }
    ];


    return (
        <PageWrapper>
            <div className="portfolio-container">
                <h1 className="portfolio-header">Some of my work</h1>
                <div className="grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.imageUrl} alt={project.name} className="project-image" />
                            <h2>{project.name}</h2>
                            <p className="description">{project.description}</p>
                            <div className="tech-stack">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="tech-item">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                                {project.liveDemoUrl && (
                                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Portfolio;
