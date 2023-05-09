import styled from "styled-components";
import WeatherDetails from "../weather-details/WeatherDetails";
import LocationForm from "../location-form/LocationForm";
import LastLocations from "../last-locations/LastLocations";

const MySection = styled.section`
  padding: 1rem 11vw;
  h3 {
    text-align: center;
  }
  article {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
const AsideInfo = styled.aside`
  display: none;
  @media (min-width: 992px) {
    position: absolute;
    right: 0;
    width: 30vw;
    height: 100vh;
    display: block;
    padding: 2rem;

    h3 {
      margin-top: 4rem;
      text-align: center;
      font-size: 18px;
    }
    article {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      span {
        font-weight: 300;
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
const ExtraInfo = ({ cloudy, humidity, wind, visibility }) => {
  return (
    <>
      <MySection className="glass-effect">
        <WeatherDetails
          cloudy={cloudy}
          humidity={humidity}
          wind={wind}
          visibility={visibility}
        />
      </MySection>
      <AsideInfo className="glass-effect">
        <LocationForm />
        <LastLocations />
        <hr />
        <WeatherDetails
          cloudy={cloudy}
          humidity={humidity}
          wind={wind}
          visibility={visibility}
        />
      </AsideInfo>
    </>
  );
};

export default ExtraInfo;
