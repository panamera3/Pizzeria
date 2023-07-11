// styles
import "./Restaurants.css";
// libraries
import { useEffect, useState } from "react";

const Restaurants = () => {
  // будет ли в бд список ресторанов?
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const allRestaurants = ["г. Екб", "г. Москва", "г. Санкт-Петербург"];
    setRestaurants(allRestaurants);
  }, []);

  return (
    <>
      <div className="restaurants-container">
        <div className="restaurants-text-container" >
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
