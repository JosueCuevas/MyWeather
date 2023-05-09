import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/styles.css";
import { LocationProvider } from "./Contexts/LocationContext.jsx";
import { LC_Provider } from "./Contexts/LastCities.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocationProvider>
      <LC_Provider>
        <App />
      </LC_Provider>
    </LocationProvider>
  </React.StrictMode>
);
