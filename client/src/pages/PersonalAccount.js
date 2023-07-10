import SecondBackground from "../components/SecondBackground"

const PersonalAccount = () => {
  return (
    <>
      <SecondBackground/>
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
