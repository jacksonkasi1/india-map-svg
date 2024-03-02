import React, { useState } from "react";
import { Marker } from "react-simple-maps";

const CustomMarker = ({ coordinates, name }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleMouseEnter = () => setShowPopover(true);
  const handleMouseLeave = () => setShowPopover(false);

  return (
    <Marker
      coordinates={coordinates}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        hi
      <g transform="translate(-9.5, 0)">
        <svg
          width="19"
          height="19"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG contents here */}
        </svg>
      </g>
      {showPopover && (
        <text
          textAnchor="middle"
          y={-25}
          style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "10px" }}
        >
          {name}
        </text>
      )}
    </Marker>
  );
};

export default CustomMarker;
