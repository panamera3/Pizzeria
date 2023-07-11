// libraries
import { useEffect, useState } from "react";
// styles
import "./Catalog.css";
// components
import SecondBackground from "../../components/SecondBackground";
import Modal from "../../components/Modal";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductAmount, setSelectedProductAmount] = useState(1);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Карбонара",
        structure: "1, 2, 3",
        price: 420,
        image:
          "https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg",
      },
      {
        id: 2,
        name: "Сырная",
        structure: "4, 5, 6",
        price: 500,
        image:
          "https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg",
      },
      {
        id: 3,
        name: "DFFR",
        structure: "4132er23rf",
        price: 100,
        image:
          "https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg",
      },
      {
        id: 4,
        name: "Xtndf",
        structure: "adfsadf",
        price: 400,
        image:
          "https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg",
      },
    ]);
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
  };

  // при клике Добавить в корзину, selectedProductAmount будет количеством заказанной пиццы

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
              key={pizza.id}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1em",
              }}
            >
              <img src={pizza.image} alt="Пицца" />
              <h3>{pizza.name}</h3>
              <p style={{ margin: "1em 0" }}>{pizza.structure}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>{pizza.price} р.</h4>
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
          <h2 style={{ marginBottom: "1em" }}>{selectedProduct.name}</h2>
          <img
            src="https://www.tokyo-city.ru/images/interesno/Pitctca_-_natcionalnoe_italyanskoe_blyudo.jpg"
            alt=""
            width="100%"
          />
          <p style={{ margin: "1em 0" }}>{selectedProduct.structure}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button className="catalog-button">
              Добавить в корзину за{" "}
              {selectedProduct.price * selectedProductAmount} рублей
            </button>
            <div>
              <button
                //onClick={() => decreaseAmount(product)}
                className="cart-button-amount"
              >
                -
              </button>
              <span className="cart-product-amount">
                {selectedProductAmount}
              </span>
              <button
                //onClick={() => increaseAmount(product)}
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
