import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGames } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className={style.containerWrapperList}>
      {games.map((game) => {
        return (
          <div key={game?.id} className={style.wrapperList}>
            <Card
              id={game?.id}
              name={game?.name}
              released={game?.released}
              rating={game?.rating}
              platforms={game?.platforms}
              genres={game?.genres}
              image={game?.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
