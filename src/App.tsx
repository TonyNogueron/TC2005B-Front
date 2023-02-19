import React from 'react';
import Header from './Components/HeaderProp/Header';
import { HEADER_ITEMS, HeaderConstants } from './constants';
import { LOGO_CONSTANTS, LogoConstants } from './constants';


function App() {
  const title = 'Aulify';
  const logo : LogoConstants[] = LOGO_CONSTANTS;
  const menuItems: HeaderConstants[] = HEADER_ITEMS;
  return (
    <div>
      <Header title={title} logo={logo} logoIndex={0} menuItems={menuItems} />
    </div>
  );
}

export default App;
