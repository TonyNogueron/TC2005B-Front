import React, { useState } from "react";
import './MainPage.css'
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { LOGO_CONSTANTS, LogoConstant, PAGE_TITLE, HEADER_ITEMS, HeaderConstant, LINKS } from '../../constants';
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import nina from "src/resources/images/backgrounds/kid.png";


export default function MainPage() {
  const title = PAGE_TITLE;
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const navigate = useNavigate();


  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return <div className="mainPage">
    <HeaderComponent
      logo={logo[0]}
      menuItems={menuItems}
      isAuthenticated={false}
      isAdmin={false}
      isMenuOpen={isMenuOpen}
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
            <p>En Aulify buscamos constantemente la innovación, y así poder brindar educación a los jóvenes mexicanos mediante videos y el juego.</p>
          </div>
          <div className="bottomButton">
            <button onClick={() => navigate('/register')}>¡ÚNETE A NOSOTROS!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}
