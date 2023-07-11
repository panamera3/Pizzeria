// components
import { useEffect } from "react";
import SecondBackground from "../../components/SecondBackground";
// libraries
import { useLocalStorage } from "react-use";
import { useNavigate } from "react-router-dom";

const PersonalAccount = () => {
  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage("user");

  useEffect(() => {
    console.log(user);
    // если пользователь не входил ранее, перенаправлять его на страницу входа
    if (!user.id) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <SecondBackground />
      {/* ниже писать код*/}
      <div>
        <p>Фамилия: {}</p>
        <p>Имя: {}</p>
        <p>Отчество: {}</p>
        <p>Дата рождения: {}</p>
        <p>Город: {}</p>
        <p>Адрес: {}</p>
        <p>Номер телефона: {}</p>
        <p>Электронная почта: {}</p>
        <p>Привязанные карты: {}</p>
        <p>История заказов: {}</p> {/* выпадающий список*/}
      </div>
    </>
  );
};

export default PersonalAccount;
