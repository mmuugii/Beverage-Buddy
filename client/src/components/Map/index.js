import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = ({ google }) => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position.coords);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    console.log(position);
  }, []);

  return (
    <Map
      google={google}
      zoom={14}
      style={{ width: "100%", height: "100%" }}
      initialCenter={{
        lat: position.lat || 37.7749,
        lng: position.lng || -122.4194,
      }}
    >
      <Marker position={{ lat: position.lat, lng: position.lng }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDm4eD7fTLayP9ovoSx_oilbzHPb4e81Cs",
})(MapContainer);
