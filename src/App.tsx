import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { Register } from "./pages/RegisterPage/Register";
import { Profile } from "./pages/ProfilePage/Profile";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import Leaderboard from "./pages/LeaderboardPage/Leaderboard";
import Dashboard from "./pages/DashBoardPage/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// Pages

function App() {
  return (
    <div>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
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
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
