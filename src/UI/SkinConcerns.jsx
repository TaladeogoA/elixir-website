import React from "react";
import styled from "styled-components";

const SkinConcerns = () => {
  return (
    <Wrapper>
      <h2>SERUMS FORMULA HELPS ADDRESSES MANY SKIN ISSUES INCLUDING:</h2>

      <ul>
        <li>Sun Damage</li>
        <li>Dryness / Flakiness</li>
        <li>Redness / Dark Spots</li>
        <li>Breakouts</li>
        <li>Congestion / Blackheads</li>
        <li>Wrinkles / Fine Lines</li>
      </ul>
    </Wrapper>
  );
};

export default SkinConcerns;

const Wrapper = styled.section`
  margin-top: 10rem;

  h2 {
    font-size: 2.3rem;
    width: 55%;
    margin: auto;
    text-align: center;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 3rem;
    margin-top: 7rem;

    li {
      /* font-family: "Poppins"; */
      font-size: 5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      position: relative;

      @keyframes strike {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }

      ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #ffa372;
        z-index: 1;
        animation-name: strike;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }
  }
`;
