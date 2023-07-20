import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./FoodCatalog.css";
import { server } from "../../server";

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndpoint = location.pathname.split("/")[2];
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async () => {
      try {
        const res = await fetch(`${server}/product?category=${foodEndpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data from the server");
        }

        const data = await res.json();
        console.log(data);
        setFilteredFoods(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setFilteredFoods([]); // Set empty array in case of an error
      }
    };

    fetchFoodType();
  }, [foodEndpoint, token]);

  // Handle loading state
  if (filteredFoods.length === 0) {
    return (
      <div className="food-catalog-container">
        <div className="food-catalog-wrapper">
          <h1 className="food-catalog-noQuantity">
            {filteredFoods.length === 0
              ? `No ${foodEndpoint} right now`
              : "Loading..."}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="food-catalog-container">
      <div className="food-catalog-wrapper">
        <h2 className="food-catalog-title">
          The best {foodEndpoint} in the region
        </h2>
        <div className="food-catalog-foods">
          {filteredFoods.map((f) => (
            <NavLink
              to={`/food/${f._id}`}
              key={f._id}
              className="food-catalog-food"
            >
              <div className="food-catalog-imgContainer">
                <img
                  src={`${server}/images/${f?.img}`}
                  alt="foodImg"
                  className="food-catalog-foodImg"
                />
              </div>
              <div className="food-catalog-foodDetails">
                <h4 className="food-catalog-foodTitle">{f?.title}</h4>
                <span className="food-catalog-price">
                  <span>$</span> {f?.price}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCatalog;
