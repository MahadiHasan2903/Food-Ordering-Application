import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";
import img from "../../assets/womaneating.jpg";
import { register } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { server } from "../../server";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${server}/auth/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      dispatch(register(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="signUp-Container">
      <div className="signUp-Wrapper">
        <div className="signUp-LeftSide">
          <img src={img} alt="" className="signUp-leftImg" />
        </div>
        <div className="signUp-RightSide">
          <h2 className="signUp-title">Sign Up</h2>
          <form onSubmit={handleSignup} className="signUp-Form">
            <input
              type="text"
              placeholder="Type username"
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <button className="signUp-submitBtn">Sign Up</button>
            <p>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
          </form>
          {error && (
            <div className="signUp-errorMessage">
              Wrong credentials! Try different ones.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
