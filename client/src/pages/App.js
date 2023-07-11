// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "react-use";
// styles
import "./App.css";
// pages
import Cart from "./Cart/Cart";
import Order from "./Order";
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
  const [user, setUser] = useLocalStorage("user", {});

  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="body">
          <Routes>
            <Route path="" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="personal-account" element={<PersonalAccount />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="restaurants" element={<Restaurants />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
