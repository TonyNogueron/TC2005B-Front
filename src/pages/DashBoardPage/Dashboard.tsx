import React, { useState, useEffect } from "react";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import {
    HEADER_ITEMS,
    HeaderConstant,
    LOGO_CONSTANTS,
    LogoConstant,
  } from "../../constants";

import DashboardContainer from "src/Components/DashboardContainer/DashboardContainer";

export default function Dashboard() {
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
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
            isAdmin={true}
            isMenuOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
        />
        <DashboardContainer />
        </div>
    );
}