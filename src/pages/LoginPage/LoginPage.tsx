import React, { useState, useCallback, useMemo } from "react";
import nina from "src/resources/images/backgrounds/nina.png";
import "./LoginPage.css";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import { RGBImg } from "src/Components/RGBImgProp/RGBImg";
import {
  LINKS,
  LOGO_CONSTANTS,
  LogoConstant,
  HEADER_ITEMS,
  HeaderConstant,
  apiURL,
} from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
const Swal = require("sweetalert2");

export const LoginPage = () => {
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;

  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen

  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleUsernameLogin = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsernameLogin(e.target.value);
  };

  const handlePasswordLogin = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPasswordLogin(e.target.value);
  };
  const handleSubmitLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (usernameLogin === "" || passwordLogin === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All the fields are required!",
      });
    } else {
      // Check if input is an email
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameLogin);

      // Set the data to send in the fetch request
      const requestData = isEmail
        ? { email: usernameLogin, password: passwordLogin }
        : { username: usernameLogin, password: passwordLogin };

      fetch(`${apiURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "User logged in successfully") {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "You have successfully logged in!",
            });
            localStorage.setItem("token", data.token);
            localStorage.setItem("idUser", data.idUser.toString());
            fetch(`${apiURL}/getUser?idUser=${data.idUser}`, {
              method: "GET",
              headers: {
                "x-access-token": localStorage.getItem("token") || "",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                localStorage.setItem("username", data ? data.username : "");
                localStorage.setItem(
                  "isAdmin",
                  data ? (data.isAdmin ? "true" : "false") : "false"
                );
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            navigate(LINKS.PROFILE.path + "/" + localStorage.getItem("idUser"));
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Incorrect email or username or password!",
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
            <form className="LoginForm" onSubmit={handleSubmitLogin}>
              <div className="topLoginForm">
                <h1 className="LoginTitle">Iniciar sesión</h1>
                <ul>
                  <li>
                    <label htmlFor="username">Email/Usuario</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Email/Usuario"
                      onChange={handleUsernameLogin}
                    />
                  </li>
                  <li>
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Contraseña"
                      onChange={handlePasswordLogin}
                    />
                  </li>
                </ul>
              </div>
              <div className="ButtonContainer">
                <div
                  className="OlvideContraseña"
                  onClick={() => navigate(LINKS.FORGOT_PASSWORD.path)}
                >
                  ¿Olvidaste tu contraseña?
                </div>
                <button type="submit" className="enterButton">
                  Entrar
                </button>
                <button
                  onClick={() => navigate(LINKS.REGISTER.path)}
                  className="createButton"
                >
                  Crear una cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
