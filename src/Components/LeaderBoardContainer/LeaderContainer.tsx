import React, { useState, useEffect } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./LeaderContainer.css";
import { useNavigate } from "react-router-dom";
import { apiURL } from "src/constants";

interface ILeaderboardData {
  idUser: number;
  username: string;
  score: number;
}

export default function LeaderContainer() {
  const [leaderboardData, setLeaderboardData] = useState<ILeaderboardData[]>(
    []
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${apiURL}/statistic/leaderboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLeaderboardData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortedLeaderboardData = Array.from(leaderboardData).sort(
    (a: ILeaderboardData, b: ILeaderboardData) => {
      return b.score - a.score;
    }
  );

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
            {leaderboardData.map((data, index) => (
              <tr key={data.idUser}>
                <td>{index + 1}</td> {/* Display the rank */}
                <td
                  onClick={() => navigate(`/profile/${data.idUser}`)}
                  style={{ cursor: "pointer" }}
                >
                  {data.username}
                </td>{" "}
                {/* Display the username */}
                <td>{data.score}</td> {/* Display the score */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
