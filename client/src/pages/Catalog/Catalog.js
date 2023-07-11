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
    ]);
  }, []);

  const openModalCard = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModalCard = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SecondBackground />
      <div className="catalog-container">
        <h2>Меню</h2>
        <div className="catalog-pizzas">
          {products.map((pizza) => (
            <div
              key={pizza.id}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 1em",
              }}
            >
              <img src={pizza.image} />
              <h3>{pizza.name}</h3>
              <p>{pizza.structure}</p>
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
        <Modal isOpen={isModalOpen} onClose={closeModalCard} width="40em" height="20em">
          <h2>{selectedProduct.name}</h2>
          <p>fighjk</p>
        </Modal>
      )}
    </>
  );
};

export default Catalog;
