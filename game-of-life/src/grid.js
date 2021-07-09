import React from "react";
import utils from "./utils";
import PropTypes from "prop-types";
import Cell from "./cell";

const Grid = ({ dimension, cellSize, margin }) => {

  console.log(dimension);

  const {rows, columns} = dimension;

  //.. calculate from cell size
  const height = cellSize;
  const width = cellSize * columns;
  const styleContainer = { width: `${width}px`, height: `${height}px` };

  return (
    <div>
      {utils.range(1, rows).map((row) => {
        return (
          <div key={row} className="flex-container" style={styleContainer}>
            {utils.range(1, columns).map((column) => {
              return <Cell key={`${row}-${column}`} 
                            margin={margin} 
                            classInitial="cell"
                            classOver="cell-over"
                            classOut="cell"
                            classSelect="cell-select"
                            />;
            })}
          </div>
        );
      })}
    </div>
  );
};

Grid.propTypes = {
  dimension: PropTypes.object,
  cellSize: PropTypes.number,
  margin: PropTypes.number,
};

export default Grid;
