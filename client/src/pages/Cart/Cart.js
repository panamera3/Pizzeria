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
import Exit from "../../images/Exit.svg";

const Cart = () => {
  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage("user");
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");
  const [orderInfo, setOrderInfo] = useLocalStorage("orderInfo");

  const [products, setProducts] = useState([{}]);
  const [showTooltip, setShowTooltip] = useState(false);

  const [productsAmount, setProductsAmount] = useState(0);
  const [productsPrice, setProductsPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setProducts(cartProducts);
  }, []);

  useEffect(() => {
    setProductsAmount(
      products.reduce((total, product) => total + product.amount, 0)
    );
    setProductsPrice(
      products.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    );
  }, [products]);

  useEffect(() => {
    setProducts(cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    setDeliveryPrice(
      products.length > 0 ? (productsPrice >= 500 ? 0 : 200) : 0
    );
  }, [productsPrice]);

  useEffect(() => {
    setTotalPrice(productsPrice + deliveryPrice - discountPrice);
  }, [productsPrice, deliveryPrice, discountPrice]);

  const onCloseCart = () => {
    navigate(`${process.env.PUBLIC_URL}/#/`);
  };

  const applyPromocode = () => {};

  const decreaseAmount = (product) => {
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, amount: product.amount - 1 } : item
    );
    setProducts(updatedProducts);
    setCartProducts(updatedProducts);
  };

  const increaseAmount = (product) => {
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, amount: product.amount + 1 } : item
    );
    setProducts(updatedProducts);
    setCartProducts(updatedProducts);
  };

  const deleteProduct = (product) => {
    const cartProductsWithoutDeleted = cartProducts.filter(
      (p) => p.id !== product.id
    );
    setCartProducts(cartProductsWithoutDeleted);
  };

  const makeOrder = () => {
    console.log(user);
    if (!user.id) {
      setShowTooltip(true); // показывать подсказку о необходимости входа
      return;
    }

    console.log(3246789);
    setOrderInfo({
      productsPrice: productsPrice - discountPrice,
      deliveryPrice: deliveryPrice,
      totalPrice: totalPrice,
    });
    navigate(`${process.env.PUBLIC_URL}/#/order`);
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
            transform: "translate(-50%, -55%)",
          }}
          alt=""
        />
        <div style={{ height: "38em" }} />
        <Modal
          isOpen={true}
          onClose={onCloseCart}
          width="30em"
          height="55%"
          stylePosition={{ right: "0", position: "absolute" }}
        >
          <div className="cart-container">
            <div
              style={{
                position: "fixed",
                top: "0",
                width: "30em",
                backgroundColor: "#ffffff",
                zIndex: "50",
              }}
            >
              <h2 style={{ fontSize: "30px" }}>Ваши товары</h2>
              <p className="cart-amount-order">
                Количество позиций в заказе: {productsAmount}
              </p>
              <div style={{ borderBottom: "1px solid black", width: "29em" }} />
            </div>
            <div style={{ marginTop: "6em" }}>
              {products.map((product) => (
                <div className="cart-product-card">
                  <div>
                    <img
                      className="cart-delete"
                      src={Exit}
                      alt="Удалить товар"
                      onClick={() => deleteProduct(product)}
                      style={{
                        display: "block",
                        width: "20px",
                        float: "right",
                        cursor: "pointer",
                        position: "relative",
                        top: "0",
                        right: "0",
                      }}
                    />
                  </div>
                  <div className="cart-product-info">
                    <img src={product.image} alt="" width="30%" />
                    <div className="cart-product-text">
                      <p>{product.title}</p>
                      <p className="cart-product-description">
                        Традиционное тесто, 25 см
                      </p>
                    </div>
                  </div>
                  <div className="cart-horizontal-line" />
                  <div className="cart-product-price">
                    <p>{product.cost * product.amount} Р</p>

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
                <p>{productsAmount} товара</p>
                <p>{productsPrice} Р</p>
              </div>
              <div className="cart-price-line">
                <p>Скидка</p>
                <p>{discountPrice} Р</p>
              </div>
              <div className="cart-price-line">
                <p>Доставка</p>
                <p>{deliveryPrice} Р</p>
              </div>
              <div className="cart-price-line">
                <p>Итого</p>
                <p>{totalPrice} Р</p>
              </div>
            </div>

            <div>
              {showTooltip && (
                <div className="tooltip">
                  Чтобы сделать заказ, войдите в аккаунт
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
