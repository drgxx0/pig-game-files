import * as actionTypes from "store/actions/actionTypes";

const initialState = {
  players: {
    player1: {
      active: true,
      current: 0,
      score: 0,
      winnner: false
    },
    player2: {
      active: false,
      current: 0,
      score: 0,
      winner: false
    }
  },
  num: null,
  endGame: false,
  winner: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RANDOM_NUMBER:
      return {
        ...state,
        num: action.randNumber
      };
    case actionTypes.CHANGE_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.active]: {
            ...state.players[action.active],
            active: false
          },
          [action.unactive]: {
            ...state.players[action.unactive],
            active: true
          }
        }
      };
    case actionTypes.SET_CURRENT:
      return {
        ...state,
        players: {
          ...state.players,
          [action.player]: {
            ...state.players[action.player],
            current: state.players[action.player].current + action.num
          }
        }
      };
    case actionTypes.RESET_CURRENT:
      return {
        ...state,
        players: {
          ...state.players,
          [action.player]: {
            ...state.players[action.player],
            current: 0
          }
        }
      };
    case actionTypes.SET_SCORE:
      return {
        ...state,
        players: {
          ...state.players,
          [action.player]: {
            ...state.players[action.player],
            score: state.players[action.player].score + action.score
          }
        }
      };
    case actionTypes.END_GAME:
      return {
        ...state,
        players: {
          player1: {
            ...state.players.player1,
            active: false
          },
          player2: {
            ...state.players.player2,
            active: false
          }
        },
        endGame: true,
        winner: action.winner
      };
    case actionTypes.NEW_GAME:
      return {
        players: {
          player1: {
            active: true,
            current: 0,
            score: 0,
            winnner: false
          },
          player2: {
            active: false,
            current: 0,
            score: 0,
            winner: false
          }
        },
        num: null,
        endGame: false,
        winner: ""
      };
    default:
      return state;
  }
};

export default reducer;
