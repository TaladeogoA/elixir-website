import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div class="logo-container">
        <Link to="/">ELIXIR</Link>
      </div>

      <ul class="navlinks-container">
        <li>
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link to="/howitworks">HOW IT WORKS</Link>
        </li>
        <li>
          <Link to="/reviews">REVIEWS</Link>
        </li>
      </ul>

      <div class="auth-container">
        <a href="./login.html">SIGN UP/IN</a>
        <a className="get-started" href="./signup.html">
          GET STARTED
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  background-color: #fef1eb;
  z-index: 10;

  .logo-container {
    width: 25%;

    a {
      font-size: 1.5rem;
      padding: 0 3rem;
      padding-top: 1.5rem;
      text-decoration: none;
      color: rgb(27, 38, 44);
    }
  }

  .navlinks-container {
    width: 50%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;

    li {
      margin: 0 15px;

      a {
        text-decoration: none;
        color: #000;
      }
    }
  }

  .auth-container {
    width: 25%;
    height: 100%;
    display: flex;
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;

    a {
      width: 50%;
      height: 100%;
      text-decoration: none;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;

      &.get-started {
        background-color: #ffa372;
        color: #fff;
      }
    }
  }
`;
