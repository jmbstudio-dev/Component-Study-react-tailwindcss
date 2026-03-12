import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyLeafletMap = () => (
  <MapContainer
    center={[14.1949, 121.1597]}
    zoom={10}
    style={{ height: "150px", width: "100%" }}
    className="rounded-lg"
  >
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      attribution="&copy; OpenStreetMap contributors &copy; CARTO"
    />
  </MapContainer>
);

export default MyLeafletMap;
