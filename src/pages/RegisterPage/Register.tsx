import React, { useState } from "react";
import "./Register.css";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import {
  HEADER_ITEMS,
  HeaderConstant,
  LOGO_CONSTANTS,
  LogoConstant,
  GRADO_ACADEMICO,
  ESTADOS_DE_MEXICO,
  BACKGROUND_CONSTANTS,
} from "../../constants";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants";
import MySVG from "src/Components/SVGProp/SVGProp";
import nina from "src/resources/images/backgrounds/nina.png";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { RGBImg } from "src/Components/RGBImgProp/RGBImg";

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
  const [nameRegister, setNameRegister] = useState("");
  const [lastNameRegister, setLastNameRegister] = useState("");
  const [getGradoAcademico, setGradoAcademico] = useState("");
  const [getEstado, setEstado] = useState("");
  const [getEdad, setEdad] = useState("");
  const [getMail, setMail] = useState("");
  const [getIsAdmin, setIsAdmin] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameRegister(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRegister(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameRegister(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameRegister(event.target.value);
  };

  const handleGradoAcademicoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGradoAcademico(event.target.value);
  };

  const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEstado(event.target.value);
  };

  const handleEdadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEdad(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
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

  const validateEmail = async (email: string) => {
    let answer = false;
    await fetch(`${url}/user/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Email does not exist") {
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
      //"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
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
      if (isUsernameValid && isPasswordValid && passwordsMatch) {
        //use fetch to register user
        await fetch(`${url}/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usernameRegister,
            password: passwordRegister,
            name: nameRegister,
            lastName: lastNameRegister,
            academicGrade: getGradoAcademico,
            state: getEstado,
            birthDate: getEdad,
            email: getMail,
            isAdmin: 0,
            isVerified: 0,
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
        onMenuToggle={handleMenuToggle}
      />
      <BackgroundProp backgroundName="white-background" />
      <div className="mainPageContainer">
        <div className="leftRegister">
          <form className="registerAulify">
            <div className="topRegister">
              <ul>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="user-tag"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">Nombre de usuario</label>
                    </div>
                    <div className="inputContainer">
                      <input
                        className="inputAulify"
                        type="text"
                        onChange={handleUsernameChange}
                        placeholder="Nombre de usuario"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="user"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">Nombre</label>
                    </div>
                    <div className="inputContainer">
                      <input
                        className="inputAulify"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleNameChange}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="user-plus"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">Apellidos</label>
                    </div>
                    <div className="inputContainer">
                      <input
                        className="inputAulify"
                        type="text"
                        placeholder="Apellidos"
                        onChange={handleLastNameChange}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="envelope"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">Correo electrónico</label>
                    </div>
                    <div className="inputContainer">
                      <input
                        className="inputAulify"
                        type="text"
                        placeholder="Correo electrónico"
                        onChange={handleEmailChange}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="lock"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">Contraseña</label>
                    </div>
                    <div className="inputContainer">
                      <input
                        className="inputAulify"
                        type="password"
                        onChange={handlePasswordChange}
                        placeholder="Contraseña"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="user-lock"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">
                        Confirmar contraseña
                      </label>
                    </div>
                    <div className="inputContainer">
                      <input
                        className="inputAulify"
                        type="password"
                        onChange={handleConfirmedPasswordChange}
                        placeholder="Confirmar contraseña"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="graduation-cap"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">Grado académico</label>
                    </div>
                    <div className="inputContainer">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue="No seleccionado"
                        onChange={handleGradoAcademicoChange}
                      >
                        <option value="0">Elige tu grado académico</option>
                        {GRADO_ACADEMICO.map((grado, id) => {
                          return (
                            <option key={id} value={grado.nombre}>
                              {grado.nombre}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="calendar"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">Edad</label>
                    </div>
                    <div className="inputContainer">
                      <input
                        type="date"
                        className="inputAulify"
                        placeholder="Edad"
                        onChange={handleEdadChange}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="FormAulifyContainer">
                    <div className="iconContainer">
                      <MySVG
                        name="location-dot"
                        color="#005D97"
                        nameClass="iconAulify"
                      />
                    </div>
                    <div className="LabelContainer">
                      <label className="labelAulify">
                        Estado de la república
                      </label>
                    </div>
                    <div className="inputContainer">
                      <select
                        className="form-select"
                        aria-label="Selecciona tu estado"
                        defaultValue="No seleccionado"
                        onChange={handleEstadoChange}
                      >
                        <option value="0">Selecciona tu estado</option>
                        {ESTADOS_DE_MEXICO.map((estado, id) => {
                          return (
                            <option key={id} value={estado.nombre}>
                              {estado.nombre}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bottomRegister">
              <div className="buttonContainer">
                <div className="crearCuenta" onClick={handleRegisterSubmit}>
                  <div className="registerIcon">
                    <MySVG name="plus" color="white" nameClass="iconAulify" />
                  </div>
                  <div className="registerText">
                    <p>Crear cuenta</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="rightRegister">
          <RGBImg img={nina} alt="nina" id="nina" />
        </div>
      </div>
    </div>
  );
};
