import React,{useState} from "react";
import "./Profile.css";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant } from '../../constants';
import { LOGO_CONSTANTS, LogoConstant } from '../../constants';
import {PAGE_TITLE} from '../../constants';
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants";
import ProfileContainer from "src/Components/ProfileContainer/ProfileContainer";

export const Profile = () => {
    const title = PAGE_TITLE;
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
    const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
    const navigate = useNavigate();
    
    const [getUsername, setUsername] = useState("Aldo");
    const [getImg, setImg] = useState("boy-engineer");
    const [getElo, setElo] = useState("Elo");

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };  
    return(
        <div>
                <BackgroundProp backgroundName="blue-background" />
                <Header
                    title={title}
                    logo={logo[0]}
                    menuItems={menuItems}
                    isMenuOpen={isMenuOpen} // pass isMenuOpen as a prop
                    onMenuToggle={handleMenuToggle} // pass onMenuToggle as a prop
                />
                <Footer title={title} logo={logo[0]} menuItems={menuItems} />
                <ProfileContainer username={getUsername} profileImg={getImg} eloImg={getElo}/>
        </div>
    );
}