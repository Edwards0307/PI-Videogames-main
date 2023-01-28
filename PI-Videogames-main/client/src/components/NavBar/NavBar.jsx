import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { SearchBar } from "../index";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/Home">
        <button>Home</button>
      </Link>

      <SearchBar />

      <Link to="/Form">
        <button>Create Game</button>
      </Link>
    </div>
  );
};

export default NavBar;
