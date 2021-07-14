import React, { useState } from "react";
import utils from "./utils";
import PropTypes from "prop-types";
import Cell from "./cell";

const Grid = ({ rows, columns, zoom, margin }) => {
  
  //.. calculate from cell size
  const height = zoom;
  const width = zoom * columns;
  const styleContainer = { width: `${width}px`, height: `${height}px` };

  var gameStateInitial = Array.from({ length: rows + 1 }, (_, row) => {
    return Array.from({ length: columns + 1 }, (_, column) => {
      if (row == 0 || column == 0) return null;

      return {
        row: row,
        column: column,
        selected: false,
        className: "cell",
      };
    });
  });

  const [gameState, setGameState] = useState(gameStateInitial);

  const notify = (cellState) => {
    gameState[cellState.row][cellState.column] = cellState;
    setGameState([...gameState]);
  };

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
                    cellState={gameState[row][column]}
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
    </>
  );
};

Grid.propTypes = {
  dimension: PropTypes.object,
  zoom: PropTypes.number,
  margin: PropTypes.number,
  rows: PropTypes.number,
  columns: PropTypes.number,
};

export default Grid;
