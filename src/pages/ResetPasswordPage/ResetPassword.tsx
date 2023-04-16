import React, { useState, useEffect } from "react";
import nina from "src/resources/images/backgrounds/nina.png";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import { RGBImg } from "src/Components/RGBImgProp/RGBImg";
import { useParams } from "react-router-dom";
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
import "./ResetPassword.css";
const Swal = require("sweetalert2");

export const ResetPassword = () => {
  const { idUser, token } = useParams();

  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;

  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const validatePassword = (password: string) => {
    let answer = false;
    var strongRegex = new RegExp(
      //"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    );

    if (strongRegex.test(password)) {
      answer = true;
      //Good password
    }
    return answer;
  };


  useEffect(() => {
    validateUserAndToken();
  }, []);

  const validateUserAndToken = () => {
    fetch(`${apiURL}/validateToken?idUser=${idUser}&token=${token}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== "Token is valid") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Token is not valid!",
          });
          navigate(LINKS.HOME.path);
        }
      });
  };

  const handlePasswordChange = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password === "" || confirm === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
    } else {
      const isPassword = validatePassword(password);

      if (!isPassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please input a valid password. Password must be 8 characters long and contain at least one number, one lowercase letter and one special character (!@#$%^&*)!",
        });
      } else {
        if (password !== confirm) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Passwords do not match!",
          });
        } else {
          fetch(`${apiURL}/user/password`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idUser: parseInt(idUser || "0"),
              password: password,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.message === "Password changed successfully") {
                Swal.fire({
                  icon: "success",
                  title: "Success",
                  text: "Your password has been updated successfully!",
                });
                navigate(LINKS.LOGIN.path);
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
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
            <form className="LoginForm" onSubmit={handlePasswordChange}>
              <div className="topLoginForm">
                <h1 className="LoginTitle">Cambiar Contraseña</h1>
                <ul>
                  <li>
                    <label htmlFor="username">Nueva Contraseña</label>
                    <input
                      type="password"
                      name="username"
                      id="password"
                      placeholder="Contraseña"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </li>
                  <li>
                    <label htmlFor="password">Confirmar contraseña</label>
                    <input
                      type="password"
                      name="password"
                      id="confirm"
                      placeholder="Contraseña"
                      onChange={(e) => {
                        setConfirm(e.target.value);
                      }}
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
