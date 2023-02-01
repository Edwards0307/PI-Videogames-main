import { useState } from "react";
import axios from "axios";
import style from "./form.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    genres: [],
    released: "",
    rating: "",
    platforms: [],
    img: "",
  });

  const platf = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "Xbox One",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "PS Vita",
    "PSP",
    "Wii U",
    "Wii",
    "GameCube",
    "Nintendo 64",
    "Game Boy Advance",
    "Game Boy Color",
    "Game Boy",
    "SNES",
    "NES",
    "Classic Macintosh",
    "Apple II",
    "Commodore / Amiga",
    "Atari 7800",
    "Atari 5200",
    "Atari 2600",
    "Atari Flashback",
    "Atari 8-bit",
    "Atari ST",
    "Atari Lynx",
    "Atari XEGS",
    "Genesis",
    "SEGA Saturn",
    "SEGA CD",
    "SEGA 32X",
    "SEGA Master System",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",
    "Web",
  ];
  const gen = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Massively Multiplayer",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card",
  ];

  const validate = (form) => {
    let errors = {};
    if (form.name.length < 2) {
      errors.name = "-Game Name must have at least 2 characters";
    }
    if (form.description.length < 15) {
      errors.description = "-Description must have at least 15 characters";
    }
    if (form.rating < 1 || form.rating > 5) {
      errors.rating = "-Rating must be between 1 and 5";
    }
    if (isNaN(form.rating)) {
      errors.rating = "-Rating must be a number";
    }
    if (form.genres.length < 1) {
      errors.genres = "-Genres is required";
    }
    if (form.platforms.length < 1) {
      errors.platforms = "-Platforms is required";
    }
    return errors;
  };

  /*

function handleSubmit(e) {
  e.preventDefault();
  let noRepeat = allGames.filter((game) => game.name === input.name);
  if (noRepeat.length !== 0) {
    alert("There is already a game with that name, please choose another one.");
  } else {
    let error = Object.keys(validate(input));
    if (error.length !== 0 || !input.genres.length || !input.platforms.length) {
      alert("Please, fill in the fields correctly");
      return;
    } else {
      dispatch(postVideogame(input));
      alert("The game has been created!!");
      setInput({
        name: "",
        image: "",
        released: "",
        description: "",
        rating: "",
        platforms: [],
        genres: [],
      });
    }
    history.push("/home");
  }
} */

  const error = validate(form);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/videogames", form);
  };

  function handleSelectP(event) {
    if (
      event.target.value !== "platforms" &&
      !form.platforms.includes(event.target.value)
    )
      setForm({
        ...form,
        platforms: [...form.platforms, event.target.value],
      });
  }

  function handleDeleteP(event) {
    setForm({
      ...form,
      platforms: form.platforms.filter(
        (element) => element !== event.target.value
      ),
    });
  }

  function handleSelectG(event) {
    if (
      event.target.value !== "platforms" &&
      !form.genres.includes(event.target.value)
    )
      setForm({
        ...form,
        genres: [...form.genres, event.target.value],
      });
  }

  function handleDeleteG(event) {
    setForm({
      ...form,
      genres: form.genres.filter((element) => element !== event.target.value),
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <Link to={"/Home"}>
        <button>Back</button>
      </Link>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
        <p>{error.name}</p>
      </div>

      <div>
        <label>Description: </label>
        <input
          type="text"
          value={form.description}
          onChange={changeHandler}
          name="description"
        />
        <p>{error.description}</p>
      </div>

      <label>Genres: </label>
      <select name="genres" onChange={handleSelectG}>
        <option value="genres">Genres</option>
        {gen?.map((element, index) => (
          <option key={index}>{element}</option>
        ))}
      </select>
      <div>
        {form.genres?.map((element, index) => (
          <span key={index}>
            {element}
            <button value={element} onClick={handleDeleteG}>
              X
            </button>
          </span>
        ))}
        <p>{error.genres}</p>
      </div>

      <div>
        <label>Released: </label>
        <input
          type="text"
          value={form.released}
          onChange={changeHandler}
          name="released"
        />
        <p>{error.released}</p>
      </div>

      <div>
        <label>Rating: </label>
        <input
          type="text"
          value={form.rating}
          onChange={changeHandler}
          name="rating"
        />
        <p>{error.rating}</p>
      </div>

      <label>Platforms: </label>
      <select name="platforms" onChange={handleSelectP}>
        <option value="platforms">Platforms</option>
        {platf?.map((element, index) => (
          <option key={index}>{element}</option>
        ))}
      </select>
      <div>
        {form.platforms?.map((element, index) => (
          <span key={index}>
            {element}
            <button value={element} onClick={handleDeleteP}>
              X
            </button>
          </span>
        ))}
        <p>{error.platforms}</p>
      </div>

      <div>
        <label>Img: </label>
        <input
          type="text"
          value={form.img}
          onChange={changeHandler}
          name="img"
        />
      </div>

      <button className={style.button} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
