// libraries
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
// components
import Background from "../../components/Background";
import Modal from "../../components/Modal";
// styles
import "./Cart.css";
// images
import logoWhite from "../../images/logo-white.svg";

const Cart = () => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user");

  const [products, setProducts] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // проверять, залогинен ли юзер
    const allProducts = [
      { id: 1, name: "Пепперони", description: "exmaple", amount: 2 },
      { id: 2, name: "Карбонара", description: "exmaple" },
      { id: 1, name: "Пепперони", description: "exmaple" },
      { id: 2, name: "Карбонара", description: "exmaple" },
      { id: 1, name: "Пепперони", description: "exmaple" },
      { id: 2, name: "Карбонара", description: "exmaple" },
      { id: 1, name: "Пепперони", description: "exmaple" },
      { id: 2, name: "Карбонара", description: "exmaple" },
    ];
    setProducts(allProducts);
  }, []);

  const onCloseCart = () => {
    navigate("/");
  };

  const applyPromocode = () => {};

  const decreaseAmount = (product) => {
    // менять кол-во внутри списка products
  };

  const increaseAmount = (product) => {
    // менять кол-во внутри списка products
  };

  const makeOrder = () => {
    console.log(user);
    if (!user.id) {
      setShowTooltip(true);
      return;
    }
    console.log(3246789);
    /* заносить данные о том, что есть в корзине, в локалстор */
    /* перенаправлять на страницу оформления заказа */
    navigate("/order");
  };

  return (
    <>
      <Background>
        <img
          src={logoWhite}
          width="40%"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
          }}
          alt=""
        />
        <div style={{ height: "36em" }} />
        <Modal
          isOpen={true}
          onClose={onCloseCart}
          width="30em"
          height="60%"
          stylePosition={{ right: "0", position: "absolute" }}
        >
          <div className="cart-container">
            <h2 style={{ fontSize: "30px" }}>Ваши товары</h2>
            <p className="cart-amount-order">
              Количество позиций в заказе: {products.length}
            </p>{" "}
            {/* пересчитывать количесвто, исходя из количества одного продукта */}
            {products.map((product) => (
              <div className="cart-product-card">
                <div className="cart-product-info">
                  <img
                    src="https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg" // поменять на изображение пиццы
                    alt=""
                    width="30%"
                  />
                  <div className="cart-product-text">
                    <p>{product.name}</p>
                    <p className="cart-product-description">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="cart-horizontal-line" />
                <div className="cart-product-price">
                  <p>{product.price * product.count} Р</p>

                  <div>
                    <button
                      onClick={() => decreaseAmount(product)}
                      className="cart-button-amount"
                    >
                      -
                    </button>
                    <input
                      id="cart-product-amount"
                      type="number"
                      min={1}
                      max={100}
                      size={1}
                      value={product.amount}
                    />
                    {/* поменять на input */}
                    <button
                      onClick={() => increaseAmount(product)}
                      className="cart-button-amount"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-order-container">
            <div>
              <input
                placeholder="Промокод"
                className="cart-input cart-element"
              />
              <button
                className="cart-button cart-element"
                onClick={applyPromocode}
              >
                Применить
              </button>
            </div>
            <div className="cart-price-container">
              <div className="cart-price-line">
                <p>{products.length} товара</p>
                <p>{1} Р</p>
              </div>
              <div className="cart-price-line">
                <p>Скидка</p>
                <p>{1} Р</p>
              </div>
              <div className="cart-price-line">
                <p>Доставка</p>
                <p>{1} Р</p>
              </div>
              <div className="cart-price-line">
                <p>Итого</p>
                <p>{1} Р</p>
              </div>
            </div>

            <div>
              {showTooltip && (
                <div className="tooltip">
                  Чтобы сделать заказ, войдите в личный кабинет пользователя
                </div>
              )}
              <button
                className="cart-button cart-element"
                style={{ width: "100%" }}
                onClick={makeOrder}
              >
                Перейти к оформлению заказа
              </button>
            </div>
          </div>
        </Modal>
      </Background>
    </>
  );
};

export default Cart;
