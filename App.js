import React from "react";
import ReactDOM from "react-dom/client";

const HeadComponent = () => {
  return (
    <div className="head-container">
      <img
        src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        alt="Logo"
        className="logo"
      />
      
      <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Contact us</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
      </div>
      
    
      
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComponent/>);
