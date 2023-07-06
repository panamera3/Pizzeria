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
      <nav>
        <ul>
          <li>
            <a href="/catalog">Каталог</a>
          </li>
          <li>
            <a href="/cart">Корзина</a>
          </li>
          <li>
            <a href="/cart">Личный кабинет</a>
          </li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="personalAccount" element={<PersonalAccount />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
