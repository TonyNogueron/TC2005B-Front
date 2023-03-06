import React from "react";
import "./Leaderboard.css";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant,LINKS,LOGO_CONSTANTS,LogoConstant,PAGE_TITLE } from "../../constants";
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
    return(
        <div className="leaderboard">
            <BackgroundProp backgroundName="blue-background" />
            <Header
                title={PAGE_TITLE}
                logo={LOGO_CONSTANTS[0]}
                menuItems={HEADER_ITEMS}
                isMenuOpen={true}
                onMenuToggle={()=>{}}
            />
            <Footer title={PAGE_TITLE} logo={LOGO_CONSTANTS[0]} menuItems={HEADER_ITEMS} />
            
        </div>
    );
}   

