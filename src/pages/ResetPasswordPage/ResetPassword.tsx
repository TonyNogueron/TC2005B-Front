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

  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderComponent
        logo={logo[0]}
        menuItems={menuItems}
        isAuthenticated={false}
        isAdmin={false}
        onMenuToggle={handleMenuToggle}
      />
      <div className="recoverForm">
        <form>
            <div className="form-top">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-bottom">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
      </div>
    </>
  );
};

