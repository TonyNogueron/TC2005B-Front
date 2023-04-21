import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Footer from "src/Components/FooterProp/Footer";
import {
  LOGO_CONSTANTS,
  LogoConstant,
  PAGE_TITLE,
  HEADER_ITEMS,
  HeaderConstant,
  LINKS,
  apiURL,
} from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import nina from "src/resources/images/backgrounds/kid.png";
import { useParams } from "react-router-dom";

export default function MainPage() {
  const title = PAGE_TITLE;
  const { idUser } = useParams();
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const navigate = useNavigate();
  const [getIsAdmin, setIsAdmin] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetch(`${apiURL}/getUser/?idUser=${idUser}`, {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token") || "",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [idUser]);
  return (
    <div className="mainPage">
      <HeaderComponent
        logo={logo[0]}
        menuItems={menuItems}
        isAuthenticated={false}
        isAdmin={getIsAdmin}
        onMenuToggle={handleMenuToggle}
      />
      <BackgroundProp backgroundName="white-background" />

      <div className="mainPage-content">
        <div className="mainPage-content-left">
          <div className="LeftContentContainer">
            <div className="imageContainerNina">
              <img src={nina} alt="nina" />
            </div>
          </div>
        </div>
        <div className="mainPage-content-right">
          <div className="textContainer">
            <div className="topTitle">
              <h1>Construyendo el futuro de la educación</h1>
            </div>
            <div className="mediumDescription">
              <p>
                En Aulify buscamos constantemente la innovación, y así poder
                brindar educación a los jóvenes mexicanos mediante videos y el
                juego.
              </p>
            </div>
            <div className="bottomButton">
              <button onClick={() => navigate("/register")}>
                ¡ÚNETE A NOSOTROS!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
