import React, { useState } from "react";
import Grid from "../src/Grid";
import GridSettings from "../src/gridSettings";

const Index = () => {
  const intialState = {
    rows: 50,
    columns: 50,
    isSquare: true,
    zoom: 15,
    margin: 1,
  };

  const [columns, setColumns] = useState(intialState.columns);
  const [rows, setRows] = useState(intialState.rows);
  const [isSquare, setIsSquare] = useState(intialState.isSquare);
  const [zoom, setZoom] = useState(intialState.zoom);
  const [margin, setMargin] = useState(intialState.margin);

  return (
    <>
      <div className="container-fluid">
        <div className="game-container">
          <GridSettings rowState={[rows, setRows]}
                        columnState={[columns, setColumns]}
                        isSquareState={[isSquare, setIsSquare]}
                        zoomState={[zoom, setZoom]}
                        marginState={[margin, setMargin]}
                         />
          <Grid dimension={{ rows, columns }} zoom={zoom} margin={margin} />
        </div>
      </div>
    </>
  );
};

export default Index;
