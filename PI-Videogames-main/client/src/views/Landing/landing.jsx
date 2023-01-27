import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css";

const Landing = () => {
  return (
    <div>
      <h1>Video Games</h1>
      <Link to="/Home">
        <button className={style.button}>Enter</button>
      </Link>
    </div>
  );
};

export default Landing;
