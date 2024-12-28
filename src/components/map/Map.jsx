import { useState, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40,
  lng: -100,
};

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const position = [40, -100];

  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden">
      <MapContainer
        center={position}
        zoom={4}
        className="w-full h-full absolute inset-0" // Updated styles
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Example marker */}
        <Marker position={position}>
          <Popup>A sample location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
