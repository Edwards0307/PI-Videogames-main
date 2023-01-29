const Order = () => {
  return (
    <div>
      <select>
        <option value="asc"> A - Z</option>
        <option value="desc"> Z - A</option>
      </select>

      <select>
        <option value="most"> Most popular</option>
        <option value="less"> Less popular</option>
      </select>
    </div>
  );
};

export default Order;
