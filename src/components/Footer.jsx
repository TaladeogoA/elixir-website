import footerimg from "../assets/images/footer.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-image">
        <img src={footerimg} alt="Footer" />
      </div>

      <div className="footer-text">
        <h2>
          READY TO <br />
          TRANSFORM <br /> YOUR SKIN
        </h2>

        <button>
          <span>GET STARTED</span> <HiArrowLongRight />
        </button>

        <hr />

        <div className="footer-links">
          <Link to="/">ELIXIR</Link>
          <ul>
            <div>
              <li>PRODUCT</li>
              <li>HOW IT WORKS</li>
              <li>FAQ</li>
              <li>REVIEWS</li>
              <li>BLOG</li>
            </div>
            <div>
              <li>INSTAGRAM</li>
              <li>TWITTER</li>
              <li>DRIBBLE</li>
            </div>
          </ul>

          <div>
            <p>
              <span>© 2023 Muteza</span>
              <span>Website Made By Taladeogo Abraham</span>
              <span>Design by Abhishek Jha</span>
            </p>
            <p>
              <span>Privacy Policy</span>
              <span>Terms</span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  margin-top: 4rem;

  display: flex;

  .footer-image {
    width: 50%;

    img {
      width: 100%;
    }
  }

  .footer-text {
    margin: 0 5rem;
    width: 40%;

    h2 {
      font-size: 3.5rem;
    }

    button {
      padding: 1.3rem 3.7rem;
      background-color: #ffa372;
      color: white;
      border: none;
      display: flex;
      align-items: center;

      svg {
        margin-left: 1rem;
        font-size: 1.2rem;
      }
    }

    hr {
      margin: 6rem 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .footer-links {
      a {
        font-size: 2.8rem;
        font-weight: 500;
        text-decoration: none;
        color: inherit;
      }
      ul {
        width: 70%;
        padding: 0;
        display: flex;
        justify-content: space-between;
        margin: 2rem 0 4rem 0;
        list-style: none;
        font-family: "Poppins";
        font-size: 0.8rem;
        line-height: 1.5;
      }

      > div {
        font-family: "Poppins";
        display: flex;
        justify-content: space-between;
        width: 70%;

        p {
          display: flex;
          flex-direction: column;
          font-size: 0.7rem;
          margin-right: 2rem;
        }
      }
    }
  }
`;
