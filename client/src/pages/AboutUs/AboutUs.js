//styles
import "./AboutUs.css";
// components
import SecondBackground from "../../components/SecondBackground";

const AboutUs = () => {
  return (
    <>
      <SecondBackground />
      <div className="about-us-container">
        <h2>Кто мы?</h2>
        <div className="point">
          <p>
            Мы - такие же любители пиццы как и вы, и мы стремимся передать свою
            любовь к пицце в виде ее качества
          </p>
        </div>
        <div className="point">
          <p>
            Заказывайте Ваши любимые блюда у нас, и Вы останетесь довольны
            качеством сервиса. У нас работают лучшие повара, а курьеры приятно
            порадуют вежливостью и быстрой доставкой.
          </p>
        </div>
        <div className="point">
          <p>
            Наша продукция готовится только из свежайших ингредиентов
            непосредственно перед отправкой вам.
          </p>
        </div>
        <div className="point">
          <p>
            Мы стараемся работать быстро и внимательно, исполняем пожелания
            клиентов. Мы не позволим Вам страдать от голода. Приятного аппетита!
          </p>
        </div>
        <div className="contacts-container">
          <h2>Контакты</h2>
          <div className="point">
            <p>
              Если у вас возникнут вопросы или пожелания, вы можете связаться с
              нами любым удобным способом:
              <br />
              Телефон: <br />
              <b>8 (800)555-35-35 </b>
              <br />
              Email:
              <br /> <b>cocojambo@gmail.com</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
