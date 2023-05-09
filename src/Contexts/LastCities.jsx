import { createContext, useState } from "react";
import LastCities from "../assets/last-cities.json";

const LC_Context = createContext(null);

// eslint-disable-next-line react/prop-types
const LC_Provider = ({ children }) => {
  const [lastCities, setLastCities] = useState(() => {
    const lC = localStorage.getItem("lastCities");
    if (!lC) {
      return LastCities.lastCities;
    } else {
      return JSON.parse(lC);
    }
  });

  const updateLC = (city) => {
    const isAlreadyStored = lastCities.some(
      (element) => element.name.toUpperCase() === city.toUpperCase()
    );
    if (isAlreadyStored) return;
    const newArray = lastCities.slice(1);
    newArray.push({ name: city });
    setLastCities(newArray);
    localStorage.setItem("lastCities", JSON.stringify(newArray));
  };

  let data = {
    updateLC,
    lastCities,
  };
  return <LC_Context.Provider value={data}>{children}</LC_Context.Provider>;
};
export default LC_Context;
export { LC_Provider };
