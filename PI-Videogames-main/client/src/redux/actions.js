import axios from "axios";

export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_ID = "GET_GAMES_ID";

export const getGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/videogames");
    const games = apiData.data;
    dispatch({ type: GET_GAMES, payload: games });
  };
};

export const getGamesById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
    const games = apiData.data;
    dispatch({ type: "GET_GAMES_ID", payload: games });
  };
};
