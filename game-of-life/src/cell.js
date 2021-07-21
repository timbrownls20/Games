/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from "react";
import ConfigContext from "./context/configContext";
import { GlobalContext } from "./context/globalContext";

const Cell = ({ margin, row, column }) => {
  const config = useContext(ConfigContext);
  const { gameState, gameStateDispatch } = useContext(GlobalContext);
  const cellState = gameState[row][column];

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
      onMouseOver={() => gameStateDispatch({ type: "mouseOver", row, column })}
      onMouseOut={() => gameStateDispatch({ type: "mouseOut", row, column })}
      onClick={() => gameStateDispatch({ type: "click", row, column })}
    />
  );
};

export default Cell;
