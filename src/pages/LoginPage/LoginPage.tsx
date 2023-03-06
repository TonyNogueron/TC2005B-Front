import React,{useState} from "react";
import "./LoginPage.css";
import { LINKS } from "../../constants";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant } from '../../constants';
import { LOGO_CONSTANTS, LogoConstant } from '../../constants';
import {PAGE_TITLE} from '../../constants';
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const title = PAGE_TITLE;
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
    const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
    const navigate = useNavigate();
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return(
         
        <div className="LoginContainer">
            <Header
                title={title}
                logo={logo[0]}
                menuItems={menuItems}
                isMenuOpen={isMenuOpen} // pass isMenuOpen as a prop
                onMenuToggle={handleMenuToggle} // pass onMenuToggle as a prop
            />
            <Footer title={title} logo={logo[0]} menuItems={menuItems} />
            <BackgroundProp backgroundName="blue-background" />
            <div className="Login">
                <div className="LoginTitleImage">
                    <img src={logo[0].path} alt="Logo" />
                </div>
                <form className="LoginForm">
                    <ul>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </li>
                    </ul>
                    <button type="submit" className="button" onClick={()=> navigate(LINKS.PROFILE.path)}>Login</button>
                </form>
                <div className="LoginRegister">
                    <p>Don't have an account?</p>
                    <a onClick={() => navigate(LINKS.REGISTER.path)}>Register</a>
                </div>
            </div>

        </div>
    );
};