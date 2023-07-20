import React from "react";
import { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../../assets/womaneating2.jpg";
import { login } from "../../redux/authSlice";
import { server } from "../../server";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${server}/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      dispatch(login(data)); // {userInfo, token}
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="login-Container">
      <div className="login-Wrapper">
        <div className="login-LeftSide">
          <img src={img} alt="" className="login-leftImg" />
        </div>
        <div className="login-RightSide">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleLogin} className="login-Form">
            <input
              type="email"
              placeholder="Type email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-submitBtn">Login</button>
            <p>
              Don't have an account? <NavLink to="/register">Sign up</NavLink>
            </p>
          </form>
          {error && (
            <div className="login-errorMessage">
              Wrong credentials! Try different ones
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
