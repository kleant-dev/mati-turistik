type geoJSONType = {
  type: string;
  generator: string;
  copyright: string;
  timestamp: string;
  features: {
    type: string;
    properties: {
      "@id": string;
      admin_level: string;
      boundary: string;
      email: string;
      name: string;
      phone: string;
      population: string;
      type: string;
      website: string;
      wikidata: string;
      wikipedia: string;
      "name:en"?: string;
      "name:sq"?: string;
    };
    geometry: {
      type: string;
      coordinates: number[][][];
    };
    id: string;
  }[];
};

export const mergeGeoJSON = (geoJSON1: geoJSONType, geoJSON2: geoJSONType) => {
  return {
    type: "FeatureCollection",
    features: [
      ...geoJSON1.features, // Spread features from the first GeoJSON
      ...geoJSON2.features, // Spread features from the second GeoJSON
    ],
  };
};
