// styles
import "./Restaurants.css";
// libraries
import { useEffect, useState } from "react";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const allRestaurants = [
      "г. Екатеринбург, ул. Мира д. 32",
      "г. Екатеринбург, ул. Мира д. 18",
      "г. Екатеринбург, ул. Мира д. 16",
    ];
    setRestaurants(allRestaurants);
  }, []);

  return (
    <>
      <div className="restaurants-container">
        <div className="restaurants-text-container">
          <h2>Наши рестораны</h2>
          <div className="restaurants-horizontal-line" />
          <div>
            {restaurants.map((restaurant) => (
              <p style={{ marginBottom: "1em" }}>{restaurant}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurants;
