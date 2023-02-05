import React from "react";
import heroImage from "../../assets/golf-drink.jpg";
import './hero.css';

function HeroImage() {
  return (
    <div>
      <img
        src={heroImage}
        alt="hero"
        style={{
          width: "100%",
          height: "80vh",
          objectFit: "cover",
          borderRadius: 0, 
        }}
        className="hero-image"
      />
      <div className="hero-text">
        <h1>
            Welcome to Clubhouse Caddie
        </h1>
        <p>
            by Muugii, Jeremy, Jackson & Jacob
        </p>
      </div>
    </div>
  );
}

export default HeroImage;
