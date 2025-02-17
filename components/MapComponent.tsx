
"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <MapContainer
      style={{ height: "50vh", width: "100%" }}
      center={[31.432026740690574, 120.8439179532812]}
      zoom={8}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      {/* You can add Marker and Popup here if needed */}
    </MapContainer>
  );
};

export default MapComponent;
