import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getGames } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  return (
    <>
      <h1>Estamos en Home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
