import React, { useState } from "react";
import "./Register.css";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import { HEADER_ITEMS, HeaderConstant, LOGO_CONSTANTS, LogoConstant, GRADO_ACADEMICO, ESTADOS_DE_MEXICO } from "../../constants";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants";
import MySVG from "src/Components/SVGProp/SVGProp";
const Swal = require("sweetalert2");

export const Register = () => {
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const url = "http://localhost:3001";

  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

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
        passwordsMatch
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
        if (!isUsernameValid) {
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
      <HeaderComponent
        logo={logo[0]}
        menuItems={menuItems}
        isAuthenticated={false}
        isAdmin={false}
        isMenuOpen={isMenuOpen}
        onMenuToggle={handleMenuToggle}
      />
      <div className="mainPageContainer">
        <div className="leftRegister">
          <form className="registerAulify">
            <ul>
              <li>
                <MySVG name="user" color="#005D97" nameClass="iconAulify" />
                <label className="labelAulify">Nombre</label>
                <input
                  className="inputAulify"
                  type="text"
                  placeholder="Nombre"
                />
              </li>
              <li>
                <MySVG name="user-plus" color="#005D97" nameClass="iconAulify" />
                <label className="labelAulify">Apellido</label>
                <input
                  className="inputAulify"
                  type="text"
                  onChange={handleUsernameChange}
                  placeholder="Nombre de usuario"
                />
              </li>
              <li>
                <MySVG name="envelope" color="#005D97" nameClass="iconAulify" />
                <label className="labelAulify">Correo electrónico</label>
                <input
                  className="inputAulify"
                  type="text"
                  placeholder="Correo electrónico"
                />
              </li>
              <li>
                <MySVG name="lock" color="#005D97" nameClass="iconAulify" />
                <label className="labelAulify">Contraseña</label>
                <input
                  className="inputAulify"
                  type="password"
                  onChange={handlePasswordChange}
                  placeholder="Contraseña"
                />
              </li>
              <li>
                <MySVG name="user-lock" color="#005D97" nameClass="iconAulify" />
                <label className="labelAulify">Confirmar contraseña</label>
                <input
                  className="inputAulify"
                  type="password"
                  onChange={handleConfirmedPasswordChange}
                  placeholder="Confirmar contraseña"
                />
              </li>
              <li>
                <MySVG name="graduation-cap" color="#005D97" nameClass="iconAulify" />
                <label className="labelAulify">Grado académico</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected value="0">Elige tu grado académico</option>
                  {GRADO_ACADEMICO.map((grado, id) => {
                    return <option key={id} value={grado.id}>{grado.nombre}</option>
                  })}
                </select>
              </li>
              <li>
                <MySVG name="calendar" color="#005D97" nameClass="iconAulify" />
                <label className="labelAulify">Edad</label>
                <input
                  type="number"
                  className="inputAulify"
                  placeholder="Edad"
                  min={0}
                  max={100}
                />
              </li>
              <li>
                <MySVG name="location-dot" color="#005D97" nameClass="iconAulify" />
                <label className="labelAulify">Estado de la república</label>
                <select className="form-select" aria-label="Selecciona tu estado">
                  <option selected value="0">Selecciona tu estado</option>
                  {ESTADOS_DE_MEXICO.map((estado, id) => {
                    return <option key={id} value={estado.id}>{estado.nombre}</option>
                  })}
                </select>
              </li>
              <div className="buttonContainer">
                <div className="crearCuenta" onClick={handleRegisterSubmit}>
                  <MySVG name="plus" color="white" nameClass="iconAulify" />
                  Registrarme
                </div>
              </div>
            </ul>
          </form>

        </div>
        <div className="rightRegister">
        </div>
      </div>
    </div>
  );
};
