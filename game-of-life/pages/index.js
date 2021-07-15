import React, { useState } from "react";
import Grid from "../src/Grid";
import GridSettings from "../src/gridSettings";

const Index = () => {
  const initialState = {
    rows: 10,
    columns: 10,
    max: 10,
    isSquare: true,
    zoom: 50,
    margin: 1,
  };

  const [columns, setColumns] = useState(initialState.columns);
  const [rows, setRows] = useState(initialState.rows);
  const [isSquare, setIsSquare] = useState(initialState.isSquare);
  const [zoom, setZoom] = useState(initialState.zoom);
  const [margin, setMargin] = useState(initialState.margin);

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
          <Grid rows={rows} columns={columns} zoom={zoom} margin={margin} max={initialState.max} />
        </div>
      </div>
    </>
  );
};

export default Index;
