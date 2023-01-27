import style from "./Card.module.css";

export default function Card({
  id,
  name,
  image,
  released,
  rating,
  platforms,
  genres,
}) {
  return (
    <div key={id} className={style.container}>
      <div className={style.name}>
        <h2>{name}</h2>
      </div>

      <img className={style.img} src={image} alt="" />

      <div className={style.info}>
        <h4>Released: {released}</h4>
        <h4>Rating: {rating}</h4>

        <h4>Plataforms:</h4>
        <ul>
          {platforms.map((platform, id) => (
            <li key={id}>{platform}</li>
          ))}
        </ul>

        <h4>Genres:</h4>
        <ul>
          {genres.map((genre, id) => (
            <li key={id}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
