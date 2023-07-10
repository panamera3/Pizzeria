import "./Login.css";
import Exit from "./Exit.svg";
import Background from "../../components/Background";
import { useState, useEffect } from "react";

const Login = () => {
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [telDirty, setTelDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [telError, setTelError] = useState("Телефон не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (telError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [telError, passwordError]);

  const telHandler = (e) => {
    setTel(e.target.value);
    const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if (re.test(String(e.target.value).toLowerCase())) {
      setTelError("Телефон введён некорректно");
    } else {
      setTelError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4) {
      setPasswordError("Пароль должен быть длиннее 4");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "tel":
        setTelDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <Background>
      <div className="login">
        <form className="login__form" method="post">
          <div className="login-title__wrapper">
            <h2 className="login__title">Вход</h2>
            {/* при нажатии на выход, перенаправляет на главную страницу */}
            <a href="/">
              <img className="login__exit" src={Exit} alt="Кнопка выхода" />
            </a>
          </div>
          <div className="login-input__wrapper">
            <label className="login__label" for="tel__input">
              Телефон:
            </label>
            {telDirty && telError && (
              <div style={{ color: "red" }}>{telError}</div>
            )}
            <input
              onChange={(e) => telHandler(e)}
              value={tel}
              onBlur={(e) => blurHandler(e)}
              name="tel"
              className="login__input"
              id="tel__input"
              type="tel"
              placeholder="+7 999 999 99 99"
            />
          </div>
          <div className="login-input__wrapper">
            <label className="login__label" for="password__input">
              Пароль:
            </label>
            {passwordDirty && passwordError && (
              <div style={{ color: "red" }}>{passwordError}</div>
            )}
            <input
              onChange={(e) => passwordHandler(e)}
              value={password}
              onBlur={(e) => blurHandler(e)}
              name="password"
              className="login__input"
              id="password__input"
              type="password"
              placeholder="qwerty"
            />
          </div>
          <button disabled={!formValid} className="login__submit" type="submit">
            Продолжить
          </button>
        </form>
        <div className="login__wrapper">
          <button className="login__button" type="button">
            Регистрация
          </button>
          <button className="login__button" type="button">
            Забыли пароль?
          </button>
        </div>
        <a href="#" className="login__link">
          Политика обработки персональных данных
        </a>
      </div>
    </Background>
  );
};

export default Login;
