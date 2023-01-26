import React from "react";
import Navbar from "../components/Navbar";
import ProductsHero from "../UI/ProductsHero";
import SkinConcerns from "../UI/SkinConcerns";
import Factors from "../UI/Factors";
import WhatYouGet from "../UI/WhatYouGet";

const Home = () => {
  return (
    <>
      <Navbar />
      <ProductsHero />
      <WhatYouGet />
      <SkinConcerns />
      <Factors />
    </>
  );
};

export default Home;
