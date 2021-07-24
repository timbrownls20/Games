/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import config from "../config/config";

// eslint-disable-next-line react/display-name
const Cell = React.memo(({ margin, row, column, className, dispatch }) => {

  const styleFlexItem = { margin: `${margin}px` };

  useEffect(() => {
    if (config.Debug)
      console.log(
        `cell render row ${row} column ${column}`
      );
  });

  return (
    <div
      className={`flex-item ${className}`}
      style={styleFlexItem}
      onMouseOver={() => dispatch({ type: "cell-over", row, column })}
      onMouseOut={() => dispatch({ type: "cell-out", row, column })}
      onClick={() => dispatch({ type: "cell-toggle", row, column })}
    />
  );
});

export default Cell;
