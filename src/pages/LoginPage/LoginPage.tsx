import React, { useState, useCallback, useMemo } from "react";
import "./LoginPage.css";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import {
  LINKS,
  LOGO_CONSTANTS,
  LogoConstant,
  PAGE_TITLE,
  HEADER_ITEMS,
  HeaderConstant,
} from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Swal = require("sweetalert2");

interface ApiResponse {
  message: string;
  token: string;
  idUser: number;
}

export const LoginPage = () => {
  const title = PAGE_TITLE;
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
        <form className="LoginForm" onSubmit={handleSubmitLogin}>
          <ul>
            <li>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleUsernameLogin}
              />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handlePasswordLogin}
              />
            </li>
          </ul>
          <button type="submit" className="button">
            Login
          </button>
        </form>
        <div className="LoginRegister">
          <p>Don't have an account?</p>
          <a onClick={() => navigate(LINKS.REGISTER.path)}>Register</a>
        </div>
      </div>
    </div>
  );
};
