import avocado from "../assets/images/avacado.png";
import rumex from "../assets/images/grass.png";
import diacetyl from "../assets/images/bark.png";
import rosehip from "../assets/images/beads.png";
import moss from "../assets/images/moss.png";
import radish from "../assets/images/radish.png";
import { HiArrowLongRight } from "react-icons/hi2";
import styled from "styled-components";

const NaturalIngredients = () => {
  return (
    <Wrapper>
      <div className="ingredients-heading">
        <h2>
          THE BEST <br /> & NATURAL INGREDIENTS
        </h2>

        <div>
          <p>
            We use the very best, research-backed ingredients chosen by
            dermatologists. But far more importantly, we use them in just the
            right formula for you. You need to use just the right ones at the
            amount that is safe and effective for your skin.
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">
            <span>SEE INGREDIENTS LIST</span>
            <HiArrowLongRight />
          </a>
        </div>
      </div>

      <div className="ingredients-list">
        <ul>
          <li>
            <p>AVOCADO</p>
            <div>
              <img src={avocado} alt="avocado" />
            </div>
          </li>
          <li>
            <p>RUMEX OCCIDENTALIS</p>
            <div>
              <img src={rumex} alt="rumex occidentalis" />
            </div>
          </li>
          <li>
            <p>DIACETYL BOLDINE</p>
            <div>
              <img src={diacetyl} alt="diacetyl boldine" />
            </div>
          </li>
          <li>
            <p>ROSEHIP SEED</p>
            <div>
              <img src={rosehip} alt="rosehip seed" />
            </div>
          </li>
          <li>
            <p>IRISH MOSS EXTRACT</p>
            <div>
              <img src={moss} alt="irish moss extract" />
            </div>
          </li>
          <li>
            <p>RADISH ROOT EXTRACT</p>
            <div>
              <img src={radish} alt="radish root extract" />
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default NaturalIngredients;

const Wrapper = styled.section`
  margin-top: 4rem;
  padding: 4rem;
  overflow: hidden;

  .ingredients-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
      font-size: 3.2rem;
      width: 35%;
      margin: 0;
    }

    div {
      width: 25%;
      font-family: "Poppins";

      p {
        font-size: 0.8rem;
        line-height: 1.5;
      }

      a {
        color: #ffa372;
        text-decoration: none;
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
          margin-right: 0.5rem;
        }

        svg {
          font-size: 1.2rem;
        }
      }
    }
  }

  .ingredients-list {
    margin-top: 4rem;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      list-style: none;
      padding: 0;
      width: 130%;

      li {
        width: 27%;
        height: 10rem;
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #faede0;
        font-family: "Poppins";

        p {
          font-size: 0.9rem;
          margin: 2rem auto;
          width: 50%;
          text-align: center;
        }

        div {
          width: 80%;
          display: flex;

          img {
            width: 65%;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
