import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { SearchBar } from "../index";
import { useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(getGames());
  };

  return (
    <div className={style.mainContainer}>
      <Link to="/Home">
        <button onClick={handleChange}>Home</button>
      </Link>

      <SearchBar />

      <Link to="/Form">
        <button>Create Game</button>
      </Link>
    </div>
  );
};

export default NavBar;
