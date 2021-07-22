/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import utils from "../utils";
import Cell from "./cell";
import useInterval from "../hooks/useInterval";
import { GlobalContext } from "../context/globalContext";

const Grid = ({ gridSettingState }) => {
  const { rows, columns, zoom, margin, isStart } = gridSettingState;

  const {randomTransformer} = useContext(GlobalContext);

  //.. calculate from cell size
  const height = zoom;
  const width = zoom * columns;
  const styleContainer = { width: `${width}px`, height: `${height}px` };

  useInterval(randomTransformer, isStart ? 1000 : null);

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
