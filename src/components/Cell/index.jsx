import React from "react";
import "./Cell.scss";

const Cell = ({ value }) => {
  const divStyle = {
    backgroundColor: `rgba(${value}, 0, 0, 1)`
  };

  return <div className="Cell" style={divStyle}></div>;
};

export default Cell;
