import style from "./Card.module.css";

export default function Card({
  name,
  image,
  released,
  rating,
  platforms,
  genres,
}) {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <h2>{name}</h2>
      </div>
      <img className={style.img} src={image} alt="" />
      <div className={style.info}>
        <h4>Released: {released}</h4>
        <h4>Rating: {rating}</h4>
        <h4>Plataforms:</h4>
        <ul>
          {platforms.map((platform, index) => (
            <li key={index}>{platform}</li>
          ))}
        </ul>
        <h4>Genres:</h4>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* const Card = (props) => {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <p>name:{props.name}</p>
      </div>
      <p>image:{props.image}</p>
      <p>released:{props.released}</p>
      <p>rating:{props.rating}</p>
      <p>platforms:{props.platforms}</p>
      <p>genres:{props.genres}</p>
    </div>
  );
}; */
