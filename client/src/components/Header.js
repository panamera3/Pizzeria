// components
import Navigation from "../components/Navigation";
// styles
import "./Header.css";
// images
import logoBlack from "../images/logo-black.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg";
import personalAccount from "../images/personalAccount.svg";
import cart from "../images/cart.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logoBlack} alt="Pepperoni Papa Pizza" />
        <div className="navigation">
          <Navigation style={{ display: "flex", flexDirection: "row" }} />
          <div className="vertical-line"></div>
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
      </div>
    </>
  );
};

export default Header;
