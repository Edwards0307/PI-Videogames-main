import axios from "axios";
import { GET_GAMES, GET_GAMES_DETAIL, GET_GAMES_NAME } from "./action-types";

export const getGames = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/videogames");

    return dispatch({ type: GET_GAMES, payload: response.data });
  };
};

export const getGamesDetail = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/videogames/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_GAMES_DETAIL, payload: data }));
  };
};

export const getGamesName = (name) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/videogames?name=${name}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_GAMES_NAME, payload: data }));
  };
};
