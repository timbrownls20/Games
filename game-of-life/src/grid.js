import React from "react";
import utils from "./utils";
import PropTypes from "prop-types";
import Cell from "./cell";

const Grid = ({ dimension, cellSize, margin }) => {
  const dimensionX = 0;
  const dimensionY = 1;

  //.. calculate from cell size
  const height = cellSize;
  const width = cellSize * dimension[dimensionX];

  const styleContainer = { width: `${width}px`, height: `${height}px` };

  return (
    <div>
      {utils.range(1, dimension[dimensionY]).map((row) => {
        return (
          <div key={row} className="flex-container" style={styleContainer}>
            {utils.range(1, dimension[dimensionX]).map((column) => {
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
  dimension: PropTypes.array,
  cellSize: PropTypes.number,
  margin: PropTypes.number,
};

export default Grid;
