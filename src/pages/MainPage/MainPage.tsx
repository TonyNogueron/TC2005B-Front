import React, { useState } from "react";
import "./MainPage.css";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant } from "../../constants";
import { LOGO_CONSTANTS, LogoConstant } from "../../constants";
import { PAGE_TITLE } from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants";
const Swal = require("sweetalert2");

export default function MainPage() {
  const title = PAGE_TITLE;
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [emailRegister, setEmailRegister] = useState("");

  const handleEmailRegister = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailRegister(e.target.value);
  };

  const validateEmail = (email: string | string[]) => {
    let ans = false;
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      ans = false;
    } else {
      ans = true;
    }
    return ans;
  };

  const handleSubmitRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (emailRegister === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All the fields are required!",
      });
    } else {
      if (validateEmail(emailRegister)) {
        localStorage.setItem("email", emailRegister);
        navigate(LINKS.REGISTER.path);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a valid email address!",
        });
      }
    }
  };

  return (
    <div className="mainPage">
      <BackgroundProp backgroundName="blue-background" />
      <Header
        title={title}
        logo={logo[0]}
        menuItems={menuItems}
        isMenuOpen={isMenuOpen} // pass isMenuOpen as a prop
        onMenuToggle={handleMenuToggle} // pass onMenuToggle as a prop
      />
      <div className="main-page">
        <div className="topContainer">
          <h1 className="mainMessage">AQUÍ COMIENZA TU HISTORIA</h1>
          <h2 className="subMessage">
            POR FAVOR INGRESA TU CORREO ELECTRÓNICO
          </h2>
        </div>
      </div>
      <div className="bottomContainer">
        <form className="form" onSubmit={handleSubmitRegister}>
          <input
            className="input"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleEmailRegister}
          />
          <button className="button" type="submit">
            CONTINUAR
          </button>
        </form>
      </div>
      <Footer title={title} logo={logo[0]} menuItems={menuItems} />
    </div>
  );
}

/*

  <BackgroundProp backgroundName="red-background" />
*/
