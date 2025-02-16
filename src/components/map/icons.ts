import L, { PointExpression } from "leaflet";
import { destinationType } from "./destinations";

const commonProperties: {
  iconSize?: PointExpression | undefined;
  iconAnchor?: PointExpression | undefined;
  popupAnchor?: PointExpression | undefined;
  shadowSize?: PointExpression | undefined;
} = {
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41],
};

export const bridgeIcon = new L.Icon({
  iconUrl: "/images/bridge.png",
  ...commonProperties,
});

export const caveIcon = new L.Icon({
  iconUrl: "/images/cave.png",
  ...commonProperties,
});

export const parkIcon = new L.Icon({
  iconUrl: "/images/park.png",
  ...commonProperties,
});

export const castleIcon = new L.Icon({
  iconUrl: "/images/castle.png",
  ...commonProperties,
});

export const canyonIcon = new L.Icon({
  iconUrl: "/images/canyon.png",
  ...commonProperties,
});

type iconType = destinationType["type"];

export const icons: Record<iconType, typeof bridgeIcon> = {
  bridge: bridgeIcon,
  canyon: canyonIcon,
  castle: castleIcon,
  cave: caveIcon,
  park: parkIcon,
};
