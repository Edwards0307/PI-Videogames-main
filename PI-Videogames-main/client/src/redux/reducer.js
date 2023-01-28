import { GET_GAMES, GET_GAMES_DETAIL } from "./action-types";

const initialState = {
  games: [],
  gamesDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };

    case GET_GAMES_DETAIL:
      return {
        ...state,
        gamesDetail: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
