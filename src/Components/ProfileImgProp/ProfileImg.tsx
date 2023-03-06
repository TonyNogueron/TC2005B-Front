import React from "react";
import "./ProfileImg.css";
import { PROFILE_IMAGE_CONSTANTS } from "../../constants";

interface ProfileImgProps {
  name: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({ name }) => {
  const image = PROFILE_IMAGE_CONSTANTS.find(img => img.name === name);

  if (!image) {
    throw new Error(`Could not find image with name '${name}'`);
  }

  return (
    <div className="profile-img">
      <img src={image.path} alt={image.alt} />
    </div>
  );
};

export default ProfileImg;
