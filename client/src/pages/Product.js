import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h2>Страница: {id}</h2>
    </>
  );
};

export default Product;
