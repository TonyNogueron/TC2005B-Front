import { HEADER_ITEMS, HeaderConstants } from '../../constants';
import React from 'react';
import './Header.css';
interface HeaderProps {
  title: string;
  logo: string;
  menuItems: HeaderConstants[];
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={props.logo} alt="logo" />
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
