import React from "react";
import "./ProfileContainer.css";
import {PROFILE_IMAGE_CONSTANTS} from "../../constants";
import ProfileImg from "../ProfileImgProp/ProfileImg";


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
                </div>
                <div className = "right-container">
                </div>
            </div>
        </div>
    );
};