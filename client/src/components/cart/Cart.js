import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeProduct } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));

  const handleRemoveProduct = (id) => {
    console.log(id);
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = () => {
    if (products.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-left">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="cart-product">
                <div
                  onClick={() => handleRemoveProduct(product._id)}
                  className="cart-closeBtn"
                >
                  <AiOutlineClose />
                </div>
                <img
                  src={`${server}/images/${product.img}`}
                  alt=""
                  className="img"
                />
                <div className="cart-productData">
                  <h3 className="cart-title">{product.title}</h3>
                  <div className="cart-productAndQuantity">
                    <span className="cart-quantity">{product.quantity} x </span>
                    <span className="cart-price">
                      <span>$</span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="cart-noProducts">
              No products in the cart. Go shopping!
            </h1>
          )}
        </div>
        <div className="cart-right">
          <div className="cart-totalProductMsg">
            Total products: {products.length}
          </div>
          <div className="cart-subtotalCheckoutBtns">
            <span className="cart-subtotal">Subtotal: ${totalPrice}</span>
            <span
              onClick={handleOrder}
              disabled={products.length === 0}
              className="cart-orderNowBtn"
            >
              Order now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
