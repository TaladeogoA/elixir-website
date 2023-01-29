import { useState } from "react";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";
import styled from "styled-components";

const Factor = ({ icon, heading, text }) => {
  const [show, setShow] = useState(false);

  return (
    <FactorWrapper
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className="heading">
        {icon}
        <span className={show ? "opened" : ""}>
          <h3>{heading}</h3>
          {show ? <MdArrowDropDown /> : <MdArrowRight />}
        </span>
      </div>
      {show && (
        <div className={show ? "text opened" : "text"}>
          <p>{text}</p>
        </div>
      )}
    </FactorWrapper>
  );
};

export default Factor;

const FactorWrapper = styled.article`
  .heading {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 3s ease-in-out;
    margin: 1rem 0;

    svg {
      font-size: 1.5rem;
      margin-right: 1rem;
    }

    span {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 1.3rem;
      }

      &.opened {
        p {
          margin-right: 5rem;
        }
      }
    }
  }

  .text {
    font-family: "Poppins";
    font-size: 0.8rem;
    padding: 2rem;
    background-color: #fcf0e3;
    width: calc(95%-4rem);
  }
`;
