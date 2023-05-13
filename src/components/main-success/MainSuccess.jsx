import { useContext, useEffect, useState } from "react";
import ExtraInfo from "../extra-info/ExtraInfo";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MainInfo from "../main-info/MainInfo";

import Loader from "../loader/Loader";
import InternalError from "../internal-error/InternalError";
import NotLocation from "../not-location/NotLocation";
import WeatherContext from "../../Contexts/WeatherContext";
import styled from "styled-components";
import images from "../../assets/bg-images.json";

const Mask = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--MW-5-alpha);
`;

const MainSuccess = () => {
  const { weather, weatherLoader, error, city } = useContext(WeatherContext);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!weather) return;
    setImage(
      images[weather.weather[0].main][weather.weather[0].icon.slice(-1)]
    );
  }, [weather]);

  return (
    <>
      {weatherLoader && <Loader />}
      {weather && (
        <>
          <main style={{ backgroundImage: `url(${image})` }}>
            <Mask>
              <Header />
              <MainInfo
                temp={weather.main.temp}
                city={`${weather.name}, ${weather.sys.country}`}
                desc={weather.weather[0].description}
              />
              <ExtraInfo
                cloudy={weather.clouds.all}
                humidity={weather.main.humidity}
                wind={weather.wind.speed}
                visibility={weather.visibility}
              />
            </Mask>
          </main>
          <Footer />
        </>
      )}
      {error === "Internal error" && <InternalError />}
      {error === "city not found" && (
        <NotLocation msg={`Sorry :( , we didn't find the city: ${city}`} />
      )}
    </>
  );
};

export default MainSuccess;
