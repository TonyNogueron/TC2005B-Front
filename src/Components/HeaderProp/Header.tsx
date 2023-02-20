import { HeaderConstant } from '../../constants';
import { LogoConstant } from '../../constants';
import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  logo: LogoConstant[];
  menuItems: HeaderConstant[];
  logoIndex: number;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={props.logo[props.logoIndex].path} alt={props.logo[props.logoIndex].alt} />
        </div>
        <div className="header-title">
          <h1>{props.title}</h1>
        </div>
        <div className="header-menu">
          <ul>
            {props.menuItems.map((item, index) => (
              <li key={index}>
                <a id={item.id}href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hamburger-menu" onClick={props.onMenuToggle}>
          <div className="menu-icon"></div>
        </div>
      </header>
      {props.isMenuOpen && (
        <div className="menu-mobile">
          <ul>
            {props.menuItems.map((item, index) => (
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
