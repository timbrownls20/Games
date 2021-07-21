/* eslint-disable react/prop-types */
import React from "react";
import utils from "./utils";
import Cell from "./cell";
import useInterval from "./hooks/useInterval";

const Grid = ({ gridSettingState }) => {
  const { rows, columns, zoom, margin } = gridSettingState;

  //.. calculate from cell size
  const height = zoom;
  const width = zoom * columns;
  const styleContainer = { width: `${width}px`, height: `${height}px` };

  //let tick = 0;
  useInterval(() => {
    // tick++;
    // if (tick > max) tick = 1;
    // let activeCellState = gameState[tick][tick];
    // let newCellState = {
    //   ...activeCellState,
    //   selected: true,
    //   className: "cell-select",
    // };
    // gameState[tick][tick] = newCellState;
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
