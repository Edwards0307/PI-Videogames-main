import {
  GET_GAMES,
  GET_GAMES_DETAIL,
  GET_GAMES_NAME,
  FILTER_GAMES,
  FILTER_GAMES_CREATE,
} from "./action-types";

const initialState = {
  games: [],
  backupGames: [],
  gamesDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        backupGames: action.payload,
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
      let allGames = state.backupGames;
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

    case FILTER_GAMES_CREATE:
      let backup = state.backupGames;
      let filterCreate =
        action.payload === "Bdd"
          ? backup.filter((element) => element.created)
          : backup.filter((element) => !element.created);
      return {
        ...state,
        games:
          action.payload === "All Games" ? state.backupGames : filterCreate,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
