import {HeaderConstant } from '../../constants';
import { LogoConstant } from '../../constants';
import React from 'react';
import './Header.css';
import logoImg from '../../resources/images/aulifyBlue.png';

interface HeaderProps {
  title: string;
  logo: LogoConstant;
  menuItems: HeaderConstant[];
}


const Header: React.FC<HeaderProps> = ({title, logo, menuItems}) => {
  return (
    <>
      <header>
        <div className="header-logo">
        <img src={logoImg} alt={logo.alt} />
        </div>
        <div className="header-title">
          <h1>{title}</h1>
        </div>
        <div className="header-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
