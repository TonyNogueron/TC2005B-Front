import React, { useState, useCallback, useMemo } from "react";
import nina from "src/resources/images/backgrounds/nina.png";
import "./LoginPage.css";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
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

  //const url = process.env.REACT_APP_API_URL;
  const url = "http://localhost:3001";

  const handleSubmitLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (usernameLogin === "" || passwordLogin === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All the fields are required!",
      });
    } else {
      fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameLogin,
          password: passwordLogin,
        }),
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
            //localStorage.setItem("isAdmin", data.isAdmin.toString());
            localStorage.setItem("username", usernameLogin);
            navigate(LINKS.PROFILE.path);
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Incorrect username or password!",
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
        isMenuOpen={isMenuOpen}
        onMenuToggle={handleMenuToggle}
      />

      <BackgroundProp backgroundName="white-background" />
      <div className="twoRowContainer">
        <div className="LeftContainer">
          <div className="ImageContainer">
            <img src={nina} alt="nina" className="nina" />
          </div>
        </div>
        <div className="RightContainer">
          <div className="Login">
            <h1 className="LoginTitle">Iniciar sesión</h1>
            <form className="LoginForm" onSubmit={handleSubmitLogin}>
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
              <div className="ButtonContainer">
                <div className="OlvideContraseña">¿Olvidaste tu contraseña?</div>
                <button type="submit" className="enterButton">
                  Entrar
                </button>
                <button onClick={() => navigate(LINKS.REGISTER.path)} className="createButton">Crear una cuenta</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
      //Submit
      /*axios
        .post(`${url}/login`, {
          username: usernameLogin,
          password: passwordLogin,
        })
        .then((response: { data: ApiResponse }) => {
          if (response.data.message === "User logged in successfully") {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "You have successfully logged in!",
            });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("idUser", response.data.idUser.toString());
            navigate(LINKS.PROFILE.path);
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Incorrect username or password!",
            });
          }
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });

          console.log(error);
        });
        */
