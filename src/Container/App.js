import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions/actions";

import Players from "Components/players/players";

import "./App.css";

const App = ({
  num,
  players,
  getRandomNumber,
  setScore,
  setEndGame,
  endGame,
  setNewGame,
  winner
}) => {
  const [active, setActive] = useState("player1");
  const [unactive, setUnactive] = useState("player2");
  const [limit, setLimit] = useState(100);

  const handleEndGame = item => {
    if (endGame) {
      return null;
    } else {
      setEndGame(item);
    }
  };

  useEffect(
    () => {
      Object.keys(players).map(item => {
        if (players[item].score >= limit) {
          return handleEndGame(item);
        }
        if (players[item].active) {
          setActive(item);
        }
        if (!players[item].active) {
          setUnactive(item);
        }
        return null;
      });
    },
    [players]
  );

  return (
    <div className="App">
      <div className="containerBox">
        <Players
          num={num}
          getRandomNumber={getRandomNumber}
          active={active}
          unactive={unactive}
          players={players}
          setScore={setScore}
          winner={winner}
          endGame={endGame}
          setNewGame={setNewGame}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    players: state.players,
    num: state.num,
    endGame: state.endGame,
    winner: state.winner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRandomNumber: (active, unactive) =>
      dispatch(actions.getRandomNumber(active, unactive)),
    setScore: (active, unactive, score) =>
      dispatch(actions.setScore(active, unactive, score)),
    setEndGame: item => dispatch(actions.endGame(item)),
    setNewGame: () => dispatch(actions.newGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
