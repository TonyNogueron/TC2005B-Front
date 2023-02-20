import React from 'react';
import Header from './Components/HeaderProp/Header';
import { HEADER_ITEMS, HeaderConstant } from './constants';
import { LOGO_CONSTANTS, LogoConstant } from './constants';


function App() {
  const title = 'Aulify';
  const logo : LogoConstant = LOGO_CONSTANTS[0];
  const menuItems: HeaderConstant[] = HEADER_ITEMS;
  return (
    <div>
      <Header title={title} logo={logo}  menuItems={menuItems} />
    </div>
  );
}

export default App;
