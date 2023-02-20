import React from "react";
import { HeaderConstant } from "../../constants";
import { LogoConstant } from "../../constants";
import "./Footer.css";

interface HeaderProps {
    title: string;
    logo: LogoConstant[];
    menuItems: HeaderConstant[];
    logoIndex: number;
}

const Footer: React.FC<HeaderProps> = (props) => {
    return (
        <>
            <footer>
                <div className="footer-logo">
                    <img src={props.logo[props.logoIndex].path} alt={props.logo[props.logoIndex].alt} />
                </div>
            </footer>
        </>
    );
};

export default Footer;