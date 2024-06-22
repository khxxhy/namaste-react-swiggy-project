import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assests/My new design.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Search</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resName, cuisine} = props
  return (
    <div className="res-big-card">
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ajwonvkychxzkbvyq8dv"
        ></img>
        <div className="res-info">
          <h3>{props.resName}</h3>
          <p>{props.cuisine}</p>
          <p>4.1 Rating</p>
          <p>35 minutes</p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard  resName="Kishori" cuisine="North Indian, South Indian"/>
        <RestaurantCard resName="Sneh" cuisine="Indian"/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
