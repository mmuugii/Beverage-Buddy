// import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Map from "../components/Map";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position.coords);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    console.log(position);
  }, []);
  return (
    <div className="container">
      <Map position = {position}/>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
