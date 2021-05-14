import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon from '../images/icon-location.svg';
function DisplayMap() {

    const icon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon,
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [40, 50],
        className: 'mapcontainer__icon'
    })

    return (
        <div className="mapcontainer">
            <MapContainer style={{ width: "100%", height: "100%" }}
                center={[41.4408, 38.9688]}
                zoom={3}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={icon} position={[41.4408, 38.9688]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div >
    )
}

export default DisplayMap;
