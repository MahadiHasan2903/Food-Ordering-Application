import React, { useState, useEffect } from "react";
import "./FoodDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProduct } from "../../redux/cartSlice";
import { server } from "../../server";

const FoodDetails = () => {
  const [foodDetails, setFoodsDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);
  console.log(products);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const res = await fetch(`${server}/product/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setFoodsDetails(data);
    };
    fetchFoodDetails();
  }, [id]);

  const changeQuantity = (command) => {
    if (command === "dec") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else if (command === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  return (
    <div className="food-details-container">
      <div className="food-details-wrapper">
        <div className="food-details-left">
          <img src={`${server}/images/${foodDetails?.img}`} alt="foodDetails" />
        </div>
        <div className="food-details-right">
          <h2 className="food-details-title">{foodDetails?.title}</h2>
          <div className="food-details-price">
            Price: <span>$</span> {foodDetails?.price}
          </div>
          <div className="food-details-quantity">
            <button
              disabled={quantity === 1}
              onClick={() => changeQuantity("dec")}
            >
              -
            </button>
            <span className="food-details-quantityNumber">{quantity}</span>
            <button onClick={() => changeQuantity("inc")}>+</button>
          </div>
          <div className="food-details-category">
            <h3>Category: </h3>
            <span className="food-details-categoryName">
              {foodDetails?.category}
            </span>
          </div>
          <div className="food-details-productDesc">
            <div>Description: </div>
            <p>
              {foodDetails?.desc?.length > 50
                ? `${foodDetails?.desc}`.slice(0, 50)
                : foodDetails?.desc}
            </p>
          </div>
          <button onClick={addToCart} className="food-details-addToCart">
            Add To Cart <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
