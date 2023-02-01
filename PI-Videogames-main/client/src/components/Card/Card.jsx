import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, released, rating, image }) {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <h2>{name}</h2>
      </div>

      <Link to={`/Detail/${id}`}>
        <div className={style.info}>
          <img className={style.img} src={image} alt="" />
        </div>
      </Link>

      <h4>Released: {released}</h4>

      <h4>Rating: {rating}</h4>
    </div>
  );
}
