import React,{useState} from "react";
import "./ProfileContainer.css";
import ProfileImg from "../ProfileImgProp/ProfileImg";
import Stats from "../StatsProp/Stats";
import Elo from "../EloProp/Elo";
import { RANKS, Rank, GameStats, GAME_STATS } from "src/gameConstants";

interface ProfileContainerProps {
    username: string;
    profileImg: string;
    points: number;
}




const ProfileContainer: React.FC<ProfileContainerProps> = ({username, profileImg,points}) => {
    const defaultRank: Rank = RANKS[0]; // add default rank
    const rank: Rank = RANKS.reduce((prevRank, currentRank) => {
      return points >= currentRank.threshold ? currentRank : prevRank;
    }, defaultRank);
  
    const rankName: string = rank ? rank.name : "";
    const rankImage: string = rank ? rank.image : "";
    console.log('points:', points);
    console.log('rank:', rank);
    console.log('rankName:', rankName);

    return (
        <div className="profile-container">
            <div className = "profile-top">
                <div className = "profile-img">
                    <ProfileImg name={profileImg}/>
                </div>
                <div className = "profile-username">
                    <h1>{username}</h1>
                </div>
            </div>
            <div className = "profile-bottom">
                <div className = "left-container">
                {Object.keys(GAME_STATS).map((key) => (
                    <Stats
                    key={key}
                    name={GAME_STATS[key as keyof typeof GAME_STATS].name}
                    value={GAME_STATS[key as keyof typeof GAME_STATS].value}
                    />
                ))}
                </div>
                <div className = "right-container">
                {rank && <Elo name={rankName} eloImg={rankImage} />}
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;