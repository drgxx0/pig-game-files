import React, { useState } from "react";

import Player from "./player/player";
import Dice from "Components/dice/dice";

import "./players.css";

const Players = ({
  num,
  getRandomNumber,
  players,
  active,
  unactive,
  setScore,
  winner,
  endGame,
  setNewGame,
  setLimit
}) => {

    
  const map = Object.keys(players).map(item => {
    return (
      <Player
        player={item}
        key={item}
        current={players[item].current}
        score={players[item].score}
        winner={winner}
      />
    );
  });

  const [errorLimit, setErrorLimit] = useState(false);
  const [inputStatus, setInputStatus] = useState(false);

  const minLimit = e => {
    console.log(e.target.value);
    const value = e.target.value;
    if (value && value >= 10) {
      setErrorLimit(false);
      setLimit(value);
    } else {
      setErrorLimit(true);
    }
  };

  const startGame = () => {
    getRandomNumber(active, unactive);
    setInputStatus(true);
  };

  return (
    <div className="players">
      <div
        className={`player1 ${
          winner === "player1"
            ? "winner"
            : players["player1"].active
            ? "active"
            : ""
        }`}
      >
        {map[0]}
      </div>
      <div className="menu">
        <button className="btn new" onClick={() => setNewGame()}>
          new game
        </button>
        {errorLimit ? (
          <p style={{ color: "red" }}>You have to put equal or more than 10</p>
        ) : null}
        <div className="default">
          <input
            disabled={inputStatus}
            type="text"
            placeholder="Default 100pts"
            onChange={e => minLimit(e)}
          />
        </div>
        <Dice num={num} />
        <button
          className="btn roll"
          disabled={endGame}
          onClick={() => startGame()}
        >
          roll dice
        </button>
        <button
          className="btn hold"
          disabled={endGame}
          onClick={() =>
            setScore(
              active,
              unactive,
              players[active].current,
              players[active].score
            )
          }
        >
          hold
        </button>
      </div>
      <div
        className={`player2 ${
          winner === "player2"
            ? "winner"
            : players["player2"].active
            ? "active"
            : ""
        }`}
      >
        {map[1]}
      </div>
    </div>
  );
};

export default Players;
