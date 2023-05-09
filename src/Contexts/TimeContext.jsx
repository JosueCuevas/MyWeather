import { createContext, useContext, useEffect, useState } from "react";
import WeatherContext from "./WeatherContext";
import axios from "axios";

const TimeContext = createContext();
// eslint-disable-next-line react/prop-types
const TimeProvider = ({ children }) => {
  /* This code is fetching the timezone of the location specified by the `lat` and `lon` coordinates
  using an external API. It then sets the timezone using the `setTimezone` function from the
  `useState` hook. */
  const { weather } = useContext(WeatherContext);
  const [time, setTime] = useState(new Date());
  const [timezone, setTimezone] = useState(null);
  useEffect(() => {
    if (!weather) return;
    const { lat, lon } = weather.coord;
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/timezone?lat=${lat}&lon=${lon}`,
        {
          headers: { "X-Api-Key": import.meta.env.VITE_API_KEY_TIMEZONE },
        }
      );
      const timezone = await response.data.timezone;
      setTimezone(timezone);
    };
    fetchData();
  }, [weather]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  let formattedTime;
  if (timezone) {
    const timeOptions = {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      timeZone: timezone,
    };
    const todayOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: timezone,
    };
    formattedTime = {
      localeTime: time.toLocaleTimeString("es-MX", timeOptions),
      localeDate: time.toLocaleDateString("en-US", todayOptions),
    };
  }
  let data = {
    formattedTime,
  };
  return <TimeContext.Provider value={data}>{children}</TimeContext.Provider>;
};

export default TimeContext;
export { TimeProvider };
