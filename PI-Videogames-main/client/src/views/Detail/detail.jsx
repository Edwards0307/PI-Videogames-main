import { getGamesDetail, cleanState } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const gamesDetail = useSelector((state) => state.gamesDetail);

  useEffect(() => {
    dispatch(cleanState());
    dispatch(getGamesDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gamesDetail.length === 0) return <h1>Cargando</h1>;

  return (
    <div className={style.back}>
      <Link to={"/Home"}>
        <button>Back</button>
      </Link>

      {gamesDetail.map((game) => {
        return (
          <div key={game.id}>
            <h1>{game?.name}</h1>

            <img className={style.img} src={game?.image} alt="" />

            <br></br>

            <label>Released: </label>
            <p>{game?.released}</p>

            <label>Rating: </label>
            <p>{game?.rating}</p>

            <label>Platforms: </label>
            <p>{(game?.platforms).join(" ")}</p>

            <label>Genre: </label>
            <p>{(game?.genres).join(" ")}</p>

            <label>Description: </label>
            <p>{game?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
