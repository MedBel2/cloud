import "./App.css";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 36.084518,
  lng: 9.37083,
};

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <span>We're here</span>
      </div>
      <div className="main">
        <LoadScript googleMapsApiKey="API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="footer">
        <span>Come along !</span>
      </div>
    </div>
  );
};

export default App;
