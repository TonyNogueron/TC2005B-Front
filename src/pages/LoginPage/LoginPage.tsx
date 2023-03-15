import React,{useState} from "react";
import "./LoginPage.css";
import { LINKS } from "../../constants";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant } from '../../constants';
import { LOGO_CONSTANTS, LogoConstant } from '../../constants';
import {PAGE_TITLE} from '../../constants';
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
const Swal = require('sweetalert2')

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

    const handleUsernameLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameLogin(event.target.value);
    };

    const handlePasswordLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordLogin(event.target.value);
    };

    const url = process.env.REACT_APP_API_URL;

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (usernameLogin === "" || passwordLogin === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all the fields!",
            });
        } else {
            fetch(url + "user/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Username" : usernameLogin,
                    "psswd" : passwordLogin
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "success") {
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("username", data.username);
                        localStorage.setItem("id", data.id);
                    }
                })
                .then(() => {
                    if (localStorage.getItem("token") !== null) {
                        Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "You have successfully logged in!",
                        });
                        navigate(LINKS.PROFILE.path);
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return(
         
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
                <form className="LoginForm" onSubmit={handleLogin}>
                    <ul>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </li>
                    </ul>
                    <button type="submit" className="button">Login</button>
                </form>
                <div className="LoginRegister">
                    <p>Don't have an account?</p>
                    <a onClick={() => navigate(LINKS.REGISTER.path)}>Register</a>
                </div>
            </div>

        </div>
    );
};