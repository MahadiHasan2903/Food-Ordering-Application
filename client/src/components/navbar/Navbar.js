import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-left">
          <NavLink to="/" className="nav-title">
            MH Slice Delivery
          </NavLink>
        </div>
        <div className="nav-center">
          <ul className="nav-list">
            <li className="nav-listItem">
              <a href="/">Home</a>
            </li>
            <li className="nav-listItem">
              <a href="#contacts">Contacts</a>
            </li>
            <li className="nav-listItem">
              <a href="#foods">Foods</a>
            </li>
            <li className="nav-listItem">
              <a href="#faq">FAQ</a>
            </li>
            <li className="nav-listItem">
              <NavLink to="/create">Create</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <NavLink to="/login" className="nav-userIcon">
            <AiOutlineUser className="nav-userIcon" />
          </NavLink>

          <NavLink to="/cart" className="nav-cartContainer">
            <AiOutlineShoppingCart className="nav-cartIcon" />
            <div className="nav-cartQuantity">{products.length}</div>
          </NavLink>
          <FiLogOut onClick={handleLogout} className="nav-logout-icon" />
          <button onClick={handleLogout} className="nav-logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
