import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderC.css";
import { LINKS,LogoConstant,HeaderConstant } from '../../constants';

interface MenuItem {
    label: string;
    path: string;
  }
  
  interface HeaderProps {
    logo: LogoConstant;
    menuItems: HeaderConstant[];
    isMenuOpen: boolean;
    isAuthenticated: boolean;
    isAdmin: boolean;
    onMenuToggle: () => void;
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
          <header className="HeaderAulify">
            <div className="headerLogo">
              <img
                src={logo.path}
                alt="Aulify Logo"
                onClick={() => navigate(LINKS.HOME.path)}
              />
            </div>
            <div className="headerMenu" onClick={handleMenuToggle}>
              &#9776;
            </div>
          </header>
          {isMenuOpen && (
            <div className="MenuDesplegable">
              <ul className="listaMenu">
                {filteredMenuItems.map((item, index) => (
                  <li className="listLi" key={index}>
                    <a href={item.path}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      );
    };
    
export default HeaderComponent;      