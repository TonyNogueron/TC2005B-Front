import React, { useState, useCallback, useEffect } from "react";
import "./DashboardContainer.css";
import SearchComponent from "../SearchComponent/SearchComponent";

interface IStatsProps {
  name: string;
  value: number;
}

interface IResponseData {
  email: string;
  username: string;
  name: string;
  score: number;
  totalTimePlayed: string;
  completedLevels: number;
  totalMistakes: string;
  totalAttempts: string;
}

const apiTestResponse = [
  {
      "username": "Tony",
      "email": "lilyvalle06@gmail.com",
      "name": "Antonio Noguerón",
      "score": 800,
      "totalTimePlayed": "00:00:00",
      "completedLevels": 1,
      "totalMistakes": "12",
      "totalAttempts": "1"
  },
  {
      "username": "Tony2",
      "email": "antonio.nogueron@hotmail.com",
      "name": "Antonio Noguerón",
      "score": 673,
      "totalTimePlayed": "00:10:21",
      "completedLevels": 1,
      "totalMistakes": "10",
      "totalAttempts": "2"
  }
];

export default function DashboardContainer() {
  const [search, setSearch] = useState("");
  const [responseData, setResponseData] = useState<IResponseData[]>(apiTestResponse);

  const handleSearch = useCallback((query: string) => {
    setSearch(query);
  }, []);

  useEffect(() => {
    const filteredData = apiTestResponse.filter((data) =>
      data.email.toLowerCase().includes(search.toLowerCase())
    );
    setResponseData(filteredData);
  }, [search]);

  return (
    <div className="dashboardContainer">
      <div className="dashboardTop">
        <SearchComponent
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
        />
      </div>
      <div className="dashboardBottom">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Username</th>
              <th>Name</th>
              <th>Score</th>
              <th>Total Time Played</th>
              <th>Completed Levels</th>
              <th>Total Mistakes</th>
              <th>Total Attempts</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((data) => (
              <tr key={data.email}>
                <td>{data.email}</td>
                <td>{data.username}</td>
                <td>{data.name}</td>
                <td>{data.score}</td>
                <td>{data.totalTimePlayed}</td>
                <td>{data.completedLevels}</td>
                <td>{data.totalMistakes}</td>
                <td>{data.totalAttempts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
