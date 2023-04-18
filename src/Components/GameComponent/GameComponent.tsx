import React from "react";
import "./GameComponent.css";
import MySVG from "../SVGProp/SVGProp";

interface GameProps {
  gameTitle: string;
  gameImage: string;
  gameDescription: string;
  gameLink: string;
}

export default function GameComponent(props: GameProps) {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      className="game-container"
      onClick={() => openInNewTab(props.gameLink)}
    >
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
            <button className="game-play-button">
              <MySVG name="play" color="#ffff" nameClass="iconAulify" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
