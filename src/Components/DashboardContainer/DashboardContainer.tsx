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

export default function DashboardContainer() {
  const [search, setSearch] = useState("");
  const [responseData, setResponseData] = useState<IResponseData[]>([]);

  const handleSearch = useCallback((query: string) => {
    setSearch(query);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/statistic/dashboard")
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="dashboardContainer">
      <div className="dashboardTop">
        <div className="searcBarContainer">
          <SearchComponent
            search={search}
            setSearch={setSearch}
            onSearch={handleSearch}
          />
        </div>
      </div>
      <div className="dashboardBottom">
        <table>
          <caption>Lista de jugadores:</caption>
          <thead>
            <tr>
              <th>Correo</th>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Puntaje total</th>
              <th>Tiempo total jugado</th>
              <th>Niveles completados</th>
              <th>Num. de errores</th>
              <th>Num. total de intentos</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((data) => (
              <tr key={data.email}>
                <td id="email">{data.email}</td>
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
