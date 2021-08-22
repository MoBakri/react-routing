import React from "react";
import { Link } from "react-router-dom";
const Productss = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" }
];
const Products = () => {
  return (
    <ul>
      {Productss.map((item) => (
        <li key={item.id}>
          <Link to={`/Products/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Products;
