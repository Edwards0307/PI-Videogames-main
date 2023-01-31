import { Paged, CardsContainer, Filter, Order } from "../../components/index";
import { useState } from "react";

const Home = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <Order update={update} setUpdate={setUpdate} />
      <Filter />
      <Paged />
      <CardsContainer />
    </div>
  );
};

export default Home;
