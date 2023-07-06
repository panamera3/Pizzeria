import { useParams } from "react-router-dom";
import { useState } from "react";
import Pizza from '../types/Pizza.js'

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log(product);

  return (
    <>
      <h2>Страница: {id}</h2>
    </>
  );
};

export default Product;
