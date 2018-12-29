import React from "react";

import "./player.css";

const Player = ({ player, current, score }) => {
  return (
    <React.Fragment>
      <p className="player-name">{player}</p>
      <div className="player-score">{score}</div>
      <div className="player-current-box">
        <p className="player-current-label">current</p>
        <div className="player-current-score">{current}</div>
      </div>
    </React.Fragment>
  );
};

export default Player;
