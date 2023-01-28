import { useDispatch } from "react-redux";
import { useState } from "react";
import { getGamesName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(""); // Estado Local

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getGamesName(name));
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleInputChange}
        value={name}
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
