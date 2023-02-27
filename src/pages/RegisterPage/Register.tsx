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
    const navigate = useNavigate();
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
            <Footer title={title} logo={logo[0]} menuItems={menuItems} />
            <BackgroundProp backgroundName="blue-background" />
            <div className="main-page">
                <div className="topContainer">
                    <h1 className="mainMessage">CREA TU NOMBRE DE USUARIO</h1>
                </div>
            </div>
            <div className="bottomContainer">
                <form className="registerForm">
                    <ul>
                        <li>
                            <input className="input" type="text" placeholder="Nombre de usuario" />
                        </li>
                        <li>
                            <input className="input" type="password" placeholder="Contraseña" />
                        </li>
                        <li>
                            <input className="input" type="password" placeholder="Confirmar contraseña" />
                        </li>
                    </ul>
                </form>
                <div className="termsAndConditions">
                    <div className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox"/>
                        <p className="termsAndConditionsText">Acepto los términos y condiciones</p>
                    </div>
                </div>
                <button className="button" onClick={()=> navigate(LINKS.BIRTH.path)}>CONTINUAR</button>
                </div>
            </div>
        );
    };
//