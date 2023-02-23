import React from "react";
import { HeaderConstant } from "../../constants";
import { LogoConstant } from "../../constants";
import "./Footer.css";

interface HeaderProps {
    title: string;
    logo: LogoConstant;
    menuItems: HeaderConstant[];
}

const Footer: React.FC<HeaderProps> = ({title, logo, menuItems}) => {
    return (
        <>
            <footer>
                <div className="footer-logo">
                    <img src={logo.path} alt={logo.alt} />
                </div>
            </footer>
        </>
    );
};

export default Footer;