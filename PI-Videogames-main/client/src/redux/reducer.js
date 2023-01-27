import { GET_GAMES, GET_GAMES_ID } from "./actions";

const initialState = {
  games: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, games: action.payload };
    case GET_GAMES_ID:
      return { ...state, games: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
