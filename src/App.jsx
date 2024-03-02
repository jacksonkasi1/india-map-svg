import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import INDIA_TOPO_JSON from "./india.topo.json";
import { MapMarkerIco } from "./assets/icons";
import { CompanyInfoCard } from "./Components/Popver";

const PROJECTION_CONFIG = {
  scale: 800, // Increased map size
  center: [78.9629, 22.5937], // East Latitude, North Longitude
};

const capitals = [
  { name: "New Delhi", coordinates: [77.216721, 28.6448] },
  { name: "Chennai", coordinates: [80.237617, 13.067439] },
];

function App() {
  const mapSizes = {
    xs: { width: 300, height: 450 },
    md: { width: 600, height: 900 },
    lg: { width: 800, height: 1200 },
    xl: { width: 1000, height: 1500 },
    "2xl": { width: 1200, height: 1800 },
  };

  return (
    <div className="overflow-hidden border border-white">
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={mapSizes.lg.width} // Adjust based on state or props
        height={mapSizes.lg.height}
        className="mx-auto"
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="text-gray-300 outline-none fill-current hover:fill-light-blue-200 pressed:outline-none"
                style={{
                  default: {
                    outline: "none",
                    fill: "#D0D5DD",
                    stroke: "#fff",
                    strokeWidth: 0.5,
                  }, // Added white border
                  hover: {
                    fill: "#e1e5eb",
                    transition: "all 250ms",
                    outline: "none",
                  },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {capitals.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <MapMarkerIco />
          </Marker>
        ))}
      </ComposableMap>
      <CompanyInfoCard
        companyName="Credence Tec"
        location="Chennai"
        logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d296624b1586dc250bcbaf6bfec9012c1037531e4627ac621f674d444639ebfd?apiKey=8aaf7451d26f4ce2af1c60a3edd4feea&"
        ribbonImgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5557d38ceabda33aae8c1158e777000c27c526c6c316a3b0f1b5d624567cc3e5?apiKey=8aaf7451d26f4ce2af1c60a3edd4feea&"
      />
      <br />
    </div>
  );
}

export default App;
