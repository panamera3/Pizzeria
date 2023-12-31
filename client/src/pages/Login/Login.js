// styles
import "./Login.css";
// components
import Background from "../../components/Background";
import Modal from "../../components/Modal";
// libraries
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const usernameLoginInputRef = useRef();
  const passwordLoginInputRef = useRef();

  const usernameRegistrationInputRef = useRef();
  const passwordRegistrationInputRef = useRef();

  const passwordRecoveryInputRef = useRef();
  const emailRecoveryInputRef = useRef();
  const resetCodeRecoveryInputRef = useRef();

  const [user, setUser] = useLocalStorage("user");
  const [userToken, setUserToken] = useLocalStorage("userToken");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  const [isRegistration, setIsRegistration] = useState(false);
  const [isRecovery, setIsRecovery] = useState(false);
  const [isSentPassword, setIsSentPassword] = useState(false);

  useEffect(() => {
    // если пользователь входил ранее, перенаправлять его в ЛК
    if (userToken) {
      navigate(`/personal-account`);
    }
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
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
    navigate(`/`);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(32);
    let resetCode = "";

    // логин
    if (!isRegistration && !isRecovery) {
      console.log(
        usernameLoginInputRef.current.value,
        passwordLoginInputRef.current.value
      );

      const formData = new FormData();
      formData.append("username", usernameLoginInputRef.current.value);
      formData.append("password", passwordLoginInputRef.current.value);

      axios({
        method: "post",
        responseType: "json",
        url: `http://81.200.145.113:8000/user/login`,
        data: formData,
      })
        .then((res) => {
          if (res.data.access_token) {
            setUserToken(res.data.access_token);
            // перевод на лк
            navigate(`/personal-account`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // регистрация
    if (isRegistration) {
      const formData = new FormData();
      formData.append("username", usernameRegistrationInputRef.current.value);
      formData.append("password", passwordRegistrationInputRef.current.value);

      axios({
        method: "post",
        responseType: "json",
        url: `http://81.200.145.113:8000/user/signup`,
        data: {
          email: `${usernameRegistrationInputRef.current.value}`,
          password: `${passwordRegistrationInputRef.current.value}`,
          birth_date: "",
          bonus: 0,
          first_name: "",
          middle_surname: "",
          phone: "",
          role: "",
          surname: "",
        },
      })
        .then((result) => {
          console.log("AAA", result.data);
          // вернётся сам пользователь, без токена, пользователя надо залогировать, чтобы получить токен
          if (result.data) {
            const formDataReg = new FormData();
            formDataReg.append(
              "username",
              usernameRegistrationInputRef.current.value
            );
            formDataReg.append(
              "password",
              passwordRegistrationInputRef.current.value
            );

            // логирование пользователя
            axios({
              method: "post",
              responseType: "json",
              url: `http://81.200.145.113:8000/user/login`,
              data: formDataReg,
            })
              .then((res) => {
                console.log("AAAA", res.data);
                if (res.data.access_token) {
                  setUser(result.data);
                  setUserToken(res.data.access_token);
                  // перевод на лк
                  navigate(`/personal-account`);
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // первое окно сброса пароля
    if (isRecovery && !isSentPassword) {
      console.log(1);
      console.log(passwordRecoveryInputRef.current.value);
      console.log(emailRecoveryInputRef.current.value);

      const userEmail = emailRecoveryInputRef.current.value;

      axios
        .post("http://81.200.145.113:8000/user/recovery", userEmail)
        .then((code) => (resetCode = code))
        .catch((error) => console.log("Ошибка:\n", error));
      setIsSentPassword(true);
    }
    // второе окно сброса пароля
    if (isRecovery && isSentPassword) {
      console.log(2);
      console.log(resetCode);
      console.log(resetCodeRecoveryInputRef.current.value);
      const userResetCode = resetCodeRecoveryInputRef.current.value;
      if (resetCode === userResetCode) {
        navigate(`/personal-account`);
      }
    }
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
        <form className="login__form" onSubmit={submitHandler}>
          {!isRegistration && !isRecovery && (
            <>
              <div className="login-title__wrapper">
                <h2 className="login__title">Вход</h2>
              </div>
              <div className="login-input">
                <div className="login-input__wrapper">
                  <label className="login__label" for="email__input">
                    Почта:
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
                    ref={usernameLoginInputRef}
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
                    ref={passwordLoginInputRef}
                  />
                </div>
              </div>
            </>
          )}

          {isRegistration && (
            <>
              <div className="login-title__wrapper">
                <h2 className="login__title">Регистрация</h2>
              </div>
              <div className="login-input">
                <div className="login-input__wrapper">
                  <label className="login__label" for="email__input">
                    Почта:
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
                    ref={usernameRegistrationInputRef}
                  />
                </div>
                <div className="login-input__wrapper">
                  <label className="login__label" for="password__input">
                    Придумайте пароль:
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
                    ref={passwordRegistrationInputRef}
                  />
                </div>
              </div>
            </>
          )}

          {/* первое окно сброса с вводом почты */}
          {isRecovery && !isSentPassword && (
            <>
              <div className="login-title__wrapper">
                <h2 className="login__title">Восстановление пароля</h2>
              </div>
              <div className="login-input">
                <div className="login-input__wrapper">
                  <label className="login__label" for="email__input">
                    Почта:
                  </label>
                  {emailDirty && emailError && (
                    <div style={{ color: "red" }}>{emailError}</div>
                  )}
                  <input
                    onChange={(e) => emailHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    name="email"
                    className="login__input"
                    id="email__input"
                    type="email"
                    placeholder="absdefgh@mail.com"
                    ref={emailRecoveryInputRef}
                  />
                </div>
                <div className="login-input__wrapper">
                  <label className="login__label" for="password__input">
                    Придумайте пароль:
                  </label>
                  {passwordDirty && passwordError && (
                    <div style={{ color: "red" }}>{passwordError}</div>
                  )}
                  <input
                    onChange={(e) => passwordHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    name="password"
                    className="login__input"
                    id="password__input"
                    type="password"
                    placeholder="qwerty"
                    ref={passwordRecoveryInputRef}
                  />
                </div>
              </div>
            </>
          )}
          {/* второе окно сброса с вводом пароля */}
          {isRecovery && isSentPassword && (
            <>
              <div className="login-title__wrapper">
                <h2 className="login__title">Восстановление пароля</h2>
              </div>
              <div className="login-input">
                {/* поменять на логику сброса пароля пользователя*/}
                <div className="login-input__wrapper">
                  <label className="login__label" for="password__input">
                    Мы выслали код для восстановления доступа вам на почту.
                    Введите код из письма:
                  </label>
                  <input
                    onChange={(e) => passwordHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    name="password"
                    className="login__input"
                    id="password__input"
                    type="text"
                    placeholder="qwerty"
                    ref={resetCodeRecoveryInputRef}
                  />
                </div>
              </div>
            </>
          )}
          <button disabled={!formValid} className="login__submit" type="submit">
            Продолжить
          </button>
        </form>
        {!isRegistration && !isRecovery && (
          <div className="login__wrapper">
            <button
              className="login__button"
              type="button"
              onClick={() => {
                setIsRegistration(true);
              }}
            >
              Регистрация
            </button>
            <button
              className="login__button"
              type="button"
              onClick={() => {
                setIsRecovery(true);
              }}
            >
              Забыли пароль?
            </button>
          </div>
        )}
        {isRegistration && (
          <div className="login__wrapper">
            <button
              className="login__button"
              type="button"
              onClick={() => {
                setIsRegistration(false);
              }}
            >
              Вход
            </button>
            <button
              className="login__button"
              type="button"
              onClick={() => {
                setIsRegistration(false);
                setIsRecovery(true);
              }}
            >
              Забыли пароль?
            </button>
          </div>
        )}
        {isRecovery && (
          <div className="login__wrapper">
            <button
              className="login__button"
              type="button"
              onClick={() => {
                setIsRecovery(false);
              }}
            >
              Вход
            </button>
            <button
              className="login__button"
              type="button"
              onClick={() => {
                setIsRecovery(false);
                setIsRegistration(true);
              }}
            >
              Регистрация
            </button>
          </div>
        )}

        <a href="#" className="login__link">
          Политика обработки персональных данных
        </a>
      </Modal>
    </Background>
  );
};

export default Login;
