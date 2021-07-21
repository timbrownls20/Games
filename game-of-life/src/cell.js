/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useMemo } from "react";
import ConfigContext from "./context/configContext";
import { GlobalContext} from "./context/globalContext";

const Cell = ({ margin, row, column }) => {
  const config = useContext(ConfigContext);
  const { getCellState, gameStateDispatch } = useContext(GlobalContext);
  const cellState = useMemo(() => getCellState(row, column));

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
