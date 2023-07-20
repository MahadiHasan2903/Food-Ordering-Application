import React from "react";
import "./Hero.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import manEating from "../../assets/man-having-his-meal.svg";

const Hero = () => {
  return (
    <section style={{ height: "200vh" }} id="home" className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-left">
          <h2 className="hero-title">Do you crave delicious food</h2>
          <p className="hero-firstMsg">
            But going out to take <span>food costs time....</span>
          </p>
          <p className="hero-secondMsg">
            Why not order <span>pizza</span> or something <br />{" "}
            <span>delicious </span>
            from our restaurnt
          </p>
          <p className="hero-desc">
            Our restaurant always puts the client above. They are our single
            most important thing for our business.
          </p>
          <div className="hero-buttons">
            <button className="hero-buttonOrder">Order now!</button>
            <button className="hero-buttonSee">
              <a href="#foods">
                See what's available <AiOutlineArrowDown />{" "}
              </a>
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={manEating} alt="" className="hero-manEatingImg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
