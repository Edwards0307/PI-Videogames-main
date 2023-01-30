import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGames, resedPaged } from "../../redux/actions";
import { Card, Paged } from "../index";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  const currentPage = useSelector((state) => state.currentPage);

  /* const [currentPage, setCurrentPage] = useState(1); */ //Pagina en la que vamos arrancar
  const [gamesPerPage] = useState(15); // Cantidad de juegos que queremos por paginas

  // ahora voy a hacer logica numerica para el paginado
  const indexOfLastGame = currentPage * gamesPerPage; //15
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; //0
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // declaro una funcion que va a modificar el estado local de CurrentPage, esto lo voy a pasar
  // como prop al componente Paginated
  const paged = (currentPage) => {
    dispatch(resedPaged(currentPage));
  };

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className={style.containerWrapperList}>
      <Paged
        gamesPerPage={gamesPerPage}
        allGames={games.length}
        paged={paged}
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
