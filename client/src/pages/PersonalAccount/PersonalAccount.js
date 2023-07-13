// components
import SecondBackground from "../../components/SecondBackground";
// libraries
import { useLocalStorage } from "react-use";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

import "./PersonalAccount.css";
import Modal from "./Modal";

const PersonalAccount = () => {
  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage("user");
  const [userToken, setUserToken] = useLocalStorage("userToken");

  const userEmailInputRef = useRef();
  const [userEmail, setUserEmail] = useState("");
  const userNameInputRef = useRef();
  const [userName, setUserName] = useState("");
  const userBirthdateInputRef = useRef();
  const [userBirthdate, setUserBirthdate] = useState("");

  const [modalActive, setModalActive] = useState(false);
  const [addressModalActive, setAddressModalActive] = useState(false);

  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [bankCard, setBankCard] = useState([]);

  useEffect(() => {
    console.log(userToken);
    // если пользователь не входил ранее, перенаправлять его на страницу входа
    if (!userToken) {
      navigate(`/login`);
    }

    // данные пользователя
    axios({
      method: "get",
      url: `http://81.200.145.113:8000/user/current`,
      headers: { Authorization: `Bearer ${userToken}` },
    })
      .then((res) => {
        console.log("res.data current", res.data);
        setUser(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // все заказы
    axios({
      method: "get",
      url: `http://81.200.145.113:8000/user/order`,
      headers: { Authorization: `Bearer ${userToken}` },
    })
      .then((res) => {
        console.log("res.data", res.data);
        setOrders(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // все адреса
    axios({
      method: "get",
      url: `http://81.200.145.113:8000/user/address`,
      headers: { Authorization: `Bearer ${userToken}` },
    })
      .then((res) => {
        console.log("res.data address", res.data);
        setAddresses(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // все банковские карточки
    axios({
      method: "get",
      url: `http://81.200.145.113:8000/user/card`,
      headers: { Authorization: `Bearer ${userToken}` },
    })
      .then((res) => {
        console.log("res.data card", res.data);
        setBankCard(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log("orders", orders);
  }, [orders]);

  useEffect(() => {
    if (user) {
      setUserEmail(user.email);
      setUserName(user.first_name);
      setUserBirthdate(1);
    }
  }, [user]);

  useEffect(() => {
    console.log("ADDDDDD", addresses);
  }, [addresses]);

  const formatDate = (datetimeString) => {
    const date = new Date(datetimeString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}.${month}.${year}`;
  };

  const cardEncryption = (cardNumber) => {
    var firstEightDigits = cardNumber.slice(0, cardNumber.length - 4); // Получить первые 8 символов
    var transformedString = "";

    for (var i = 0; i < firstEightDigits.length; i++) {
      if (i % (cardNumber.length / 4) === 0 && i !== 0) {
        transformedString += " ";
      }
      transformedString += "*";
    }
    return `${transformedString} ${cardNumber.slice(-4)}`;
  };

  const exitAccount = () => {
    setUser({});
    setUserToken("");
    navigate("/");
  };

  return (
    <>
      <SecondBackground />
      {/* ниже писать код*/}
      <div className={"sections"}>
        <section>
          <h1 style={{ marginTop: 47, marginBottom: 27 }}>ЛИЧНЫЙ КАБИНЕТ</h1>

          <div className={"personal-info-block"}>
            <p>
              Email
              <svg
                className={"show-info"}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_14_254)">
                  <path
                    d="M10 7.5C9.75277 7.5 9.5111 7.42669 9.30554 7.28934C9.09998 7.15199 8.93976 6.95676 8.84515 6.72835C8.75054 6.49995 8.72579 6.24861 8.77402 6.00614C8.82225 5.76366 8.9413 5.54093 9.11612 5.36612C9.29093 5.1913 9.51366 5.07225 9.75614 5.02402C9.99861 4.97579 10.2499 5.00054 10.4784 5.09515C10.7068 5.18976 10.902 5.34998 11.0393 5.55554C11.1767 5.7611 11.25 6.00277 11.25 6.25C11.25 6.58152 11.1183 6.89946 10.8839 7.13388C10.6495 7.3683 10.3315 7.5 10 7.5Z"
                    fill="#444444"
                  />
                  <path
                    d="M10 18.125C8.39303 18.125 6.82214 17.6485 5.486 16.7557C4.14985 15.8629 3.10844 14.594 2.49348 13.1093C1.87852 11.6247 1.71762 9.99099 2.03112 8.4149C2.34463 6.8388 3.11846 5.39106 4.25476 4.25476C5.39106 3.11846 6.8388 2.34463 8.4149 2.03112C9.99099 1.71762 11.6247 1.87852 13.1093 2.49348C14.594 3.10844 15.8629 4.14985 16.7557 5.486C17.6485 6.82214 18.125 8.39303 18.125 10C18.125 12.1549 17.269 14.2215 15.7452 15.7452C14.2215 17.269 12.1549 18.125 10 18.125ZM10 3.125C8.64026 3.125 7.31105 3.52822 6.18046 4.28365C5.04987 5.03908 4.16868 6.11281 3.64833 7.36906C3.12798 8.6253 2.99183 10.0076 3.2571 11.3412C3.52238 12.6749 4.17716 13.8999 5.13864 14.8614C6.10013 15.8228 7.32514 16.4776 8.65876 16.7429C9.99238 17.0082 11.3747 16.872 12.631 16.3517C13.8872 15.8313 14.9609 14.9501 15.7164 13.8195C16.4718 12.689 16.875 11.3597 16.875 10C16.875 8.17664 16.1507 6.42796 14.8614 5.13864C13.5721 3.84933 11.8234 3.125 10 3.125Z"
                    fill="#444444"
                  />
                  <path
                    d="M10 15C9.66848 15 9.35054 14.8683 9.11612 14.6339C8.8817 14.3995 8.75 14.0815 8.75 13.75V10C8.75 9.66848 8.8817 9.35054 9.11612 9.11612C9.35054 8.8817 9.66848 8.75 10 8.75C10.3315 8.75 10.6495 8.8817 10.8839 9.11612C11.1183 9.35054 11.25 9.66848 11.25 10V13.75C11.25 14.0815 11.1183 14.3995 10.8839 14.6339C10.6495 14.8683 10.3315 15 10 15Z"
                    fill="#444444"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_254">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>

            <input
              className={"inputs"}
              value={userEmail}
              ref={userEmailInputRef}
            />
            <svg
              className={"edit-info"}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19.2687 6.03603L18.3847 6.92038L13.0807 1.61708L13.9646 0.732656C14.941 -0.243893 16.5245 -0.243893 17.501 0.732656L19.2687 2.50081C20.2438 3.47682 20.2438 5.05957 19.2687 6.03603ZM6.89309 16.642C6.649 16.8861 6.649 17.2814 6.89309 17.5255C7.13731 17.771 7.53285 17.771 7.77694 17.5255L17.501 7.80418L16.616 6.91976L6.89309 16.642ZM2.47311 12.223C2.22889 12.4673 2.22889 12.8625 2.47311 13.1067C2.71721 13.3509 3.11274 13.3509 3.35696 13.1067L13.0807 3.38465L12.1971 2.50081L2.47311 12.223ZM13.9635 4.26784L4.2406 13.9905C3.75237 14.4778 3.7536 15.27 4.2406 15.7582C4.72904 16.2465 5.51994 16.2487 6.00945 15.7569L15.7323 6.03603L13.9635 4.26784ZM6.00694 18.4071C5.70798 18.1078 5.56388 17.7284 5.51025 17.3376C5.38318 17.3572 5.25519 17.3755 5.12445 17.3755C4.45663 17.3755 3.82941 17.1144 3.35696 16.642C2.88451 16.1683 2.62451 15.542 2.62451 14.8742C2.62451 14.7525 2.64277 14.6338 2.65991 14.5155C2.25585 14.4605 1.88237 14.2835 1.58939 13.9905C1.56127 13.9626 1.55159 13.9247 1.52599 13.8941L0 20L6.08995 18.4754C6.06312 18.451 6.03274 18.4327 6.00694 18.4071Z"
                fill="black"
              />
            </svg>
          </div>

          <div className={"personal-info-block"}>
            <p>Имя</p>
            <input
              className={"inputs"}
              value={userName}
              ref={userNameInputRef}
            />
            <svg
              className={"edit-info"}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19.2687 6.03603L18.3847 6.92038L13.0807 1.61708L13.9646 0.732656C14.941 -0.243893 16.5245 -0.243893 17.501 0.732656L19.2687 2.50081C20.2438 3.47682 20.2438 5.05957 19.2687 6.03603ZM6.89309 16.642C6.649 16.8861 6.649 17.2814 6.89309 17.5255C7.13731 17.771 7.53285 17.771 7.77694 17.5255L17.501 7.80418L16.616 6.91976L6.89309 16.642ZM2.47311 12.223C2.22889 12.4673 2.22889 12.8625 2.47311 13.1067C2.71721 13.3509 3.11274 13.3509 3.35696 13.1067L13.0807 3.38465L12.1971 2.50081L2.47311 12.223ZM13.9635 4.26784L4.2406 13.9905C3.75237 14.4778 3.7536 15.27 4.2406 15.7582C4.72904 16.2465 5.51994 16.2487 6.00945 15.7569L15.7323 6.03603L13.9635 4.26784ZM6.00694 18.4071C5.70798 18.1078 5.56388 17.7284 5.51025 17.3376C5.38318 17.3572 5.25519 17.3755 5.12445 17.3755C4.45663 17.3755 3.82941 17.1144 3.35696 16.642C2.88451 16.1683 2.62451 15.542 2.62451 14.8742C2.62451 14.7525 2.64277 14.6338 2.65991 14.5155C2.25585 14.4605 1.88237 14.2835 1.58939 13.9905C1.56127 13.9626 1.55159 13.9247 1.52599 13.8941L0 20L6.08995 18.4754C6.06312 18.451 6.03274 18.4327 6.00694 18.4071Z"
                fill="black"
              />
            </svg>
          </div>

          <div className={"personal-info-block"}>
            <p>
              Дата рождения
              <svg
                className={"show-info"}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_14_254)">
                  <path
                    d="M10 7.5C9.75277 7.5 9.5111 7.42669 9.30554 7.28934C9.09998 7.15199 8.93976 6.95676 8.84515 6.72835C8.75054 6.49995 8.72579 6.24861 8.77402 6.00614C8.82225 5.76366 8.9413 5.54093 9.11612 5.36612C9.29093 5.1913 9.51366 5.07225 9.75614 5.02402C9.99861 4.97579 10.2499 5.00054 10.4784 5.09515C10.7068 5.18976 10.902 5.34998 11.0393 5.55554C11.1767 5.7611 11.25 6.00277 11.25 6.25C11.25 6.58152 11.1183 6.89946 10.8839 7.13388C10.6495 7.3683 10.3315 7.5 10 7.5Z"
                    fill="#444444"
                  />
                  <path
                    d="M10 18.125C8.39303 18.125 6.82214 17.6485 5.486 16.7557C4.14985 15.8629 3.10844 14.594 2.49348 13.1093C1.87852 11.6247 1.71762 9.99099 2.03112 8.4149C2.34463 6.8388 3.11846 5.39106 4.25476 4.25476C5.39106 3.11846 6.8388 2.34463 8.4149 2.03112C9.99099 1.71762 11.6247 1.87852 13.1093 2.49348C14.594 3.10844 15.8629 4.14985 16.7557 5.486C17.6485 6.82214 18.125 8.39303 18.125 10C18.125 12.1549 17.269 14.2215 15.7452 15.7452C14.2215 17.269 12.1549 18.125 10 18.125ZM10 3.125C8.64026 3.125 7.31105 3.52822 6.18046 4.28365C5.04987 5.03908 4.16868 6.11281 3.64833 7.36906C3.12798 8.6253 2.99183 10.0076 3.2571 11.3412C3.52238 12.6749 4.17716 13.8999 5.13864 14.8614C6.10013 15.8228 7.32514 16.4776 8.65876 16.7429C9.99238 17.0082 11.3747 16.872 12.631 16.3517C13.8872 15.8313 14.9609 14.9501 15.7164 13.8195C16.4718 12.689 16.875 11.3597 16.875 10C16.875 8.17664 16.1507 6.42796 14.8614 5.13864C13.5721 3.84933 11.8234 3.125 10 3.125Z"
                    fill="#444444"
                  />
                  <path
                    d="M10 15C9.66848 15 9.35054 14.8683 9.11612 14.6339C8.8817 14.3995 8.75 14.0815 8.75 13.75V10C8.75 9.66848 8.8817 9.35054 9.11612 9.11612C9.35054 8.8817 9.66848 8.75 10 8.75C10.3315 8.75 10.6495 8.8817 10.8839 9.11612C11.1183 9.35054 11.25 9.66848 11.25 10V13.75C11.25 14.0815 11.1183 14.3995 10.8839 14.6339C10.6495 14.8683 10.3315 15 10 15Z"
                    fill="#444444"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_254">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <input className={"inputs"} />
          </div>

          <div style={{ marginBottom: 29 }}>
            <input className={"check-box"} type={"checkbox"} />Я хочу получать
            SMS-рассылки для участия в акциях и розыгрышах.
          </div>

          <div className={"exit-from-acc-btn"} onClick={exitAccount}>
            Выйти из аккаунта
          </div>
        </section>

        <section>
          <div style={{ marginTop: 75 }} className={"blocks"}>
            История заказов
            {orders.map((order) => (
              <div className={"order"}>
                <p>{order.address}</p>
                <div>
                  {formatDate(order.created_at)}, количество позиций - 3, итого
                  - {order.cost} Р
                </div>
                <div className={"blocks-btn"}>Подробнее</div>
              </div>
            ))}
            <div>
              <div className={"pages"}>
                <div className={"switcher"}>&lt;</div>
                <div className={"page"}>1</div>
                <div className={"switcher"}>&gt;</div>
              </div>
            </div>
          </div>

          <div className={"blocks"}>
            Адреса доставки
            {addresses.map((address) => (
              <div className={"addresses"}>
                <div>{address.address}</div>
                <div style={{ display: "flex" }}>
                  <div className={"blocks-btn"}>Изменить</div>
                  <div className={"blocks-btn"}>Удалить</div>
                </div>
              </div>
            ))}
            <div className={"btns"}>
              <div className={"pages"}>
                <div className={"switcher"}>&lt;</div>
                <div className={"page"}>1</div>
                <div className={"switcher"}>&gt;</div>
              </div>
              <div
                className={"add-btn"}
                onClick={() => setAddressModalActive(true)}
              >
                Добавить
              </div>
              <Modal
                active={addressModalActive}
                setActive={setAddressModalActive}
              >
                <div className={"add-card"}>
                  <section>
                    <h1>Добавление адреса</h1>
                    <div className={"card-data-item"}>
                      Адрес* :
                      <input style={{ width: 488 }} placeholder={"Адрес"} />
                    </div>
                    <div className={"card-data"}>
                      <div className={"card-data-item"}>
                        <p>Квартира / Офис* :</p>
                        <input
                          style={{ width: 159 }}
                          placeholder={"Квартира / Офис"}
                        />
                      </div>
                      <div className={"card-data-item"}>
                        <p>Подъезд:</p>
                        <input style={{ width: 104 }} placeholder={"Подъезд"} />
                      </div>
                      <div className={"card-data-item"}>
                        <p>Этаж:</p>
                        <input style={{ width: 78 }} placeholder={"Этаж"} />
                      </div>
                      <div className={"card-data-item"}>
                        <p>Домофон:</p>
                        <input style={{ width: 78 }} placeholder={"Есть"} />
                      </div>
                    </div>
                  </section>
                  <section className={"add-card-btns"}>
                    <div
                      className={"back-to-pa-btn"}
                      onClick={() => setAddressModalActive(false)}
                    >
                      Вернуться в личный кабинет
                    </div>
                    <div className={"add-address-btn"}>Добавить адрес</div>
                  </section>
                </div>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <a
                    href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps"
                    style={{
                      color: "#eee",
                      fontSize: 12,
                      position: "absolute",
                      top: 0,
                    }}
                  >
                    Екатеринбург
                  </a>
                  <a
                    href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.597465%2C56.838011&utm_medium=mapframe&utm_source=maps&z=12"
                    style={{
                      color: "#eee",
                      fontSize: 12,
                      position: "absolute",
                      top: 14,
                    }}
                  >
                    Яндекс Карты — транспорт, навигация, поиск мест
                  </a>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=60.597465%2C56.838011&z=12"
                    width="912"
                    height="400"
                    frameBorder="1"
                    allowFullScreen="true"
                    style={{ position: "relative" }}
                  ></iframe>
                </div>
                <p style={{ fontSize: 17, fontWeight: 600 }}>
                  * поля должны быть обязательно заполнены
                </p>
              </Modal>
            </div>
          </div>

          <div className={"blocks"}>
            Способы оплаты
            {bankCard.map((card) => (
              <div className={"creditCards"}>
                <div>
                  Банковская карта, номер {cardEncryption(card.card_number)}
                </div>
                <div style={{ display: "flex" }}>
                  <div className={"blocks-btn"}>Изменить</div>
                  <div className={"blocks-btn"}>Удалить</div>
                </div>
              </div>
            ))}
            <div className={"btns"}>
              <div className={"pages"}>
                <div className={"switcher"}>&lt;</div>
                <div className={"page"}>1</div>
                <div className={"switcher"}>&gt;</div>
              </div>
              <div className={"add-btn"} onClick={() => setModalActive(true)}>
                Добавить
              </div>
              <Modal active={modalActive} setActive={setModalActive}>
                <div className={"add-card"}>
                  <section>
                    <h1>Добавление способа оплаты</h1>
                    <div className={"card-data"}>
                      <div className={"card-data-item"}>
                        <p>Номер карты* :</p>
                        <input style={{ width: 210 }} placeholder={"Номер"} />
                      </div>
                      <div className={"card-data-item"}>
                        <p>ММ/ГГ* :</p>
                        <input style={{ width: 92 }} placeholder={"ММ/ГГ"} />
                      </div>
                      <div className={"card-data-item"}>
                        <p>CVV-код* :</p>
                        <input style={{ width: 92 }} placeholder={"СVV"} />
                      </div>
                    </div>

                    <p style={{ fontSize: 17, fontWeight: 600 }}>
                      * поля должны быть обязательно заполнены
                    </p>
                  </section>
                  <section className={"add-card-btns"}>
                    <div
                      className={"back-to-pa-btn"}
                      onClick={() => setModalActive(false)}
                    >
                      Вернуться в личный кабинет
                    </div>
                    <div className={"add-card-btn"}>Добавить карту</div>
                  </section>
                </div>
              </Modal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PersonalAccount;
