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
        <div className="left">
          <img src={logoWhite} alt="Pepperoni Papa Pizza" className="logo" />
          <Navigation
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          />
        </div>

        <div className="phone">
          <p>Заказать еду можно по телефону</p>
          <h2>222-22-22</h2>
          <div className="messengers">
            <a href="tel:2222222">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a href="tel:2222222">
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
