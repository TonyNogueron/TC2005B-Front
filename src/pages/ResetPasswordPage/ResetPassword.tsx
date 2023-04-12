import React, { useState, useCallback, useMemo } from "react";
import nina from "src/resources/images/backgrounds/nina.png";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import { RGBImg } from "src/Components/RGBImgProp/RGBImg";
import {
  LINKS,
  LOGO_CONSTANTS,
  LogoConstant,
  HEADER_ITEMS,
  HeaderConstant,
} from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";
const Swal = require("sweetalert2");

export const ResetPassword = () => {
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;

  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen

  const [getRecoverUser, setRecoverUser] = useState("");
  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePasswordChange = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="LoginContainer">
      <HeaderComponent
        logo={logo[0]}
        menuItems={menuItems}
        isAuthenticated={false}
        isAdmin={false}
        onMenuToggle={handleMenuToggle}
      />

      <BackgroundProp backgroundName="white-background" />
      <div className="twoRowContainer">
        <div className="LeftContainer">
          <RGBImg img={nina} alt="nina" id="nina" />
        </div>
        <div className="RightContainer">
          <div className="Login">
            <form className="LoginForm" onSubmit={handlePasswordChange}>
              <div className="topLoginForm">
                <h1 className="LoginTitle">
                  Recuperar contraseña para: {getRecoverUser}
                </h1>
                <ul>
                  <li>
                    <label htmlFor="username">Contraseña</label>
                    <input
                      type="password"
                      name="username"
                      id="username"
                      placeholder="Contraseña"
                    />
                  </li>
                  <li>
                    <label htmlFor="password">Confirmar contraseña</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Contraseña"
                    />
                  </li>
                </ul>
              </div>
              <div className="ButtonContainer">
                <button type="submit" className="enterButton">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
