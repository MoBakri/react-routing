import React from "react";

const ProductsDetails = ({ match }) => {
  return <div>ProductsDetails - {match.params.id}</div>;
};
export default ProductsDetails;
