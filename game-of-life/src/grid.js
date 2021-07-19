import React, { useCallback } from "react";
import PropTypes from "prop-types";

import utils from "./utils";
import Cell from "./cell";
import useInterval from "./hooks/useInterval";

const Grid = ({ rows, columns, max, zoom, margin }) => {
  //.. calculate from cell size
  const height = zoom;
  const width = zoom * columns;
  const styleContainer = { width: `${width}px`, height: `${height}px` };

  const getInitialGameState = (max) => {
    let gameStateInitial = Array.from({ length: max + 1 }, (_, row) => {
      return Array.from({ length: max + 1 }, (_, column) => {
        if (row == 0 || column == 0) return null;

        return {
          row: row,
          column: column,
          selected: false,
          className: "cell",
        };
      });
    });

    return gameStateInitial;
  };
  const gameState = getInitialGameState(max);

  const notify = useCallback(
    (cellState) => {
      let newCellState = { ...cellState, selected: true };
      gameState[cellState.row][cellState.column] = newCellState;
    },
    [gameState]
  );

  let tick = 0;
  useInterval(() => {
    tick++;
    if (tick > max) tick = 1;
    let activeCellState = gameState[tick][tick];
    let newCellState = {
      ...activeCellState,
      selected: true,
      className: "cell-select",
    };
    gameState[tick][tick] = newCellState;
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
                    gameState={gameState[row][column]}
                    notify={notify}
                    classInitial="cell"
                    classOver="cell-over"
                    classSelect="cell-select"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        {/* Tick {tick} */}
        {/* {JSON.stringify(gameState)} */}
      </div>
    </>
  );
};

Grid.propTypes = {
  dimension: PropTypes.object,
  zoom: PropTypes.number,
  margin: PropTypes.number,
  rows: PropTypes.number,
  columns: PropTypes.number,
  max: PropTypes.number,
};

export default Grid;
