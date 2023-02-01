import {
  orderGamesByName,
  orderGamesByRating,
  resedPaged,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Order.module.css";

const Order = ({ update, setUpdate }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderGamesByName(event.target.value));
    setUpdate(!update);
    dispatch(resedPaged(1));
  };

  const handleRating = (event) => {
    dispatch(orderGamesByRating(event.target.value));
    setUpdate(!update);
  };

  return (
    <div className={style.order}>
      <select onChange={(event) => handleOrder(event)}>
        <option value="asc"> A - Z</option>
        <option value="desc"> Z - A</option>
      </select>

      <select onChange={(event) => handleRating(event)}>
        <option value="most"> Most popular</option>
        <option value="less"> Less popular</option>
      </select>
    </div>
  );
};

export default Order;
