import factorsData from "../data";
import Factor from "../components/Factor";
import app from "../assets/images/app.png";
import styled from "styled-components";

const Factors = () => {
  return (
    <Wrapper>
      <div className="factors-image">
        <img src={app} alt="app" />
      </div>

      <div className="factors-text">
        <h2>
          We measure and track the many factors that impact your skin health.
        </h2>
        <div className="factors">
          {factorsData.map(({ id, heading, text, icon }) => {
            return (
              <Factor key={id} heading={heading} text={text} icon={icon} />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Factors;

const Wrapper = styled.section`
  margin-top: 4rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  .factors-image {
    width: 50%;

    img {
      padding: 3rem;
    }
  }

  .factors-text {
    width: 45%;
    margin-right: 5rem;

    h2 {
      font-size: 2.8rem;
    }
  }
`;
