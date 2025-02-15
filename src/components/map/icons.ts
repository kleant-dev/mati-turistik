import L from "leaflet";

export const bridgeIcon = new L.Icon({
  iconUrl: "/bridge.png",
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41],
});

export const icons = {
  bridge: bridgeIcon,
};
