import React from "react";
import "./Header.css";

interface HeaderProps {
    title: string;
    logo: string;
    menuItems: string[];

}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
        <header>
            <div className="header-logo">
                <img src = {props.logo} alt="logo" />
            </div>
            <div className="header-title">
                <h1>{props.title}</h1>
            </div>
            <div className="header-menu">
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>

        </header>
        </>
    );
}

export default Header;