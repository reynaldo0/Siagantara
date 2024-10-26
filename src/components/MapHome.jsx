import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <MapContainer
      center={[-2.5489, 118.0149]} // Centering map on Indonesia
      zoom={5}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Add Markers for different points if needed */}
      <Marker position={[-6.2088, 106.8456]}>
        <Popup>Jakarta</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
