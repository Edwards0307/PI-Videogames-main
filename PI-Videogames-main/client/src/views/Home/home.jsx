import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getGames } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>Estamos en Home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
