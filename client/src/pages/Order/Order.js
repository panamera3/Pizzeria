// libraries
import { useLocalStorage } from "react-use";
import { useEffect, useState} from "react";
import SecondBackground from "../../components/SecondBackground";
// styles
import "./Order.css";

const Order = () => {
  // формат: {productsPrice - сумма заказа, deliveryPrice -цена доставки, totalPrice - итоговая цена}
  const [orderInfo, setOrderInfo] = useLocalStorage("orderInfo");
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");
  const [products, setProducts] = useState([{}]);
  const [productsAmount, setProductsAmount] = useState(0);
  const [productsPrice, setProductsPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setProducts(cartProducts);
  }, []);

  useEffect(() => {
    setProductsAmount(
      products.reduce((total, product) => total + product.amount, 0)
    );
    setProductsPrice(
      products.reduce(
        (total, product) => total + product.cost * product.amount,
        0
      )
    );
  }, [products]);

  useEffect(() => {
    setProducts(cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    setDeliveryPrice(
      products.length > 0 ? (productsPrice >= 500 ? 0 : 200) : 0
    );
  }, [productsPrice]);

  useEffect(() => {
    setTotalPrice(productsPrice + deliveryPrice - discountPrice);
  }, [productsPrice, deliveryPrice, discountPrice]);
  // в бд в метод "" передавать количество товаров в заказе, потом используется в ЛК это

  return (
    <>
      <SecondBackground />
      <main>
        <h1 className="title">ОФОРМЛЕНИЕ ЗАКАЗА</h1>
        <h3>ЛИЧНЫЕ ДАННЫЕ</h3>
        <div className="personalInfo">
          <div className="name">
            <p>Имя</p>
            <input type="text" placeholder="Иван" />
          </div>
          <button></button>
          <div className="phonenumber">
            <p>Телефон</p>
            <input type="tel" placeholder="+79999999999" />
          </div>
          <div className="email">
            <p>Email</p>
            <input type="email" placeholder="test@mail.ru" />
          </div>
          <button></button>
        </div>

        <h3>АДРЕС И ВРЕМЯ ДОСТАВКИ</h3>
        <div className="adressNCard">
        <div className="adressNTime">
          <div className="delivery">
            <button>Доставка</button>
            <button>Самовывоз</button>
          </div>
          <div className="btn-adress">
            <button className="buttonNewAdress">Новый адрес</button>
            <button className="savedAdress">Сохранённый адрес</button>
          </div>
          
                
          <div className="adress">
            <p>Адрес*:</p>
            <input placeholder="Адрес" required />
          </div>
          <div className="nearAdress">
            <div>
              <p>Квартира/Офис*:</p>
              <input placeholder="Квартира/Офис" required />
            </div>
            <div>
              <p>Подъезд:</p>
              <input placeholder="Подъезд" />
            </div>
            <div>
              <p>Этаж:</p>
              <input placeholder="Этаж" />
            </div>
            <div>
              <p>Домофон:</p>
              <input placeholder="Есть" />
            </div>
            
          </div>

          <div className="time">
            <p>Сегодня к:</p>
            <select>
              <option>08:00</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
            </select>
          </div>
          <div className="comment">
            <p>Коментарий:</p>
            <textarea placeholder="Пожелания по доставке"></textarea>
          </div>
          <p className="bold">* поля должны быть обязательно заполнены</p>
          </div>
          <div className="card" style={{ position: "absolute", overflow: "visible" }}>
                  <a
                    href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps"
                    style={{
                      color: "#eee",
                      fontSize: 12,
                      position: "absolute",
                      top: 0,
                    }}
                  >
                    Екатеринбург
                  </a>
                  <a
                    href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.597465%2C56.838011&utm_medium=mapframe&utm_source=maps&z=12"
                    style={{
                      color: "#eee",
                      fontSize: 12,
                      position: "absolute",
                      top: 14,
                    }}
                  >
                    Яндекс Карты — транспорт, навигация, поиск мест
                  </a>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=60.597465%2C56.838011&z=12"
                    width="612"
                    height="400"
                    frameBorder="1"
                    allowFullScreen="true"
                    style={{ position: "absolute" }}
                  ></iframe>
            </div>
        
      </div>

        <h3>СПОСОБ ОПЛАТЫ</h3>
        <div className="payment">
          <div>
            <button className="cash">Наличными</button>
            <button className="card">Банковской картой курьеру</button>
            <button className="online">Онлайн</button>
          </div>
          <p>Сдача с:</p>
          <input />
        </div>
        <div className="sumZak">
          <div>
            <p>Сумма заказа</p>
            <p>Доставка</p>
          </div>
          <div>
            <p>{productsPrice} Р</p>
            <p>{deliveryPrice} Р</p>
          </div>
        </div>
        <div className="itog">
          <text>ИТОГО:</text>
          <text>{totalPrice} Р</text>
          <button>Заказать</button>
        </div>
      </main>
      <p>example</p>
    </>
  );
};

export default Order;
