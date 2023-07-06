import "./App.css";
import Catalog from "./Catalog";
import Cart from "./Cart";
import Order from "./Order";
import PersonalAccount from "./PersonalAccount";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div
        className="navigation"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <p>Ближайшие филиалы: {"Мира 32"}</p>
        <a href="/catalog">Каталог</a>
        <a href="/cart">Корзина</a>
        <a href="/cart">Личный кабинет</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="personalAccount" element={<PersonalAccount />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <div className="footer" style={{ display: "flex", flexDirection: "row" }}>
        <h2>рабочий телефон</h2>
        <h2>рабочая эл. почта</h2>
        <h2>количество пиццерий</h2>
      </div>
    </>
  );
};

export default App;
