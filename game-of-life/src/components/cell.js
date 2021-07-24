/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from "react";
import ConfigContext from "./../context/configContext";
import { CellContext } from "./../context/cellContext";

// eslint-disable-next-line react/display-name
const Cell = ({ margin, row, column }) => {
  const config = useContext(ConfigContext);
  const { cellState, gameStateDispatch } = useContext(CellContext);
  const styleFlexItem = { margin: `${margin}px` };

  useEffect(() => {
    if (config.Debug)
      console.log(
        `cell render row ${cellState.row} column ${cellState.column}`
      );
  });

  return (
    <div
      className={`flex-item ${cellState.className}`}
      style={styleFlexItem}
      onMouseOver={() => gameStateDispatch({ type: "cell-over", row, column })}
      onMouseOut={() => gameStateDispatch({ type: "cell-out", row, column })}
      onClick={() => gameStateDispatch({ type: "cell-select", row, column })}
    />
  );
};

export default Cell;
