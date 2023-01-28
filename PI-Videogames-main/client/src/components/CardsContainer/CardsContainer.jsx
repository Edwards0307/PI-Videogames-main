import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGames } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import Pagination from "../Paginado/Paged";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  // ahora voy a hacer logica numerica para el paginado
  const indexOfLastGame = currentPage * gamesPerPage; //15
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; //0
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // declaro una funcion que va a modificar el estado local de CurrentPage, esto lo voy a pasar
  // como prop al componente Paginated
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className={style.containerWrapperList}>
      <Pagination
        gamesPerPage={gamesPerPage}
        allGames={games.length}
        paginado={paginado}
      />

      {currentGames.map((game) => {
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
