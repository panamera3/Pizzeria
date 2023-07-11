// components
import Navigation from "../components/Navigation";
// styles
import "./Header.css";
// images
import logoBlack from "../images/logo-black.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg";
import personalAccount from "../images/personalAccount.svg";
import personalAccountHover from "../images/personalAccountHover.svg";
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
              <a href="/personal-account">
                <img src={personalAccount} alt="" className="pa" />
                <img src={personalAccountHover} alt="" className="paHover" />
                Личный кабинет
              </a>
            </div>
            <div className="images">
              <a href="/cart">
                <img src={cart} alt="Корзина" />
              </a>

              <a href="/">
                <img src={whatsapp} alt="WhatsApp" />
                {/* ссылка на ватсап? */}
              </a>

              <a href="/">
                <img src={telegram} alt="Telegram" /> {/* ссылка на телегу? */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
