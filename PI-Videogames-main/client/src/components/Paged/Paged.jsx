import React from "react";

const Paged = ({ gamesPerPage, allGames, paginado }) => {
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
            <div key={number}>
              <button onClick={() => paginado(number)}>{number}</button>
            </div>
          );
        })}
    </nav>
  );
};

export default Paged;
