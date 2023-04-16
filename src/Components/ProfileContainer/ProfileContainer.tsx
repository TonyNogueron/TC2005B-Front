import React, { useState } from "react";
import "./ProfileContainer.css";
import ProfileImg from "../ProfileImgProp/ProfileImg";
import Stats from "../StatsProp/Stats";
import Elo from "../EloProp/Elo";
import { RANKS, Rank, GameStats, GAME_STATS } from "src/gameConstants";

interface ProfileContainerProps {
  username: string;
  profileImg: string;
  points: number;
  matches: number;
  highestRound: number;
  enemiesDefeated: number;
  timePlayed: string;
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({
  username,
  profileImg,
  points,
  matches,
  highestRound,
  enemiesDefeated,
  timePlayed,
}) => {
  const defaultRank: Rank = RANKS[0]; // add default rank
  const rank: Rank = RANKS.reduce((prevRank, currentRank) => {
    return points >= currentRank.threshold ? currentRank : prevRank;
  }, defaultRank);

  const rankName: string = rank ? rank.name : "";
  const rankImage: string = rank ? rank.image : "";
  
  // I need the total time played to transform it into hours, minutes and seconds (it's currently in seconds)
  function formatTimePlayed(timePlayed: string) {
    const seconds = parseInt(timePlayed, 10);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  }
  

  return (
    <div className="profile-container">
      <div className="profile-top">
        <div className="profile-img">
        </div>
        <div className="profile-username">
          <h1>{username}</h1>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="left-container">
          <Stats name={"Partidas totales:"} value={matches} />
          <Stats name={"Ronda más alta:"} value={highestRound} />
          <Stats name={"Enemigos derrotados:"} value={enemiesDefeated} />
          <Stats name={"Tiempo total jugado :"} value={formatTimePlayed(timePlayed)} />
        </div>
        <div className="right-container">
          <div className="Elo-container">
            {rank && <Elo name={rankName} eloImg={rankImage} />}
            <div className="rank-container">
              <h2 className="rank-name">{rankName}</h2>
              <h2 className="rank-points">{points} puntos</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
