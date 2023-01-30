import { orderGamesByName, orderGamesByRating } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderGamesByName(event.target.value));
  };

  const handleRating = (event) => {
    dispatch(orderGamesByRating(event.target.value));
  };

  return (
    <div>
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
