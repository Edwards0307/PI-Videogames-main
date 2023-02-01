import {
  Paged,
  CardsContainer,
  Filter,
  Order,
  NavBar,
} from "../../components/index";
import { useState } from "react";

const Home = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <NavBar />
      <Order update={update} setUpdate={setUpdate} />
      <Filter />
      <Paged />
      <CardsContainer />
    </div>
  );
};

export default Home;
