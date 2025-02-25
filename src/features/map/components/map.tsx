"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { matGeoJSON } from "../../../../public/data/mat";
import { klosGeoJSON } from "../../../../public/data/klos";
import { mergeGeoJSON } from "@/utils/mergeGeoJSON";
import { icons } from "../data/icons";
import { edestinations } from "../data/destinations";
import Image from "next/image";
import "leaflet-loading";

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

const mergedGeoJSON = mergeGeoJSON(matGeoJSON, klosGeoJSON);

const districtStyle = {
  color: "#ff7800", // Border color
  weight: 3, // Border thickness
  opacity: 1, // Border opacity
  fillOpacity: 0.05, // Fill opacity (if you want to fill the area)
  fillColor: "#ff7800", // Fill color (if you want to fill the area)
};

export const Map = () => {
  return (
    <MapContainer
      center={[41.59, 20]}
      zoom={11.4}
      scrollWheelZoom={true}
      id="map"
      // @ts-expect-error "loading"
      loadingControl={true}
      attributionControl={false}
      style={{ height: "100vh", width: "100%" }}
      className="border-2 border-green-400 z-[1]"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={mergedGeoJSON} style={districtStyle} />
      {edestinations.map((destination) => {
        return (
          <Marker
            position={destination.position}
            icon={icons[destination.type]}
            key={destination.title}
          >
            <Popup>
              <Image
                src={destination.image}
                alt={destination.title}
                width={300}
                height={80}
              />
              <p className="text-center font-semibold ">{destination.title}</p>
              <br /> {destination.description}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
