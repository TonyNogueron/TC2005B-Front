import React from "react";
import "./GameComponent.css";

interface GameProps {
  gameTitle: string;
  gameImage: string;
  gameDescription: string;
  gameLink: string;
}

export default function GameComponent(props: GameProps) {
  return (
    <div className="game-container">
      <div className="game-image-background">
        <img src={props.gameImage} alt="game-image" />
      </div>
      <div className="gameBottomContainer">
        <div className="gameTextContainer">
          <div className="game-title">
            <h1>{props.gameTitle}</h1>
          </div>
          <div className="game-description">
            <p>{props.gameDescription}</p>
          </div>
          <div className="game-play-buttonContainer">
            <button className="game-play-button">Jugar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
