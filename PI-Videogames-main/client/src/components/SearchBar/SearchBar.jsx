import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getGamesName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const gamesName = useSelector((state) => state.games);
  const [name, setName] = useState();

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getGamesName(name));
    setName("");
  }

  if (gamesName.length === 0) return <h1>Cargando</h1>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        value={name}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
