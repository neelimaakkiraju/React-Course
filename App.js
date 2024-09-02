import React from "react";
import ReactDOM from "react-dom/client";

const HeadComponent = () => {
  return (
    <div className="head-container">
      <div>
        <img
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-container">
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

const RestCard = (props) => {
  const {resName,cuisine} = props;
  
  return (
    <div  className="res-container"> 
      <div>
      <img src="https://cdn.pixabay.com/photo/2024/02/10/00/53/biryani-8563961_1280.jpg" className="card-img"/>

      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <p>4.5 Star Rating</p>
      <p>30 Minutes</p>
    </div>
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="search-bar">
        <h3>Search Bar</h3>
      </div>
      <div className="res-body">
        <RestCard resName="Meghana Foods" cuisine="South indian special"/>
        <RestCard resName="Fast Foods" cuisine="North indian special"/>
        
        
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <HeadComponent />
      <BodyComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
