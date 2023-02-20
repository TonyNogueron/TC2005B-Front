import React, { useState } from 'react';
import FooterHeader from './Components/FooterHeader/FooterHeader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderConstant } from './constants';
//Pages
import MainPage from './pages/MainPage/MainPage';

function App() {

  return (
    <div>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>

      </>
    </div>
  );
}

export default App;
