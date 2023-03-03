import React,{useState} from "react";
import "./ProfileContainer.css";
import ProfileImg from "../ProfileImgProp/ProfileImg";
import Stats from "../StatsProp/Stats";
import { GAME_STATS } from "src/gameConstants";

interface ProfileContainerProps {
    username: string;
    profileImg: string;
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({username, profileImg}) => {
    
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
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;