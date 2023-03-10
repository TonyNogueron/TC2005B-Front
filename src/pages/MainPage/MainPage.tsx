import React,{useState} from "react";
import './MainPage.css'
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant } from '../../constants';
import { LOGO_CONSTANTS, LogoConstant } from '../../constants';
import {PAGE_TITLE} from '../../constants';
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants";

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
    <BackgroundProp backgroundName="blue-background" />
    <Header
        title={title}
        logo={logo[0]}
        menuItems={menuItems}
        isMenuOpen={isMenuOpen} // pass isMenuOpen as a prop
        onMenuToggle={handleMenuToggle} // pass onMenuToggle as a prop
      />
    <div className="main-page">
        <div className="topContainer">
          <h1 className="mainMessage">AQUÍ COMIENZA TU HISTORIA</h1>
          <h2 className="subMessage">POR FAVOR INGRESA TU CORREO ELECTRÓNICO</h2>
        </div>
    </div>
    <div className="bottomContainer">
      <form className="form">
        <input className="input" type="text" placeholder="Correo electrónico" />
      </form>
      <button className="button" onClick={()=> navigate(LINKS.REGISTER.path)}>CONTINUAR</button>
    </div>
    <Footer title={title} logo={logo[0]} menuItems={menuItems} />

  </div>;
}

/*

  <BackgroundProp backgroundName="red-background" />
*/