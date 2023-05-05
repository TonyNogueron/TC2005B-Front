import React, { useState } from "react";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import {
  HEADER_ITEMS,
  HeaderConstant,
  LINKS,
  LOGO_CONSTANTS,
  LogoConstant,
  PAGE_TITLE,
} from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import GamesContainer from "src/Components/GamesContainer/GamesContainer";

export default function PlayPage() {
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div>
        <BackgroundProp backgroundName="white-background" />
        <HeaderComponent
          logo={logo[0]}
          menuItems={menuItems}
          isAuthenticated={true}
          isAdmin={localStorage.getItem("isAdmin") === "true"}
          onMenuToggle={handleMenuToggle}
        />
      </div>
      <GamesContainer />
    </>
  );
}
