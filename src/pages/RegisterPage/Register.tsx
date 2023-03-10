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
        const [termsChecked, setTermsChecked] = useState(false); // add state for termsChecked
        const [usernameFilled, setUsernameFilled] = useState(false);
        const [password, setPassword] = useState("");
        const [confirmedPassword, setConfirmedPassword] = useState("");
        const [passwordsMatch, setPasswordsMatch] = useState(true);
        
        const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTermsChecked(event.target.checked);
        };
        const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setUsernameFilled(event.target.value.length > 0);
        };
        const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
        };
        
        const handleConfirmedPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setConfirmedPassword(event.target.value);
            setPasswordsMatch(event.target.value === password);
        };
      // If terms and conditions is not checked then don't let the user advance to the next page
      const handleContinueClick = () => {
        if (!termsChecked) {
          alert("Debes aceptar los t??rminos y condiciones");
          return;
        }
        if (!usernameFilled) {
          alert("Debes ingresar un nombre de usuario");
          return;
        }
        if (!confirmedPassword) {
            alert("Debes ingresar una contrase??a");
            return;
        }
        if (!passwordsMatch) {
            alert("Las contrase??as no coinciden");
            return;
        }
        
        navigate(LINKS.LOGIN.path);
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
                            <input className="input" type="text" onChange={handleUsernameChange} placeholder="Nombre de usuario" />
                        </li>
                        <li>
                            <input className="input" type="password" onChange={handlePasswordChange} placeholder="Contrase??a" />
                        </li>
                        <li>
                            <input className="input" type="password" onChange={handleConfirmedPasswordChange} placeholder="Confirmar contrase??a" />
                        </li>
                    </ul>
                </form>
                <div className="termsAndConditions">
                    <div className="checkbox-wrapper">
                        <input type="checkbox" className="checkbox" checked={termsChecked} onChange={handleTermsChange}/>
                        <p className="termsAndConditionsText">Acepto los t??rminos y condiciones</p>
                    </div>
                </div>
                <button className="button" onClick={handleContinueClick}>CONTINUAR</button>
                </div>
            </div>
        );
    };
//