import React from "react";
import Navbar from "../components/Navbar";
import arrow from "../assets/images/arrow_black.svg";
import styled from "styled-components";

const Product = () => {
  return (
    <>
      <Navbar />
      <ProductContainer>
        <div className="section-one">
          <div className="circle-cta">
            <img src={arrow} alt="arrow" />
            <div className="circle">
              <p>
                GET <br /> YOURS NOW
              </p>
            </div>
          </div>
          <h1>
            <span>* YOUR</span> <br />
            <span>PERSONALISED</span> <br />
            <span className="miracle-serum">
              <span>*MIRACLE /SERUM</span>
              <span>SERUM TO</span>
            </span>
            <br />
            <span>PERFECT SKIN</span>
          </h1>
        </div>
        <div className="section-two"></div>
      </ProductContainer>
    </>
  );
};

export default Product;

const ProductContainer = styled.section`
  display: flex;
  height: 140vh;
  margin-top: 4rem;

  .section-one {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: right;

    .circle-cta {
      margin-left: auto;
      margin-right: 10rem;
      display: flex;

      img {
        position: relative;
        left: 1rem;
      }

      .circle {
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        border: solid 1px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Poppins", sans-serif;
        font-size: 0.8rem;

        p {
          text-align: right;
        }
      }
    }

    h1 {
      font-size: 9vw;
      font-weight: 200;
      margin: 2rem 1rem;
      color: rgb(27, 38, 44);
      z-index: 2;

      span {
        margin-left: 2rem;
        letter-spacing: 2px;
        white-space: nowrap;

        &:nth-child(1) {
          position: relative;
          left: 4rem;
        }

        &:nth-child(4) {
          display: inline-block;
        }
      }

      .miracle-serum {
        span:nth-child(1) {
          font-size: 0.8rem;
          font-family: "Poppins", sans-serif;
          font-weight: 200;
          width: 10px;
          white-space: pre-wrap;
          line-height: 12px;
          display: inline-block;
          margin-left: 9rem;
        }
      }
    }
  }

  .section-two {
    width: 45%;
    background-image: url(https://images.unsplash.com/photo-1555820585-c5ae44394b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDE2NDA0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080);
    background-size: cover;
  }
`;
