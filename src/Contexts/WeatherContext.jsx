import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LocationContext from "./LocationContext";
import LC_Context from "./LastCities";

const WeatherContext = createContext();

// eslint-disable-next-line react/prop-types
const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [weatherLoader, setWeatherLoader] = useState(true);
  const [error, setError] = useState(null);
  const { location, locationLoader } = useContext(LocationContext);
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let city = query.get("city");
  const { updateLC } = useContext(LC_Context);

  useEffect(() => {
    if (locationLoader) return;
    setWeatherLoader(true);
    let weatherURL;
    if (!city) {
      if (!location) return;
      weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${
        location.lat
      }&lon=${location.lng}&appid=${import.meta.env.VITE_APPID}`;
    } else {
      weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APPID
      }`;
    }
    axios
      .get(weatherURL)
      .then((res) => {
        city && updateLC(city);
        setWeather(res.data);
        setWeatherLoader(false);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setWeatherLoader(false);
        setWeather(null);
        setError(err.response.data.message);
      });
  }, [city, location, locationLoader, updateLC]);
  let data = {
    weather,
    weatherLoader,
    error,
    city,
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
export { WeatherProvider };
