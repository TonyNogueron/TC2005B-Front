import React,{useState} from "react";
import './MainPage.css'
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant } from '../../constants';
import { LOGO_CONSTANTS, LogoConstant } from '../../constants';
import {PAGE_TITLE} from '../../constants';
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";


export default function MainPage() {
    const title = PAGE_TITLE;
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
    const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    }; 
  return <div className="mainPage">
    <BackgroundProp backgroundName="red-background" />
    <div className="main-page">
    <Header
        title={title}
        logo={logo[0]}
        menuItems={menuItems}
        isMenuOpen={isMenuOpen} // pass isMenuOpen as a prop
        onMenuToggle={handleMenuToggle} // pass onMenuToggle as a prop
      />
      <Footer title={title} logo={logo} logoIndex={0} menuItems={menuItems} />
    </div>
  </div>;
}

