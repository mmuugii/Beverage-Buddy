import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

// Display Google Map location in component from
const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      style={{ width: "50%", height: "50%" }}
      initialCenter={{
        lat: JSON.parse(localStorage.getItem("lat")) || 37.7749,
        lng: JSON.parse(localStorage.getItem("lng")) || -122.4194,
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
