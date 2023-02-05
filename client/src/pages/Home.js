// import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

import React, { useState, useEffect } from "react";
import HeroImage from "../components/Hero";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav/>
      <HeroImage />
      <div className="container">
        <CategoryMenu />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
