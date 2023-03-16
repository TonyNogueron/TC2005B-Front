import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { LINKS,LogoConstant,HeaderConstant } from '../../constants';

interface MenuItem {
  label: string;
  path: string;
}

interface HeaderProps {
  title: string;
  logo: LogoConstant;
  menuItems: HeaderConstant[];
  isMenuOpen: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
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
      { label: 'Dashboard', path: LINKS.DASHBOARD.path },
    ] // .concat(menuItems)
    : menuItems;

  } else {
    filteredMenuItems = [
      //{ label: 'Dashboard', path: LINKS.DASHBOARD.path },
      { label: 'Home', path: LINKS.HOME.path },
      { label: 'About', path: LINKS.ABOUT.path },
      { label: 'Login', path: LINKS.LOGIN.path },
    ];
  }

  return (
    <>
      <header>
        <div className="header-logo">
          <img
            src={logo.path}
            alt="Aulify Logo"
            onClick={() => navigate(LINKS.HOME.path)}
          />
        </div>
        <div className="header-title">
          <h1>{title}</h1>
        </div>
        <div className="header-menu">
          <ul>
            {filteredMenuItems.map((item, index) => (
              <li key={index}>
                <a id={item.label} onClick={() => navigate(item.path)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hamburger-menu" onClick={handleMenuToggle}>
          <div className="menu-icon"> &#9776;</div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="menu-mobile">
          <ul>
            {filteredMenuItems.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;