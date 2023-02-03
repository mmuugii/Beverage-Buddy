// import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Map from "../components/Map";
import React, { useState, useEffect } from "react";
// import HeroImage from "../components/Hero";

const Home = () => {
  return (
    <div className="container">
      {/* <HeroImage /> */}
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
