import React from "react";
import hands from "../assets/images/pbanner.png";
import hero from "../assets/images/hero-bg.jpeg";
import styled from "styled-components";

const ProductsHero = () => {
  return (
    <Hero>
      <h1>
        <span>*YOUR</span> <br />
        <span>PERSONALISED</span> <br />
        <span>MIRACLE SERUM</span> <br />
      </h1>

      <div className="hands-container">
        <img src={hands} alt="Hand holding serum" />
      </div>
    </Hero>
  );
};

export default ProductsHero;

const Hero = styled.section`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: calc(100%-2px);
  position: relative;
  border: solid 1px rgba(0, 0, 0, 0);

  h1 {
    font-size: 8vw;
    font-weight: 200;
    color: rgb(27, 38, 44);
    text-align: center;

    span:nth-child(1) {
      position: relative;
      right: 2rem;
    }
  }

  .hands-container {
    max-height: 80%;
    z-index: 3;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      height: 100%;
      object-fit: contain;
    }
  }
`;
