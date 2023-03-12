import React from "react";
import "./LBContainer.css";
import Elo from "../EloProp/Elo";
import Stats from "../StatsProp/Stats";
import { RANKS, Rank, GameStats, GAME_STATS } from "src/gameConstants";

export default function LeaderboardContainer() {
    return(
        <div className="leaderboard-container">
            <div className="leaderboard-top">
                <div className="leaderboard-top-left">
                    <h1>Leaderboard</h1>
                </div>
                <div className="leaderboard-top-right">
                    <div className="elo-logo">

                    </div>
                    <div className="elo-name">
                        <h2>k dice tony k aki pone y k se lo avienta (marzzzo 11 2023 18:29pm)</h2>
                    </div>
                </div>
            </div>
            <div className="leaderboard-bottom">
                <Stats name="Wins" value={0}/>
            </div>
        </div>
    );
}
