import React, { useState } from "react";
import Grid from "../src/Grid";

const Index = () => {

  const intialState = {
    rows:50,
    columns:50,
    isSquare: true,
    zoom: 15,
    margin: 1
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
          <div className="form-panel">
            <form>
              <div className="form-group my-2">
                <small className="mx-2">columns</small>
                <input
                  type="number"
                  step="5"
                  className="form-control"
                  placeholder="number of columns"
                  value={columns}
                  onChange={(e) => {
                    setColumns(e.target.value);
                    if (isSquare) setRows(e.target.value);
                  }}
                />
                <small className="mx-2">rows</small>
                <input
                  type="number"
                  step="5"
                  className="form-control"
                  placeholder="number of rows"
                  value={rows}
                  onChange={(e) => {
                    setRows(e.target.value);
                    if (isSquare) setColumns(e.target.value);
                  }}
                />
                <small className="mx-2">zoom</small>
                <input
                  type="number"
                  step="1"
                  className="form-control"
                  placeholder="zoom"
                  value={zoom}
                  onChange={(e) => {
                    setZoom(parseInt(e.target.value));
                  }}
                />
                <small className="mx-2">Margin</small>
                <input
                  type="number"
                  className="form-control"
                  placeholder="margin px"
                  value={margin}
                  onChange={(e) => {
                    setMargin(parseInt(e.target.value));
                  }}
                />
                <small className="mx-2">is square</small>
                <input
                  type="checkbox"
                  className="form-check-input"
                  placeholder="is square"
                  checked={isSquare}
                  onChange={(e) => {
                    setIsSquare(e.target.checked);
                    if (e.target.checked) setRows(columns);
                  }}
                />
              </div>
            </form>
          </div>


          <div className="grid-panel">
            <Grid
              dimension={{rows, columns}}
              zoom={zoom}
              margin={margin}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
