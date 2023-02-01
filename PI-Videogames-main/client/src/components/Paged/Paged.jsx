import React from "react";
import style from "./Paged.module.css";

const Paged = ({ gamesPerPage, allGames, paged }) => {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(allGames / gamesPerPage); i++) {
    pageNumber.push(i + 1);
  }
  pageNumber.pop();
  return (
    <nav className={style.orderPaged}>
      {pageNumber &&
        pageNumber.map((number) => {
          return (
            <div key={number}>
              <button onClick={() => paged(number)}>{number}</button>
            </div>
          );
        })}
    </nav>
  );
};

export default Paged;
