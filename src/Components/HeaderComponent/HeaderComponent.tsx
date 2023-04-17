import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderC.css";
import { LINKS, LogoConstant, HeaderConstant } from "../../constants";

interface MenuItem {
  id: string;
  label: string;
  path: string;
}

interface HeaderProps {
  logo: LogoConstant;
  menuItems: HeaderConstant[];
  isAuthenticated: boolean;
  isAdmin: boolean;
  onMenuToggle: () => void;
  idUser?: number;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  menuItems,
  logo,
  isAuthenticated,
  isAdmin,
}) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let filteredMenuItems: MenuItem[] = [];

  if (isAuthenticated) {
    filteredMenuItems = isAdmin
      ? [
          //{ label: 'Logout', path: LINKS.LOGOUT.path },
          {
            label: "Dashboard",
            id: LINKS.DASHBOARD.id,
            path: LINKS.DASHBOARD.path,
          },
        ] // .concat(menuItems)
      : menuItems;
  } else {
    filteredMenuItems = [
      { label: "Inicio", id: LINKS.HOME.id, path: LINKS.HOME.path },
      { label: "Acerca de", id: LINKS.ABOUT.id, path: LINKS.ABOUT.path },
      { label: "Iniciar sesión", id: LINKS.LOGIN.id, path: LINKS.LOGIN.path },
    ];
  }

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate(LINKS.HOME.path);
  };
  return (
    <>
      <header className="HeaderAulify">
        <div className="headerLogo">
          <img
            src={logo.path}
            alt="Aulify Logo"
            onClick={() => navigate(LINKS.HOME.path)}
          />
        </div>
        <div
          className={`headerMenu ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          &#9776;
        </div>
      </header>
      {isMenuOpen && (
        <div className="MenuDesplegable">
          <ul className={`listaMenu ${isMenuOpen ? "active" : ""}`}>
            {filteredMenuItems.map((item, index) => (
              <li className="listLi" id={item.id} key={index}>
                <a id={item.id} onClick={() => navigate(item.path)}>
                  {item.label}
                </a>
              </li>
            ))}
            {isAuthenticated && (
              <>
                <li className="listLi" id="profile">
                  <a
                    onClick={() => {
                      navigate(
                        LINKS.PROFILE.path +
                          "/" +
                          localStorage.getItem("idUser")
                      );
                    }}
                  >
                    Perfil
                  </a>{" "}
                </li>
                <li className="listLi" id="play">
                  <a onClick={() => navigate(LINKS.PLAY.path)}>Jugar</a>
                </li>
                <li className="listLi" id="logoutButton">
                  <a onClick={handleLogout}>Cerrar sesión</a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
