import React from "react";
import heroBg from "../assets/hero-bg.jpeg";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span>Apni Dukan</span>
        </h1>
        <p className="hero-subtitle">
          Your premium dark-themed e-commerce store. Shop the best products today!
        </p>
        <Link to="/shop" className="hero-btn">Shop Now</Link>
      </div>
    </section>
  );
};

export default Hero;
