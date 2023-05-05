import React, { useState, useEffect } from "react";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import {
  HEADER_ITEMS,
  HeaderConstant,
  LOGO_CONSTANTS,
  LogoConstant,
  apiURL,
} from "../../constants";
import { useParams } from "react-router-dom";
import DashboardContainer from "src/Components/DashboardContainer/DashboardContainer";

export default function Dashboard() {
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  const { idUser } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <HeaderComponent
        logo={logo[0]}
        menuItems={menuItems}
        isAuthenticated={true}
        isAdmin={localStorage.getItem("isAdmin") === "true"}
        onMenuToggle={handleMenuToggle}
      />
      <DashboardContainer />
    </div>
  );
}
