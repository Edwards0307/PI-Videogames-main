import { Paged, CardsContainer, Filter, Order } from "../../components/index";

const Home = () => {
  return (
    <div>
      <Order />
      <Filter />
      <Paged />
      <CardsContainer />
    </div>
  );
};

export default Home;
