// libraries
import { useLocalStorage } from "react-use";
// styles
import "./Order.css"

const Order = () => {
  // формат: {productsPrice- сумма заказа, deliveryPrice-цена доставки, totalPrice - итоговая цена}
  const [orderInfo, setOrderInfo] = useLocalStorage("orderInfo");

  return (
    <>
      <p>example</p>
    </>
  );
};

export default Order;
