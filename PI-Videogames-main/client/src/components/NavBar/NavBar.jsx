import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <Link to="/Form">
        <button>Form</button>
      </Link>
    </div>
  );
};

export default NavBar;
