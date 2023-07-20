import React from "react";
import "./Foods.css";
import { foodTypes } from "../../data/Data";
import { NavLink } from "react-router-dom";

const Foods = () => {
  return (
    <section id="foods" className="foods-container">
      <div className="foods-wrapper">
        <h4 className="foods-subtitle">What we offer</h4>
        <h2 className="foods-title">Best meals in the city</h2>
        <div className="foods-foods">
          {foodTypes.map((foodType) => (
            <NavLink
              to={`/foods/${foodType.name}`}
              key={foodType.id}
              className="foods-food"
            >
              <h4>{foodType.name}</h4>
              <div className="foods-imgContainer">
                <img src={foodType.img} alt="" />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foods;
