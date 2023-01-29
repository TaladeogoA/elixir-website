import React from "react";
import Navbar from "../components/Navbar";
import ProductsHero from "../UI/ProductsHero";
import SkinConcerns from "../UI/SkinConcerns";
import Factors from "../UI/Factors";
import WhatYouGet from "../UI/WhatYouGet";
import NaturalIngredients from "../UI/NaturalIngredients";
import Footer from "../components/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

const Home = () => {
  const ref = useRef(null);
  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Navbar data-scroll-section />
        <ProductsHero data-scroll-section />
        <WhatYouGet data-scroll-section />
        <SkinConcerns data-scroll-section />
        <Factors data-scroll-section />
        <NaturalIngredients data-scroll-section />
        <Footer data-scroll-section />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default Home;
