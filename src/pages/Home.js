import React from "react";
import Navbar from "../components/Navbar";
import arrow from "../assets/images/arrow_black.svg";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
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
            <span>
              <span className="miracle-serum">*MIRACLE /SERUM</span>
              <span>SERUM TO</span>
            </span>
            <span>PERFECT SKIN</span>
          </h1>
        </div>
        <div className="section-two"></div>
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.section`
  display: flex;
  height: 140vh;
  margin-top: 3.5rem;

  .section-one {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: right;

    .circle-cta {
      margin-left: auto;
      margin-right: 3rem;
      display: flex;

      img {
        position: relative;
        left: 1rem;
      }

      .circle {
        width: 8rem;
        height: 8rem;
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
      font-size: 5.5rem;
      margin: 1rem;
      color: rgb(27, 38, 44);

      span {
        margin-left: 2rem;
      }

      .miracle-serum {
        font-size: 0.8rem;
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        width: 2rem;
        border: solid 1px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .section-two {
    width: 40%;
    background-image: url(https://images.unsplash.com/photo-1551184451-76b762941ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NDQzMzAwNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080);
    background-size: cover;
  }
`;
