/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import mathsUtils from "../utils/mathsUtil";
import Cell from "./cell";
import useInterval from "../hooks/useInterval";
import { GlobalContext } from "../context/globalContext";
import { GridContext } from "../context/gridContext";

const Grid = () => {
  
  const { gridSettingState } = useContext(GlobalContext);

  const {
    linearTransformer,
    gameState,
    gameStateDispatch,
  } = useContext(GridContext);

  const { rows, columns, zoom, margin, isStarted, interval } = gridSettingState;

  //.. calculate from cell size
  const height = zoom;
  const width = zoom * columns;
  const styleContainer = { width: `${width}px`, height: `${height}px` };

  useInterval(linearTransformer, isStarted ? interval : null);

  return (
    <>
      <div className="grid-panel">
        {mathsUtils.range(1, rows).map((row) => {
          return (
            <div key={row} className="flex-container" style={styleContainer}>
              {mathsUtils.range(1, columns).map((column) => {
                let cellState = gameState[row][column];

                return (
                  <Cell
                    margin={margin}
                    row={row}
                    column={column}
                    className={cellState.className}
                    dispatch={gameStateDispatch}
                    key={`${row}-${column}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
