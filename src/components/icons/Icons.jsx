import { useContext, useEffect, useState } from "react";
import WeatherContext from "../../Contexts/WeatherContext";
import {
  BsCloudFog,
  BsCloudFogFill,
  BsCloudMoon,
  BsCloudRain,
  BsCloudRainFill,
  BsCloudSun,
  BsClouds,
  BsCloudsFill,
  BsSnow,
  BsSun,
  BsThermometerSnow,
} from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import {
  WiDayRain,
  WiDayThunderstorm,
  WiNightAltRainMix,
  WiNightAltThunderstorm,
} from "react-icons/wi";

const Icons = () => {
  const { weather } = useContext(WeatherContext);
  const [icon, setIcon] = useState("second");

  useEffect(() => {
    setIcon(weather.weather[0].icon);
  }, [weather]);

  switch (icon) {
    case "01d":
      return <BsSun />;
    case "01n":
      return <BiMoon />;
    case "02d":
      return <BsCloudSun />;
    case "02n":
      return <BsCloudMoon />;
    case "03d":
      return <AiOutlineCloud />;
    case "03n":
      return <AiOutlineCloud />;
    case "04d":
      return <BsClouds />;
    case "04n":
      return <BsCloudsFill />;
    case "10d":
      return <WiDayRain />;
    case "10n":
      return <WiNightAltRainMix />;
    case "11d":
      return <WiDayThunderstorm />;
    case "11n":
      return <WiNightAltThunderstorm />;
    case "09n":
      return <BsCloudRain />;
    case "09d":
      return <BsCloudRainFill />;
    case "13d":
      return <BsSnow />;
    case "13n":
      return <BsThermometerSnow />;
    case "50d":
      return <BsCloudFog />;
    case "50n":
      return <BsCloudFogFill />;
  }
};

export default Icons;
