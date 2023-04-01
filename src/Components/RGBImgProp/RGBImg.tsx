import React from "react";
import "./RGBImg.css";

export interface RGBImgProps {
    img: string;
    alt: string;
    id: string;
    nameClass?: string;
}

export const RGBImg: React.FC<RGBImgProps> = (props) => {
    return (
        <div className="ImageContainer" id={props.id}>
            <img src={props.img} alt={props.alt} className={props.nameClass}/>
        </div>
    );
};