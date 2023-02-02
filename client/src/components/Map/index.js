import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

// Display Google Map location in component
const MapContainer = (props) => {
  // const [position, setPosition] = useState({});

  // useEffect(() => {
  //   setPosition(props.mapContainer);
  // }, []);

  console.log(props);
  return (
    <Map
      google={props.google}
      zoom={14}
      style={{ width: "100%", height: "50%" }}
      initialCenter={{
        lat: props.mapContainer.lat || 37.7749,
        lng: props.mapContainer.lng || -122.4194,
      }}
    >
      <Marker
        position={{ lat: props.mapContainer.lat, lng: props.mapContainer.lng }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAiiBRt4ChUhgVDQ1PXmJHkS2ZDoJE9X-s",
})(MapContainer);
