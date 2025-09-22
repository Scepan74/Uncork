import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
// Import marker images for production build
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icon in production
const customIcon = new Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const mapStyle = {
  width: "100%",
  height: "31vh", // or a fixed px value, e.g. "250px"
};

// A custom React component that renders a Leaflet map with a marker pointing to the location of UNCORK.
const MyMap = () => {
  return (
    <MapContainer center={[-26.137702, 28.017821]} zoom={15} style={mapStyle}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[-26.137702, 28.017821]}
        icon={customIcon}
        title="UNCORK"
      >
        <Popup>Welcome to UNCORK</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
