import React,{useState} from "react";
import Header from '../HeaderProp/Header';
import Footer from '../FooterProp/Footer';
import { HEADER_ITEMS, HeaderConstant } from '../../constants';
import { LOGO_CONSTANTS, LogoConstant } from '../../constants';
import {PAGE_TITLE} from '../../constants';

export default function FooterHeader(){
    const title = PAGE_TITLE;
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
    const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    }; // function for handling menu toggle
    return(
        <div>
                  <Header
        title={title}
        logo={logo[0]}
        menuItems={menuItems}
        isMenuOpen={isMenuOpen} // pass isMenuOpen as a prop
        onMenuToggle={handleMenuToggle} // pass onMenuToggle as a prop
      />
      <Footer title={title} logo={logo} logoIndex={0} menuItems={menuItems} />
        </div>
    )
}
