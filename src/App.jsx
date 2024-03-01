import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import INDIA_TOPO_JSON from "./india.topo.json";

const PROJECTION_CONFIG = {
  scale: 800, // Increased map size
  center: [78.9629, 22.5937], // East Latitude, North Longitude
};

const capitals = [
  { name: "New Delhi", coordinates: [77.209, 28.6139] },
  // Add more capital cities here with their coordinates
];

const geographyStyle = {
  default: { outline: "none", fill: "#D0D5DD" }, // Updated map color
  hover: { fill: "#ADDFFF", transition: "all 250ms", outline: "none" },
  pressed: { outline: "none" },
};

function App() {
  const mapSizes = {
    xs: { width: 300, height: 450 },
    md: { width: 600, height: 900 },
    lg: { width: 800, height: 1200 },
    xl: { width: 1000, height: 1500 },
    "2xl": { width: 1200, height: 1800 },
  };

  return (
    <div className="overflow-hidden border-white border">
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        // Example setting size dynamically based on screen width
        width={mapSizes.lg.width} // Adjust based on state or props
        height={mapSizes.lg.height}
        className="mx-auto" // Center map in its container
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="outline-none fill-current text-gray-300 hover:fill-light-blue-200 pressed:outline-none"
                style={{
                  default: {
                    outline: "none",
                    fill: "#D0D5DD",
                    stroke: "#fff",
                    strokeWidth: 0.5,
                  }, // Added white border
                  hover: {
                    fill: "#fff",
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
            <circle r={6} fill="#F00" stroke="#fff" strokeWidth={1.5} />{" "}
            {/* Smaller circle */}
            <text
              textAnchor="middle"
              y={-10}
              style={{
                fontFamily: "system-ui",
                fill: "#5D5A6D",
                fontSize: "10px",
              }}
            >
              {name}
            </text>{" "}
            {/* Smaller text */}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default App;
