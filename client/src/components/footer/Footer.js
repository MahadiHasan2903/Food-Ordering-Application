import React from "react";
import "./Footer.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section id="faq" className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-col">
          <h2 className="footer-title">Working days</h2>
          <ul className="footer-list">
            <li>Monday - Friday</li>
            <li className="footer-workingTime">08:00 - 22:00</li>
            <li>Saturday</li>
            <li className="footer-workingTime">08:00 - 20:00</li>
          </ul>
        </div>
        <div className="footer-col">
          <h2 className="footer-title">Newsletter</h2>
          <ul className="footer-list">
            <li>Subscribe to our newsletter</li>
            <li>Receive the latest meals</li>
            <li>Get the menu with promos</li>
            <li>Everything weekly!</li>
          </ul>
        </div>
        <div className="footer-col">
          <h2 className="footer-title">Social Media</h2>
          <ul className="footer-iconList">
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
