import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Paginado/Paged";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Pagination />
      <CardsContainer />
    </div>
  );
};

export default Home;
