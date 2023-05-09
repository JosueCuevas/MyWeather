import { createContext, useEffect, useState } from "react";

const LocationContext = createContext(null);

// eslint-disable-next-line react/prop-types
const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [locationLoader, setLocationLoader] = useState(true);

  const askUserLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      setLocation({ lat: crd.latitude, lng: crd.longitude });
      setLocationLoader(false);
    }

    function error(err) {
      setLocation(null);
      setLocationLoader(false);
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  useEffect(() => {
    askUserLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ location, locationLoader }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider };
export default LocationContext;
