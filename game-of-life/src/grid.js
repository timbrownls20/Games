/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import utils from "./utils";
import Cell from "./cell";
import useInterval from "./hooks/useInterval";
import { GlobalContext } from "./context/globalContext";

const Grid = ({ gridSettingState }) => {
  const { rows, columns, zoom, margin } = gridSettingState;

  const {gameStateDispatch} = useContext(GlobalContext);

  //.. calculate from cell size
  const height = zoom;
  const width = zoom * columns;
  const styleContainer = { width: `${width}px`, height: `${height}px` };

  useInterval(() => {
    let newRow = utils.random(1, rows);
    let newColumn = utils.random(1, columns);
    gameStateDispatch({type:"cell-select", row: newRow, column:newColumn})
  }, 1000);

  return (
    <>
      <div className="grid-panel">
        {utils.range(1, rows).map((row) => {
          return (
            <div key={row} className="flex-container" style={styleContainer}>
              {utils.range(1, columns).map((column) => {
                return (
                  <Cell
                    key={`${row}-${column}`}
                    margin={margin}
                    row={row}
                    column={column}
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
