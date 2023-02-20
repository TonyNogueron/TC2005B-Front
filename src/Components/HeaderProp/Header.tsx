import {HeaderConstant } from '../../constants';
import { LogoConstant } from '../../constants';
import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  logo: LogoConstant[];
  menuItems: HeaderConstant[];
  logoIndex: number;
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
