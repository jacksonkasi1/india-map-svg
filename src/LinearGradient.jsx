import React from 'react';

const LinearGradient = ({ data }) => {
  const boxStyle = {
    width: 180,
    margin: 'auto',
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor}, ${data.toColor})`,
    height: 20,
  };
  return (
    <div>
      <div style={boxStyle} className="display-flex">
        <span>{data.min}</span>
        <span className="fill"></span>
        <span>{data.max}</span>
      </div>
      <div style={{ ...boxStyle, ...gradientStyle }} className="mt8"></div>
    </div>
  );
};

export default LinearGradient;
