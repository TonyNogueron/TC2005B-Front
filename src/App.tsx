import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
