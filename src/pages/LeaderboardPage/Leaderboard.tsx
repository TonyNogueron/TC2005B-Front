import React,{useState} from "react";
import "./Leaderboard.css";
import HeaderComponent from "src/Components/HeaderComponent/HeaderComponent";
import { HEADER_ITEMS, HeaderConstant,LINKS,LOGO_CONSTANTS,LogoConstant,PAGE_TITLE } from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
    const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return(
        
        <div className="leaderboard">
            <BackgroundProp backgroundName="white-background" />
            <HeaderComponent
            logo={logo[0]}
            menuItems={menuItems}
            isAuthenticated={true}
            isAdmin={true}
            onMenuToggle={handleMenuToggle}
        />

            
        </div>
    );
}   

