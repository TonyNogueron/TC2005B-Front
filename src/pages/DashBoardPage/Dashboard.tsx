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
  const [getIsAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetch(`${apiURL}/getUser?idUser=${idUser}`, {
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
    <div>
      <HeaderComponent
        logo={logo[0]}
        menuItems={menuItems}
        isAuthenticated={true}
        isAdmin={getIsAdmin}
        onMenuToggle={handleMenuToggle}
      />
      <DashboardContainer />
    </div>
  );
}
