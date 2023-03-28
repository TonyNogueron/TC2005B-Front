import React from "react";
import './DashboardContainer.css'
import { KID_STATISTICS } from "src/gameConstants";
import Stats from "../StatsProp/Stats";

export default function DashboardContainer() {
  return (
    <div >
        <div className="dashboardContainer">
            <div className="dashboardTop">
                top
            </div>
            <div className="dashboardBottom">
                <div className="dashboardBottomLeft">
                {
  Object.keys(KID_STATISTICS).slice(0, Object.keys(KID_STATISTICS).length / 2).map((key) => (
    <Stats
      key={key}
      name={KID_STATISTICS[key as keyof typeof KID_STATISTICS].nombre}
      value={KID_STATISTICS[key as keyof typeof KID_STATISTICS].value}
    />
  ))
}

                </div>
                <div className="dashboardBottomRight">
                {
  Object.keys(KID_STATISTICS).slice(Object.keys(KID_STATISTICS).length / 2).map((key) => (
    <Stats
      key={key}
      name={KID_STATISTICS[key as keyof typeof KID_STATISTICS].nombre}
      value={KID_STATISTICS[key as keyof typeof KID_STATISTICS].value}
    />
  ))
}

                </div>
            </div>
        </div>
    </div>
  );
}