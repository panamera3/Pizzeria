import "./Login.css";

const Login = () => {
    return (
        <div className="login">
            <form className="login__form" method="post">
                <h2 className="login__title">Вход</h2>
                <div className="login-input__wrapper">
                    <label className="login__label" for="tel__input">Телефон:</label>
                    <input className="login__input" id="tel__input" type="tel" placeholder="+7 999 999 99 99"/>
                </div>
                <div className="login-input__wrapper">
                    <label className="login__label" for="password__input">Пароль:</label>
                    <input className="login__input" id="password__input" type="password" placeholder="qwerty"/>
                </div>
                <button className="login__submit" type="submit">Продолжить</button>
            </form>
            <div className="login__wrapper">
                <button className="login__button" type="button">Регистрация</button>
                <button className="login__button" type="button">Забыли пароль?</button>
            </div>
            <a href="#" className="login__link">Политика обработки персональных данных</a>
        </div>
    );
};

export default Login;