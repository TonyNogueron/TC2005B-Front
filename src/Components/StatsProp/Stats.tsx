import React from "react";
import "./Stats.css";

interface StatsProps {
    name: string;
    value: number;
}

const Stats: React.FC<StatsProps> = ({name,value}) => {
    return (
        <div className="stats-container">
            <div className="stats-name">
                <h1>{name}</h1>
            </div>
            <div className="stats-value">
                <h1>{value}</h1>
            </div>
        </div>
    );
};

export default Stats;