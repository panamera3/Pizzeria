// libraries
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import axios from "axios";
// styles
import "./Catalog.css";
// components
import SecondBackground from "../../components/SecondBackground";
import Modal from "../../components/Modal";

const Catalog = () => {
  const [cartProducts, setCartProducts] = useLocalStorage("cartProducts");

  const [products, setProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductAmount, setSelectedProductAmount] = useState(1);

  useEffect(() => {
    /*
    axios.get("http://81.200.145.113:8000/product/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
    */

    setProducts([
      {
        id: 1,
        title: "Карбонара",
        structure: "Моцарелла, соус томатный, бекон, пармезан, тесто, мука",
        cost: 420,
        image:
          "https://cdn.dodostatic.net/static/Img/Products/9f54fa5d2d204f5fa70579e2e1982d03_584x584.jpeg",
      },
      {
        id: 2,
        title: "Сырная",
        structure:
          "Моцарелла, соус сливочный, тесто, мука (для раскатки теста), сыр пармезан зачищенный, сыр Дор Блю, оливковое масло",
        cost: 440,
        image:
          "https://cdn.dodostatic.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_584x584.jpeg",
      },
      {
        id: 3,
        title: "Четыре сезона",
        structure:
          "Моцарелла, ветчина, ананас, сервилат, пепперони, курица, пармезан, томаты, шампиньоны, томатный соус, сливочный соус, итальянские травы, зеленый лук, тесто",
        cost: 495,
        image:
          "https://cdn.dodostatic.net/static/Img/Products/d51fa179760041f0831e63fa21c39402_584x584.jpeg",
      },
      {
        id: 4,
        title: "Пепперони Фреш",
        structure:
          "Тесто, мука, томатный соус, томаты, ветчина, шампиньоны, моцарелла, пармезан, оливковое масло",
        cost: 605,
        image:
          "https://cdn.dodostatic.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_584x584.jpeg",
      },
      {
        id: 5,
        title: "Ветчина и грибы",
        structure:
          "Тесто, мука, томатный соус, томаты, пепперони, моцарелла, пармезан, оливковое масло",
        cost: 475,
        image:
          "https://cdn.dodostatic.net/static/Img/Products/0c24c7c195574d7cae45c889bd8043fc_584x584.jpeg",
      },
    ]);

    //setCartProducts([]);
  }, []);

  useEffect(() => {
    if (selectedProductAmount < 1) {
      setSelectedProductAmount(1);
    }
  }, [selectedProductAmount]);

  const openModalCard = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModalCard = () => {
    setModalOpen(false);
    setSelectedProductAmount(1);
  };

  const decreaseAmount = (product) => {
    setSelectedProductAmount(selectedProductAmount - 1);
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, amount: selectedProductAmount } : item
    );
    setProducts(updatedProducts);
  };

  const increaseAmount = (product) => {
    setSelectedProductAmount(selectedProductAmount + 1);
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, amount: selectedProductAmount } : item
    );
    setProducts(updatedProducts);
  };

  const addOrder = (product) => {
    const productWithAmount = { ...product, amount: selectedProductAmount };
    let allCartProducts = [];
    if (!cartProducts.length) {
      allCartProducts = [productWithAmount];
    } else {
      if (cartProducts.some((p) => p.id === productWithAmount.id)) {
        allCartProducts = cartProducts.map((p) =>
          p.id === product.id ? { ...p, amount: selectedProductAmount } : p
        );
      } else {
        allCartProducts = [...cartProducts, productWithAmount];
      }
    }
    setCartProducts(allCartProducts);
    closeModalCard();
  };

  return (
    <>
      <SecondBackground />
      <div className="catalog-container">
        <h2 style={{ marginBottom: "2em", textTransform: "uppercase" }}>
          Меню
        </h2>
        <div className="catalog-pizzas">
          {products.map((pizza) => (
            <div
              className="catalog-pizza"
              key={pizza.id}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1em",
              }}
            >
              <img src={pizza.image} alt="Пицца" width="200em" />
              <h3
                style={{ paddingLeft: "0", marginLeft: "0", marginTop: "1em" }}
              >
                {pizza.title}
              </h3>
              <p style={{ margin: "1em 0" }}>{pizza.structure}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4>{pizza.cost} р.</h4>
                <button
                  onClick={() => openModalCard(pizza)}
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    backgroundColor: "#d31c29",
                    color: "#ffffff",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "10px",
                    padding: "0.5em 1em",
                    cursor: "pointer",
                    transition: "0.5s",
                  }}
                >
                  Выбрать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModalCard}
          width="30em"
          stylePosition={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginBottom: "1em" }}>{selectedProduct.title}</h2>
          <img src={selectedProduct.image} alt="" width="100%" />
          <p style={{ margin: "1em 0" }}>{selectedProduct.structure}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              className="catalog-button"
              onClick={() => addOrder(selectedProduct)}
            >
              Добавить в корзину за{" "}
              {selectedProduct.cost * selectedProductAmount} рублей
            </button>
            <div>
              <button
                onClick={() => decreaseAmount(selectedProduct)}
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
                value={selectedProductAmount}
              />
              <button
                onClick={() => increaseAmount(selectedProduct)}
                className="cart-button-amount"
              >
                +
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Catalog;
