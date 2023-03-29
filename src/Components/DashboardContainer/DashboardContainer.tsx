import React, { useState, useMemo, useCallback, useEffect } from "react";
import "./DashboardContainer.css";
import { KID_STATISTICS } from "src/gameConstants";
import Stats from "../StatsProp/Stats";
import SearchComponent from "../SearchComponent/SearchComponent";

interface IStatsProps {
  name: string;
  value: number;
}

const testResponse = [
  {
    username: "Tony",
    name: "Antonio Noguerón",
    score: 800,
    totalTimePlayed: "00:00:00",
    completedLevels: 1,
    totalMistakes: "12",
    totalAttempts: "1",
  },
  {
    username: "Tony2",
    name: "Antonio Noguerón",
    score: 673,
    totalTimePlayed: "00:10:21",
    completedLevels: 1,
    totalMistakes: "10",
    totalAttempts: "2",
  },
];
const MemoizedStats = React.memo(function StatsComponent({
  name,
  value,
}: IStatsProps) {
  return <Stats name={name} value={value} />;
});

const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<F>): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default function DashboardContainer() {
  const [search, setSearch] = useState<string>("");
  const [statistics, setStatistics] = useState(KID_STATISTICS);

  const filterStats = useCallback((search: string) => {
    return Object.keys(KID_STATISTICS)
      .filter((key) =>
        KID_STATISTICS[key].nombre.toLowerCase().includes(search.toLowerCase())
      )
      .reduce((obj, key) => {
        obj[key] = KID_STATISTICS[key];
        return obj;
      }, {} as typeof KID_STATISTICS);
  }, []);

  const fetchUserStats = useCallback(async (username: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/statistic/dashboard/${username}`,
        {
          method: "GET",
          headers: {
            "x-access-token": localStorage.getItem("token") || "",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching statistics for user ${username}:`, error);
      return null;
    }
  }, []);

  const debouncedSearch = useMemo(() => {
    return debounce(async (search: string) => {
      const userStats = await fetchUserStats(search);
      if (userStats) {
        const updatedStats = { ...KID_STATISTICS };
        Object.keys(userStats).forEach((key) => {
          updatedStats[key].value = userStats[key];
        });
        setStatistics(updatedStats);
      }
    }, 500);
  }, [fetchUserStats]);

  useEffect(() => {
    if (search.length > 0) {
      debouncedSearch(search);
    } else {
      setStatistics(KID_STATISTICS);
    }
  }, [search, debouncedSearch]);

  const filteredStats = useMemo(
    () => filterStats(search),
    [filterStats, search]
  );

  return (
    <>
      <div>
        <div className="dashboardContainer">
          <div className="dashboardTop">
            <div className="dashboardTopLeft">
              <SearchComponent
                search={search}
                setSearch={setSearch}
                onSearch={debouncedSearch}
              />
            </div>
            <div className="dashboardTopRight">
              <h1 className="kidName">{search}</h1>
            </div>
          </div>
          <div className="dashboardBottom">
            <div className="dashboardBottomLeft">
              {Object.keys(filteredStats)
                .slice(0, Object.keys(filteredStats).length / 2)
                .map((key) => (
                  <MemoizedStats
                    key={key}
                    name={filteredStats[key].nombre}
                    value={filteredStats[key].value}
                  />
                ))}
            </div>
            <div className="dashboardBottomRight">
              {Object.keys(filteredStats)
                .slice(Object.keys(filteredStats).length / 2)
                .map((key) => (
                  <MemoizedStats
                    key={key}
                    name={filteredStats[key].nombre}
                    value={filteredStats[key].value}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
