import axios from "axios";

export const GET_GAMES = "GET_GAMES";

export const getGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/videogames");
    const games = apiData.data;
    dispatch({ type: GET_GAMES, payload: games });
  };
};
