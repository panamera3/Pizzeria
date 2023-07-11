// libraries
import { useEffect, useState } from "react";
// components
import Background from "../../components/Background";
import Modal from "../../components/Modal";
// styles
import "./Cart.css";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // проверять, залогинен ли юзер
    const allProducts = [
      { id: 1, name: "Пепперони", description: "exmaple" },
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
    /*перенаправлять на главную страницу*/
  };

  const applyPromocode = () => {};

  return (
    <>
      <Background>
        <Modal
          isOpen={true}
          onClose={onCloseCart}
          width="30em"
          height="100%"
          stylePosition={{ right: "0", position: "absolute" }}
        >
          <div className="cart-container">
            <h2>Ваши товары</h2>
            <p>Количество позиций в заказе: {products.length}</p>
            {products.map((product) => (
              <div className="cart-product-card">
                <div className="cart-product-info">
                  <img
                    src="https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg"
                    alt=""
                    width="40%"
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
                  <p>{product.price * product.count}</p>
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
            <button className="cart-button cart-element">
              Перейти к оформлению заказа
            </button>
          </div>
        </Modal>
      </Background>
    </>
  );
};

export default Cart;
