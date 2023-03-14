import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import { BirthPage } from './pages/BirthPage/BirthPage';
import { Register } from './pages/RegisterPage/Register';
import { Profile } from './pages/ProfilePage/Profile';
import {LoginPage} from './pages/LoginPage/LoginPage';
import Leaderboard from './pages/LeaderboardPage/Leaderboard';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {

  return (
    <div>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/birth" element={<BirthPage />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute redirectTo="/">
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
