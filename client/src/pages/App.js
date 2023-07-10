import "./App.css";
import Catalog from "./Catalog";
import Cart from "./Cart";
import Order from "./Order";
import PersonalAccount from "./PersonalAccount";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logoBlack from "../images/logo-black.svg";
import logoWhite from "../images/logo-white.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg";
import personalAccount from "../images/personalAccount.svg";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="personalAccount" element={<PersonalAccount />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <div className="header" style={{ display: "flex", flexDirection: "row" }}>
        <div className="nagivation">
          <img src={logoBlack} alt="Pepperoni Papa Pizza" />
          <a href="/">Главная</a>
          <a href="/catalog">Меню</a>
          <a href="/">О нас</a> {/* добавить ссылку*/}
          <a href="/">Рестораны</a> {/* добавить ссылку*/}
        </div>
        <div className="personalNavigation">
          <div className="personalAccount">
            <img src={personalAccount} alt="" />
            <a href="/personalAccount">Личный кабинет</a>
          </div>
          <a href="/cart">Корзина</a>
          <img src={whatsapp} alt="WhatsApp" />
          <img src={telegram} alt="Telegram" />
        </div>
      </div>
      <div className="body"></div>
      <div className="footer" style={{ display: "flex", flexDirection: "row" }}>
        <img src={logoWhite} alt="Pepperoni Papa Pizza" />
        <h2>рабочий телефон</h2>
        <h2>рабочая эл. почта</h2>
        <h2>количество пиццерий</h2>
      </div>
    </>
  );
};

export default App;
