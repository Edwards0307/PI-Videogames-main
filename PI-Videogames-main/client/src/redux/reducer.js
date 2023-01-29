import {
  GET_GAMES,
  GET_GAMES_DETAIL,
  GET_GAMES_NAME,
  FILTER_GAMES,
} from "./action-types";

const initialState = {
  games: [],
  gamesDetail: [],
  allGames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        allGames: action.payload,
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

    case FILTER_GAMES:
      let allGames = state.allGames;
      let filterGames =
        action.payload === "All Genres"
          ? allGames
          : allGames.filter((element) =>
              element.genres.includes(action.payload)
            );
      return {
        ...state,
        games: filterGames,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
