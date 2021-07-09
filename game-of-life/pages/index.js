import React, { useState } from "react";
import Grid from "../src/Grid";

const Index = () => {

  const [columns, setColumns] = useState(10);
  const [rows, setRows] = useState(50);
  const [isSquare, setIsSquare] = useState(true);
  const [cellSize, setCellSize] = useState(15);
  const [margin, setMargin] = useState(1);

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
                  value={cellSize}
                  onChange={(e) => {
                    setCellSize(parseInt(e.target.value));
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
              cellSize={cellSize}
              margin={margin}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
