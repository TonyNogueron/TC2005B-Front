import React, { useState } from "react";
import "./Register.css";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant } from "../../constants";
import { LOGO_CONSTANTS, LogoConstant } from "../../constants";
import { PAGE_TITLE } from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants";
const Swal = require("sweetalert2");

export const Register = () => {
  const title = PAGE_TITLE;
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const url = "http://localhost:3001";

  const [termsChecked, setTermsChecked] = useState(false); // add state for termsChecked
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsChecked(event.target.checked);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameRegister(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRegister(event.target.value);
  };

  const handleConfirmedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedPassword(event.target.value);
  };

  const validateUsername = async (username: string) => {
    let answer = false;
    //use fetch to validate if user exists
    await fetch(`${url}/user/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "User does not exist") {
          answer = true;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    return answer;
  };

  const validatePassword = (password: string) => {
    let answer = false;
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    );

    if (strongRegex.test(password)) {
      answer = true;
      //Good password
    }
    return answer;
  };

  // If terms and conditions is not checked then don't let the user advance to the next page
  const handleRegisterSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (usernameRegister === "" || passwordRegister === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All the fields are required!",
      });
    } else {
      const isUsernameValid = await validateUsername(usernameRegister);
      const isPasswordValid = validatePassword(passwordRegister);
      if (passwordRegister === confirmedPassword) {
        setPasswordsMatch(true);
      } else {
        setPasswordsMatch(false);
      }
      if (
        isUsernameValid &&
        isPasswordValid &&
        passwordsMatch &&
        termsChecked
      ) {
        //use fetch to register user
        await fetch(`${url}/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usernameRegister,
            password: passwordRegister,
            email: localStorage.getItem("email"),
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "User registered successfully") {
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "You have successfully registered!",
              });
              navigate(LINKS.LOGIN.path);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        if (!termsChecked) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You must agree to the terms and conditions!",
          });
        } else if (!isUsernameValid) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username already exists!",
          });
        } else if (!isPasswordValid) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password must be 8 characters long and contain at least one number, one lowercase letter and one special character (!@#$%^&*)!",
          });
        } else if (!passwordsMatch) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Passwords don't match!",
          });
        }
      }
    }
  };

  return (
    <div className="Register">
    <Header
      title={title}
      logo={logo[0]}
      menuItems={menuItems}
      isAuthenticated={false}
      isAdmin={false}
      isMenuOpen={isMenuOpen}
      onMenuToggle={handleMenuToggle}
    />
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
              <input
                className="input"
                type="text"
                onChange={handleUsernameChange}
                placeholder="Nombre de usuario"
              />
            </li>
            <li>
              <input
                className="input"
                type="password"
                onChange={handlePasswordChange}
                placeholder="Contraseña"
              />
            </li>
            <li>
              <input
                className="input"
                type="password"
                onChange={handleConfirmedPasswordChange}
                placeholder="Confirmar contraseña"
              />
            </li>
          </ul>
        </form>
        <div className="termsAndConditions">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              className="checkbox"
              checked={termsChecked}
              onChange={handleTermsChange}
            />
            <p className="termsAndConditionsText">
              Acepto los términos y condiciones
            </p>
          </div>
        </div>
        <button className="button" onClick={handleRegisterSubmit}>
          CONTINUAR
        </button>
      </div>
    </div>
  );
};
