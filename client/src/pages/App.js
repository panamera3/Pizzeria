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
import Login from "./Login/Login";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";
// font
import "typeface-montserrat";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="body">
          <Routes>
            <Route path="" element={<Background />} />
            <Route path="login" element={<Login />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="personalAccount" element={<PersonalAccount />} />
            <Route path="product/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
