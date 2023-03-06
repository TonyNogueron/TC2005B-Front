import React from "react";
import "./Elo.css";

interface EloProps {
    name: string;
    eloImg: string;
}

const Elo: React.FC<EloProps> = ({ name, eloImg }) => {
    return (
        <div className="Elo">
            <img src={eloImg} alt={name} />
        </div>
    );
};

export default Elo;