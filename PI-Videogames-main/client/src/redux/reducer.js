import { GET_GAMES, GET_GAMES_DETAIL, GET_GAMES_NAME } from "./action-types";

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

    case GET_GAMES_NAME:
      return {
        ...state,
        games: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
