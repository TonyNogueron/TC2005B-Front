import React from 'react';
import Header from './Components/HeaderProp/Header';
import { HEADER_ITEMS, HeaderConstants } from './constants';


function App() {
  const title = 'Aulify';
  const logo = 'https://aulify.com/wp-content/uploads/2020/05/aulify-logo.png';
  const menuItems: HeaderConstants[] = HEADER_ITEMS;
  return (
    <div>
      <Header title={title} logo={logo} menuItems={menuItems} />
    </div>
  );
}

export default App;
