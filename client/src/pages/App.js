// libraries
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
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

const router = createHashRouter([
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order", element: <Order /> },
  { path: "/personal-account", element: <PersonalAccount /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/restaurants", element: <Restaurants /> },
  { path: "*", element: <Navigate to="/" /> },
]);

const App = () => {
  const [user, setUser] = useLocalStorage("user");
  // чтобы хранить у каждого пользователя товары в корзине
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");
  // чтобы передавать данные с корзины на страницу заказа
  const [orderInfo, setOrderInfo] = useLocalStorage("orderInfo");

  return (
    <>
      <Header />

      <div className="body">
        <RouterProvider router={router}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/personal-account" element={<PersonalAccount />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/restaurants" element={<Restaurants />} />
            перенаправлять пользователя на главную страницу, если ввёл
            несуществующий путь
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </RouterProvider>
      </div>
      <Footer />
    </>
  );
};

export default App;
