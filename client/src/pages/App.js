// libraries
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
// styles
import "./App.css";
// pages
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import Catalog from "./Catalog/Catalog";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import Login from "./Login/Login";
import Main from "./Main/Main";
import AboutUs from "./AboutUs/AboutUs";
import Restaurants from "./Restaurants/Restaurants";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
// font
import "typeface-montserrat";

const App = () => {
  const [user, setUser] = useLocalStorage("user");
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");
  // чтобы передавать данные с корзины на страницу заказа 
  const [orderInfo, setOrderInfo] = useLocalStorage("orderInfo");

  return (
    <>
      <Header />
      <BrowserRouter basename="/Pizzeria">
        <div className="body">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/personal-account" element={<PersonalAccount />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/restaurants" element={<Restaurants />} />
            {/* перенаправлять пользователя на главную страницу, если ввёл несуществующий путь */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
