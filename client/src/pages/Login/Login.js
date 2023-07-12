// styles
import "./Login.css";
// components
import Exit from "../../images/Exit.svg";
import Background from "../../components/Background";
// libraries
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
    if (re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Почта введена некорректно");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4) {
      setPasswordError("Пароль должен быть длиннее 4 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const onCloseLogin = () => {
    navigate("/");
  };

  return (
    <Background>
      <div style={{ height: "40em" }} />{" "}
      {/* чтобы корректно отображался фоновый рисунок */}
      <Modal
        isOpen={true}
        onClose={onCloseLogin}
        width="40em"
        height="45%"
        stylePosition={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form className="login__form" method="post">
          <div className="login-title__wrapper">
            <h2 className="login__title">Вход</h2>
          </div>
          <div className="login-input__wrapper">
            <label className="login__label" for="email__input">
              Телефон:
            </label>
            {emailDirty && emailError && (
              <div style={{ color: "red" }}>{emailError}</div>
            )}
            <input
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
              name="email"
              className="login__input"
              id="email__input"
              type="email"
              placeholder="absdefgh@mail.com"
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
      </Modal>
    </Background>
  );
};

export default Login;
