import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import INDIA_TOPO_JSON from "./india.topo.json";

import { MapMarkerIco } from "./assets/icons";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


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
    xll: { width: 1200, height: 1800 },
  };

  return (
    <div>
      <div className="tooltip-container">
        <Tooltip id="tooltip" className="tooltip" />
      </div>

      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        className="-mt-[170px]"
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

        {capitals.map(({ name, coordinates }, index) => (
          <Marker key={index} coordinates={coordinates}>
            <MapMarkerIco
              data-tooltip-id="tooltip"
              data-tooltip-html={`
              <div>
                <header style="display: flex; flex-direction: column; align-items: center">
                  <img loading="lazy" src="https://hatscripts.github.io/circle-flags/flags/in.svg" alt="logo" style="height: 30px; width: 30px; object-fit: contain; border-radius: 50%;">
                  <h3 style="width: 100%; margin-top: 0.5rem; font-weight: 600; color: #334155;">Credence Tec</h3>
                  <p style="margin-top: 0.25rem; color: #71717a;">${name}</p>
                </header>
              </div>
              `}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default App;
