// libraries
import { useLocalStorage } from "react-use";
// styles
import "./Order.css"

const Order = () => {
  // чтобы передавать данные с корзины на страницу заказа
  const [orderInfo, setOrderInfo] = useLocalStorage("orderInfo");

  return (
    <>
      <p>example</p>
    </>
  );
};

export default Order;
