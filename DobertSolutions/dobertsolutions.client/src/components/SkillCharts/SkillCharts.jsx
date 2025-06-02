import React, { useState } from "react";
import { Chart } from "react-google-charts";

const SkillCharts = ({ frontendSkills, backendSkills, otherSkills }) => {
    const [selectedChart, setSelectedChart] = useState("frontend");

    const chartOptions = {
        chart: {
            title: "Skill Confidence",
        },
        hAxis: {
            title: "Skill",
        },
        vAxis: {
            title: "Confidence Score",
            minValue: 0,
            maxValue: 10,
        },
        legend: { position: "none" },
    };

    const convertToChartData = (skillsArray) => {
        return [
            ["Skill", "Confidence Score", { role: "style" }],
            ...skillsArray.map((skill) => [skill.name, skill.score, skill.iconColor || "#3366CC",]),
        ];
    };

    const getCurrentChartData = () => {
        switch (selectedChart) {
            case "frontend":
                return convertToChartData(frontendSkills);
            case "backend":
                return convertToChartData(backendSkills);
            case "conceptual":
                return convertToChartData(otherSkills);
            default:
                return [];
        }
    };

    return (
        <div className="skill-chart-container">
            <div className="chart-buttons">
                <button onClick={() => setSelectedChart("frontend")}>Frontend</button>
                <button onClick={() => setSelectedChart("backend")}>Backend</button>
                <button onClick={() => setSelectedChart("conceptual")}>Conceptual</button>
            </div>

            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={getCurrentChartData()}
                options={chartOptions}
            />
        </div>
    );
};

export default SkillCharts;
