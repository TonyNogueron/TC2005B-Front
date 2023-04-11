import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./LeaderContainer.css";
// a
export default function LeaderContainer() {
  return (
    <div className="leaderContainer">
      <div className="leaderTop">
        <div className="LeaderTopTitle">
          <div className="LeaderTopTitleText">
            <h1>Leaderboard</h1>
          </div>
        </div>
        <div className="leaderBottom">
          <div className="leaderBottomLeft"></div>
          <div className="leaderBottomRight">
            <div className="SearchComponent"></div>
          </div>
        </div>
      </div>
      <div className="leaderBottom"></div>
    </div>
  );
}
