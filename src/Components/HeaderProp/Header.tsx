import { HeaderConstant } from '../../constants';
import { LogoConstant } from '../../constants';
import React from 'react';
import './Header.css';
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  logo: LogoConstant;
  menuItems: HeaderConstant[];
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({title, logo, menuItems, isMenuOpen, onMenuToggle}) => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={logo.path} alt={logo.alt} />
        </div>
        <div className="header-title">
          <h1>{title}</h1>
        </div>
        <div className="header-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a id={item.id} onClick={() => navigate(item.path)}>{item.label} </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hamburger-menu" onClick={onMenuToggle}>
          <div className="menu-icon"></div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="menu-mobile">
          <ul>
            {menuItems.map((item, index) => (
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
