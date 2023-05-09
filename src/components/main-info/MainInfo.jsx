/* eslint-disable react/prop-types */
import styled from "styled-components";
import { IconContext } from "react-icons";
import { useContext } from "react";
import TimeContext from "../../Contexts/TimeContext";
import Icons from "../icons/Icons";

const InfoContainer = styled.section`
  width: 75vw;
  padding: 2rem 0;
  margin: 4rem auto 6rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4rem;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin: 0;
  }
  h2 {
    text-align: center;
    font-size: 24px;
    margin: 0;
  }
  p {
    text-align: center;
    font-weight: 300;
    margin: 0;
  }
  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 300;
      font-size: 12px;
    }
  }
  @media (min-width: 576px) {
    svg {
      max-width: 55px !important;
      max-height: 55px;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 992px) {
    position: absolute;
    bottom: 10px;
    left: 4rem;
    width: 60vw;
    background: initial;
    backdrop-filter: initial;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 42px;
    }
  }
`;

const MainInfo = ({ temp, city, desc }) => {
  const { formattedTime } = useContext(TimeContext);
  return (
    <InfoContainer className="glass-effect">
      <h1>{Math.round(temp - 273.15)}°C</h1>
      <div>
        <h2>{city}</h2>
        {formattedTime && (
          <p>
            {formattedTime.localeTime} - {formattedTime.localeDate}
          </p>
        )}
      </div>
      <div className="icon-container">
        <IconContext.Provider value={{ size: "12vw" }}>
          <Icons />
        </IconContext.Provider>
        <span>{desc}</span>
      </div>
    </InfoContainer>
  );
};

export default MainInfo;
