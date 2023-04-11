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
          <Stats name={"Total Matches:"} value={matches} />
          <Stats name={"Highest Round:"} value={highestRound} />
          <Stats name={"Enemies Defeated:"} value={enemiesDefeated} />
          <Stats name={"Total Time Played:"} value={timePlayed} />
        </div>
        <div className="right-container">
          <div className="Elo-container">
            {rank && <Elo name={rankName} eloImg={rankImage} />}
            <div className="rank-container">
              <h2 className="rank-name">{rankName}</h2>
              <h2 className="rank-points">{points} points</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
