/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import mathsUtils from "../utils/mathsUtil";
import Cell from "./cell";
import useInterval from "../hooks/useInterval";
import { GlobalContext } from "../context/globalContext";
import { CellProvider } from "../context/cellContext";

const Grid = () => {
  const { oneDirectionTransformer, gridSettingState } = useContext(GlobalContext);
  const { rows, columns, zoom, margin, isStarted, interval } = gridSettingState;

  //.. calculate from cell size
  const height = zoom;
  const width = zoom * columns;
  const styleContainer = { width: `${width}px`, height: `${height}px` };

  useInterval(oneDirectionTransformer, isStarted ? interval : null);

  return (
    <>
      <div className="grid-panel">
        {mathsUtils.range(1, rows).map((row) => {
          return (
            <div key={row} className="flex-container" style={styleContainer}>
              {mathsUtils.range(1, columns).map((column) => {
                return (
                  <CellProvider
                    row={row}
                    column={column}
                    key={`${row}-${column}`}
                  >
                    <Cell margin={margin} row={row} column={column} />
                  </CellProvider>
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
