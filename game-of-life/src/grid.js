import React, { useState } from "react";
import utils from "./utils";
import PropTypes from "prop-types";
import Cell from "./cell";

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
  }

  const notify = (cellState) => {
    gameState[cellState.row][cellState.column] = cellState;
    setGameState([...gameState]);
  };
  
  const [gameState, setGameState] = useState(getInitialGameState(max));

  // useEffect(() => {
  //   console.log('dimension changed');
  //   setGameState(getInitialGameState(rows, columns));
  //   //resetInitialGameState(rows, columns);
  // }, [rows, columns]);

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
  max: PropTypes.number
};

export default Grid;
