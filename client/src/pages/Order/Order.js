// libraries
import { useLocalStorage } from "react-use";
import { useEffect } from "react";
import SecondBackground from "../../components/SecondBackground";
// styles
import "./Order.css";

const Order = () => {
  // формат: {productsPrice - сумма заказа, deliveryPrice -цена доставки, totalPrice - итоговая цена}
  const [orderInfo, setOrderInfo] = useLocalStorage("orderInfo");

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
            <p>2997 Р</p>
            <p>0 Р</p>
          </div>
        </div>
        <div className="itog">
          <text>ИТОГО:</text>
          <text>2997 Р</text>
          <button>Заказать</button>
        </div>
      </main>
      <p>example</p>
    </>
  );
};

export default Order;
