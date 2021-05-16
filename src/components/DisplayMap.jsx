import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../images/icon-location.svg";
function DisplayMap({ coordinates }) {
  const icon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 50],
    className: "mapcontainer__icon",
  });

  const latLng = L.latLng(coordinates.lat, coordinates.lng);

  return (
    <div className="mapcontainer">
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={latLng}
        zoomControl={false}
        zoom={13}
        // scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={latLng}></Marker>
      </MapContainer>
    </div>
  );
}

export default DisplayMap;
