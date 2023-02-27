import React,{useState} from "react";
import "./Register.css";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant } from '../../constants';
import { LOGO_CONSTANTS, LogoConstant } from '../../constants';
import {PAGE_TITLE} from '../../constants';
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants";

export const Register = () => {
    const title = PAGE_TITLE;
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
    const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
    //const navigate = useNavigate();
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      return (
        <div className="Register">
            <Header
                title={title}
                logo={logo[0]}
                menuItems={menuItems}
                isMenuOpen={isMenuOpen} // pass isMenuOpen as a prop
                onMenuToggle={handleMenuToggle} // pass onMenuToggle as a prop
            />
            </div>
        );
    };
//