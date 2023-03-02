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
import ProfileImg from "src/Components/ProfileImgProp/ProfileImg";


export const Profile = () => {
    const title = PAGE_TITLE;
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
    const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
    const navigate = useNavigate();


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
                <div className="profile-container">
                    <div className="profile-top">
                        <div className="profile-img-container">
                            <ProfileImg name="boy-engineer" />
                        </div>
                        <div className="profile-info-container">
                            <h2>Nombre</h2>
                        </div>
                    </div>
                    <div className="profile-bottom">
                        <h2>Hola</h2>
                    </div>
                </div>
        </div>
    );
}