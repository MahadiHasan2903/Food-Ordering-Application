import React from "react";
import "./Newsletter.css";
import { AiOutlineSend } from "react-icons/ai";
import newsletterIllustration from "../../assets/get-newsletter-updates.svg";

const Newsletter = () => {
  return (
    <section id="contacts" className="newsletter-container">
      <div className="newsletter-wrapper">
        <h4 className="newsletter-subtitle">Get our latest offers</h4>
        <h2 className="newsletter-title">Newsletter</h2>
        <div className="newsletter-inputContainer">
          <input type="newsletter-text" placeholder="Enter email..." />
          <AiOutlineSend className="newsletter-sendIcon" />
        </div>
        <img
          src={newsletterIllustration}
          className="newsletter-illustration"
          alt=""
        />
      </div>
    </section>
  );
};

export default Newsletter;
