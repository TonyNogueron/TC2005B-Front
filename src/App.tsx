import React from 'react';

import Header from './Components/HeaderProp/Header';

const menuItems = ["Home", "About", "Contact"];

function App() {
  return (
    <div>
      <Header title="My App" logo="logo.png" menuItems={menuItems} />
    </div>
  );
}

export default App;
