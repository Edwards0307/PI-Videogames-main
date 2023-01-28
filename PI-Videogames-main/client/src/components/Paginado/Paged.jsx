import React from "react";
// import style from './Pagination.module.css'

const Pagination = ({ gamesPerPage, allGames, paginado }) => {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(allGames / gamesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  pageNumber.pop();

  return (
    <nav>
      {pageNumber &&
        pageNumber.map((number) => {
          return (
            <div>
              <button onClick={() => paginado(number)}>{number}</button>
            </div>
          );
        })}
    </nav>
  );
};

export default Pagination;
