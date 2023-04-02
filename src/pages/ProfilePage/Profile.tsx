import React, { useState, useEffect } from "react";
import "./Profile.css";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import {
  HEADER_ITEMS,
  HeaderConstant,
  LOGO_CONSTANTS,
  LogoConstant,
} from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import ProfileContainer from "src/Components/ProfileContainer/ProfileContainer";

export const Profile = () => {
  const logo: LogoConstant[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  const navigate = useNavigate();

  const [getUsername, setUsername] = useState("");
  const [getImg, setImg] = useState("boy-engineer");
  // Profile points getter and setter
  const [getPoints, setPoints] = useState(0);
  const [getMatch, setMatch] = useState(0);
  const [getHighestRound, setHighestRound] = useState(0);
  const [getEnemiesDefeated, setEnemiesDefeated] = useState(0);
  const [getTimePlayed, setTimePlayed] = useState(" ");
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const url = "http://localhost:3001";
  useEffect(() => {
    fetch(
      `${url}/statistic/user/?idUser=${localStorage.getItem("idUser") || 0}`,
      {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token") || "",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMatch(data.length > 0 ? data[0].matchesPlayed : 0);
        setHighestRound(data.length > 0 ? data[0].highestRound : 0);
        setEnemiesDefeated(data.length > 0 ? data[0].enemiesDefeated : 0);
        setTimePlayed(data.length > 0 ? data[0].totalTimePlayed : "NO TIME");
        setPoints(data.length > 0 ? data[0].score : 0);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(`${url}/getUser/?idUser=${localStorage.getItem("idUser") || 0}`, {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token") || "",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.length > 0 ? data[0].username : "");
        localStorage.setItem(
          "username",
          data.length > 0 ? data[0].username : ""
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <HeaderComponent
        logo={logo[0]}
        menuItems={menuItems}
        isAuthenticated={true}
        isAdmin={false}
        onMenuToggle={handleMenuToggle}
      />
      <BackgroundProp backgroundName="white-background" />

      <ProfileContainer
        username={getUsername}
        profileImg={getImg}
        points={getPoints}
        matches={getMatch}
        highestRound={getHighestRound}
        enemiesDefeated={getEnemiesDefeated}
        timePlayed={getTimePlayed}
      />
    </div>
  );
};
