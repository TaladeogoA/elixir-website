import React from "react";
import kit from "../assets/images/kit.jpg";
import serum from "../assets/images/serum.jpg";
import tracking from "../assets/images/phone.jpg";
import styled from "styled-components";

const WhatYouGet = () => {
  return (
    <Wrapper>
      <div className="what-you-get-images">
        <div>
          <p>HEALTH KIT</p>
        </div>
        <div></div>
        <div>
          <img src={kit} alt="Health Kit" />
        </div>
        <div>
          <p className="custom-serum">CUSTOM SERUM</p>
        </div>
        <div>
          <p>TRACKING APP</p>
        </div>
        <div>
          <img src={serum} alt="Serum" />
        </div>
        <div>
          <img src={tracking} alt="Tracking" />
        </div>
        <div></div>
      </div>

      <div className="what-you-get-details">
        <h2>
          WHAT <br /> YOU GET
        </h2>
        <ul>
          <li>
            <h3>Health Kit</h3>
            <p>
              Our algorithms design a custom serum for you based on a
              comprehensive analysis of your skin's condition.
            </p>
          </li>
          <hr />
          <li>
            <h3>Serum</h3>
            <p>
              Your serum is designed to fit into your existing routine. We take
              into account your current products, any allergies or
              prescriptions.
            </p>
          </li>
          <hr />
          <li>
            <h3>Tracking And Adapting</h3>
            <p>
              Each month we adapt your serum formulation so that your skin
              always gets what it needs, no matter what life throws at you.
            </p>
          </li>
          <hr />
        </ul>
      </div>
    </Wrapper>
  );
};

export default WhatYouGet;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10rem;

  .what-you-get-images {
    max-width: 45%;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div {
      font-family: "Poppins";
      font-size: 0.8rem;
      height: 20rem;
      width: 100%;
      object-fit: contain;
      overflow: hidden;

      p.custom-serum {
        margin-left: auto;
      }

      img {
        width: 100%;
        object-fit: cover;
      }

      &:nth-child(1) {
        height: max-content;
      }

      &:nth-child(2) {
        height: max-content;
      }

      &:nth-child(4),
      &:nth-child(5) {
        display: flex;
        align-items: flex-end;
        text-align: left;
      }
    }
  }

  .what-you-get-details {
    width: 30%;
    margin-left: 10rem;

    h2 {
      font-size: 3rem;
    }

    ul {
      list-style: none;
      padding: 0;
      li {
        h3 {
          margin-top: 4rem;
        }

        p {
          width: 60%;
          font-size: 0.8rem;
          font-family: "Poppins";
        }
      }

      hr {
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        width: 60%;
        margin: 2rem 0;
        margin-left: 0;
      }
    }
  }
`;
