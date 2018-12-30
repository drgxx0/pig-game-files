import * as actionTypes from "./actionTypes";

const setRandomNum = num => {
  return {
    type: actionTypes.GET_RANDOM_NUMBER,
    randNumber: num
  };
};

const setCurrent = (player, num) => {
  return {
    type: actionTypes.SET_CURRENT,
    player,
    num
  };
};

const handlePlayer = (active, unactive) => {
  return {
    type: actionTypes.CHANGE_PLAYER,
    active,
    unactive
  };
};

const resetCurrent = player => {
  return {
    type: actionTypes.RESET_CURRENT,
    player
  };
};

export const getRandomNumber = (active, unactive) => {
  const num = Math.floor(Math.random() * 6) + 1;
  if (num === 1) {
    return dispatch => {
      dispatch(setRandomNum(num));
      dispatch(resetCurrent(active));
      dispatch(handlePlayer(active, unactive));
    };
  }
  return dispatch => {
    dispatch(setRandomNum(num));
    dispatch(setCurrent(active, num));
  };
};

export const setScore = (player, unactive, score) => {
  if (score) {
    return dispatch => {
      dispatch({ type: actionTypes.SET_SCORE, player, score });
      dispatch(resetCurrent(player));
      dispatch(handlePlayer(player, unactive));
    };
  }
  return {
    type: actionTypes.ERROR
  };
};

export const endGame = item => {
  return {
    type: actionTypes.END_GAME,
    winner: item
  };
};

export const newGame = () => {
  return {
    type: actionTypes.NEW_GAME
  };
};
