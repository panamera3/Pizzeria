// components
import Background from "../../components/Background";
// images
import logoWhite from "../../images/logo-white.svg";
// styles
import "./Main.css";

const Main = () => {
  return (
    <Background>
      <div className="main-container">
        <img src={logoWhite} width="40%" />
        <div className="main-horizontal-line" />
        <div className="main-text-container">
          <h2>Пицца, которая к тебе примчится</h2>
          <p>Сеть пиццерий №1 в России</p>
        </div>
      </div>
    </Background>
  );
};

export default Main;
