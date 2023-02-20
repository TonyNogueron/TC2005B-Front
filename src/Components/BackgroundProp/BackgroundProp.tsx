import React from "react";
import {BACKGROUND_CONSTANTS} from '../../constants';
import './Background.css';

export default function BackgroundProp(props: any) {
    const background = BACKGROUND_CONSTANTS.find((bg) => bg.name === props.backgroundName);
    if (!background) {
      return null; // handle the case where no background is found
    }
    const { path, alt } = background;
    return <img src={path} alt={alt} className="background-image" />;
  }
  