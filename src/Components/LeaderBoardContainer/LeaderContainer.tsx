import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./LeaderContainer.css";

const testResponse = [
  {
    idUser: 2,
    username: "Tony",
    score: 2331,
  },
  {
    idUser: 4,
    username: "Pato",
    score: 1851,
  },
  {
    idUser: 3,
    username: "AldoBat10",
    score: 599,
  },
  {
    idUser: 5,
    username: "Arturo",
    score: 443,
  },
  {
    idUser: 6,
    username: "MarioS",
    score: 0,
  },
  {
    idUser: 7,
    username: "SrPared",
    score: 0,
  },
  {
    idUser: 8,
    username: "TonyCorreo",
    score: 0,
  },
  {
    idUser: 8,
    username: "TonyCorreo3",
    score: 0,
  },
  {
    idUser: 8,
    username: "TonyCorreo2",
    score: 20,
  },
  {
    idUser: 8,
    username: "TonyCorreo4",
    score: 0,
  },
  {
    idUser: 8,
    username: "TonyCorreo5",
    score: 0,
  },
  {
    idUser: 8,
    username: "TonyCorreo6",
    score: 0,
  },
  {
    idUser: 8,
    username: "TonyCorreo7",
    score: 0,
  },
  {
    idUser: 8,
    username: "TonyCorreo8",
    score: 0,
  },
  
];

export default function LeaderContainer() {
  const [leaderboardData, setLeaderboardData] = useState(testResponse);

  leaderboardData.sort((a, b) => b.score - a.score); // Sort the data by score in descending order

  return (
    <div className="leaderContainer">
      <div className="leaderTop">
        <div className="LeaderTopTitle">
          <div className="LeaderTopTitleText">
            <h1>Leaderboard</h1>
          </div>
        </div>
      </div>
      <div className="leaderBottom">
        <table className="leaderTable">
          <thead>
            <tr>
              <th>Rango</th>
              <th>Usuario</th>
              <th>Puntaje global</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user, index) => (
              <tr key={user.idUser}>
                <td>{index + 1}</td> {/* Display the rank */}
                <td>{user.username}</td> {/* Display the username */}
                <td>{user.score}</td> {/* Display the score */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
