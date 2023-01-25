import { GET_GAMES } from "./actions";

const initialState = {
  games: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, games: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
