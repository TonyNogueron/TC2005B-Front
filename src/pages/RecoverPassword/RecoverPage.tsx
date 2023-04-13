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
const Swal = require("sweetalert2");
import "./RecoverPage.css";

export const RecoverPassword = () => {
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;

  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const url = "http://localhost:3001";
  const handleRecoverPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input an email!",
      });
    } else {
      // Check if input is an email
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isEmail) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please input a valid email!",
        });
      } else {
        // Set the data to send in the fetch request
        const requestData = { email: email };

        fetch(`${url}/forgotPassword`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "Email to recover has been sent") {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "An email has been sent to your account!",
              });
              navigate(LINKS.LOGIN.path);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This email is not registered!",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
            console.log(error);
          });
      }
    }
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
        <div className="right-container">
          <div className="Recover">
            <form className="RecoverForm" onSubmit={handleRecoverPassword}>
              <div className="topRecoverForm">
                <h1 className="RecoverTitle">Recuperar contraseña</h1>
                <div className="inputWrapper">
                  <label htmlFor="email">Correo electrónico registrado</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="ButtonContainer">
                <button type="submit" className="enterButton">
                  Recuperar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
