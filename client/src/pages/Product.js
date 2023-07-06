import { useParams } from "react-router-dom";
import { useState } from "react";
import Pizza from "../types/Pizza.js";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // делать запрос, доставать из бд пиццу
  console.log(product);

  return (
    <>
      <div>
        <h2>Пицца: {id}</h2>
      </div>
      <div>
        <h3>Состав: </h3>
        <ul>
          <li>ex</li>
          <li>ex</li>
        </ul>
      </div>
      <div>
        <h4>Цена: {100} рублей</h4>
      </div>
    </>
  );
};

export default Product;
