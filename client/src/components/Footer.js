// components
import Navigation from "../components/Navigation";
// styles
import "./Footer.css";
// images
import logoWhite from "../images/logo-white.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg";

const Footer = () => {
  return (
    <>
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

export default Footer;
