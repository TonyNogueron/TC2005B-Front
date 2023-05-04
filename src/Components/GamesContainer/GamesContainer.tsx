import React from "react";
import GameComponent from "../GameComponent/GameComponent";
import { GAMES_PROPERTIES } from "src/gameConstants";
import "./GamesContainer.css";

export default function GamesContainer() {
  return (
    <div className="games-container">
      {Object.values(GAMES_PROPERTIES).map((game) => (
        <GameComponent
          key={game.id}
          gameTitle={game.name}
          gameImage={game.image}
          gameDescription={game.description}
          gameLink={
            game.id.toString() === "3"
              ? game.url
              : game.url + "/" + localStorage.getItem("token")
          }
        />
      ))}
    </div>
  );
}
