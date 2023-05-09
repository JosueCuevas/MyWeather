import { useContext } from "react";
import MainSuccess from "./components/main-success/MainSuccess";
import LocationContext from "./Contexts/LocationContext";
import Loader from "./components/loader/Loader";
import NotLocation from "./components/not-location/NotLocation";
import { HashRouter, Route, Routes } from "react-router-dom";
import { WeatherProvider } from "./Contexts/WeatherContext";
import { TimeProvider } from "./Contexts/TimeContext";

function App() {
  const { location, locationLoader } = useContext(LocationContext);
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WeatherProvider>
                <TimeProvider>
                  {locationLoader && <Loader />}
                  {!locationLoader && location && <MainSuccess />}
                  {!locationLoader && !location && (
                    <NotLocation
                      msg={
                        "This app needs to know your geolocation in order to work well, but we understand and respect your decision"
                      }
                    />
                  )}
                </TimeProvider>
              </WeatherProvider>
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <WeatherProvider>
                <TimeProvider>
                  <MainSuccess />
                </TimeProvider>
              </WeatherProvider>
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
