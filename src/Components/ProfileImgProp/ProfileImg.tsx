import React from "react";
import "./ProfileImg.css";

interface ProfileImgProps {
  img: string;
}

export const ProfileImg: React.FC<ProfileImgProps> = ({ img }) => {
  return (
    <div className="profile-img">
      <img src={img} alt="Profile" />
    </div>
  );
};
