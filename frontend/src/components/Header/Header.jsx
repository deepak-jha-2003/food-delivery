// frontend/src/components/Header/Header.jsx
import React from "react";
import "./Header.css";
import { placeholderImages } from "../../assets/assets";

function Header() {
  const handleExploreClick = () => {
    const exploreSection = document.getElementById('explore-services');
    if (exploreSection) {
      exploreSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="header" style={{ backgroundImage: `url(${placeholderImages.header_img})` }}>
      <div className="header-contents">
        <h2>Your Trusted Home Service Partner</h2>
        <p>
          From professional cleaning to cooking, babysitting to security services - 
          Ghar Sathi brings trusted professionals right to your doorstep. 
          Experience convenience and reliability with our comprehensive home services.
        </p>
        <button onClick={handleExploreClick}>Explore Services</button>
      </div>
    </div>
  );
}

export default Header;