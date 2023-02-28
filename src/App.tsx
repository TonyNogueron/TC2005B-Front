import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import { BirthPage } from './pages/BirthPage/BirthPage';
import { Register } from './pages/RegisterPage/Register';
import { Profile } from './pages/ProfilePage/Profile';
import {LoginPage} from './pages/LoginPage/LoginPage';
// Pages

function App() {
  

  return (
    <div>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/birth" element={<BirthPage />} />
            <Route path="/register" element={<Register />} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
