"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { matGeoJSON } from "../../../public/data/mat";
import { klosGeoJSON } from "../../../public/data/klos";
import { mergeGeoJSON } from "@/utils/mergeGeoJSON";
import { bridgeIcon } from "./icons";
import { bridges } from "./destinations";
import Image from "next/image";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
);

const defaultIcon = new L.Icon({
  iconUrl: "/ulez1.jpg", // Path to the default marker icon
  iconRetinaUrl: "/ulez1.jpg", // Path to the retina marker icon
  shadowUrl: "/ulez1.jpg", // Path to the marker shadow
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // Size of the shadow
});

const mergedGeoJSON = mergeGeoJSON(matGeoJSON, klosGeoJSON);

const districtStyle = {
  color: "#ff7800", // Border color
  weight: 3, // Border thickness
  opacity: 1, // Border opacity
  fillOpacity: 0.05, // Fill opacity (if you want to fill the area)
  fillColor: "#ff7800", // Fill color (if you want to fill the area)
};

export const Map = () => {
  const position: LatLngExpression = [41.59, 20];
  return (
    <MapContainer
      center={[41.59, 20]}
      zoom={11.4}
      scrollWheelZoom={true}
      id="map"
      attributionControl={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={mergedGeoJSON} style={districtStyle} />
      {bridges.map((bridge) => {
        return (
          <Marker
            position={bridge.position}
            icon={bridgeIcon}
            key={bridge.title}
          >
            <Popup>
              <Image src="/ulez1.jpg" alt="Ura" width={300} height={80} />
              {bridge.title} <br /> {bridge.description}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
