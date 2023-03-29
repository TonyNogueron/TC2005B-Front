import React, { useState, useMemo, useCallback } from "react";
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
      "username": "Tony",
      "name": "Antonio Noguerón",
      "score": 800,
      "totalTimePlayed": "00:00:00",
      "completedLevels": 1,
      "totalMistakes": "12",
      "totalAttempts": "1"
  },
  {
      "username": "Tony2",
      "name": "Antonio Noguerón",
      "score": 673,
      "totalTimePlayed": "00:10:21",
      "completedLevels": 1,
      "totalMistakes": "10",
      "totalAttempts": "2"
  }
]
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

  const debouncedSearch = useMemo(() => {
    return debounce((search: string) => {
      fetch(`http://localhost:3001/statistic/dashboard`, {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token") || "",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setSearch(data.name);
          console.log(data);
        });
    }, 500);
  }, []);

  const handleSearch = useCallback(
    (search: string) => {
      debouncedSearch(search);
    },
    [debouncedSearch]
  );

  const filteredStats = useMemo(
    () => filterStats(search),
    [filterStats, search]
  );

  return (
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
            {Object.keys(KID_STATISTICS)
              .slice(0, Object.keys(KID_STATISTICS).length / 2)
              .map((key) => (
                <Stats
                  key={key}
                  name={
                    KID_STATISTICS[key as keyof typeof KID_STATISTICS].nombre
                  }
                  value={
                    KID_STATISTICS[key as keyof typeof KID_STATISTICS].value
                  }
                />
              ))}
          </div>
          <div className="dashboardBottomRight">
            {Object.keys(KID_STATISTICS)
              .slice(Object.keys(KID_STATISTICS).length / 2)
              .map((key) => (
                <Stats
                  key={key}
                  name={
                    KID_STATISTICS[key as keyof typeof KID_STATISTICS].nombre
                  }
                  value={
                    KID_STATISTICS[key as keyof typeof KID_STATISTICS].value
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
