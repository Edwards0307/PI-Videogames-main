import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = (props) => {
  const games = useSelector((state) => state.games);

  return (
    <div className={style.containerWrapperList}>
      {games.map(({ name, image, released, rating, platforms, genres, id }) => {
        return (
          <div key={id} className={style.wrapperList}>
            <Card
              detailId={id}
              name={name}
              released={released}
              rating={rating}
              platforms={platforms}
              genres={genres}
              image={image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
