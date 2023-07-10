// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
// styles
import "./App.css";
// pages
import Catalog from "./Catalog";
import Cart from "./Cart";
import Order from "./Order";
import PersonalAccount from "./PersonalAccount";
import Product from "./Product";
// components
import Navigation from "../components/Navigation";
// images
import logoBlack from "../images/logo-black.svg";
import logoWhite from "../images/logo-white.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg";
import personalAccount from "../images/personalAccount.svg";
import cart from "../images/cart.svg";

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
      <div className="header">
        <img src={logoBlack} alt="Pepperoni Papa Pizza" />
        <Navigation style={{ display: "flex", flexDirection: "row" }} />
        <div className="personalNavigation">
          <div className="personalAccount">
            <img src={personalAccount} alt="" />
            <a href="/personalAccount">Личный кабинет</a>
          </div>
          <a href="/cart">
            <img src={cart} alt="Корзина" />
          </a>
          <img src={whatsapp} alt="WhatsApp" />
          <img src={telegram} alt="Telegram" />
        </div>
      </div>
      <div className="body">
        
      </div>
      <div className="footer">
        <img src={logoWhite} alt="Pepperoni Papa Pizza" />
        <Navigation style={{ display: "flex", flexDirection: "column" }} />
        <div className="phone">
          <h3>Заказать еду можно по телефону</h3>
          <h2>222-22-22</h2>
          <div className="messengers">
            <img src={whatsapp} alt="WhatsApp" />
            <img src={telegram} alt="Telegram" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
