import React, { useState } from "react";
import Grid from "../src/Grid";

const Index = () => {

  const [dimensionX, setDimensionX] = useState(50);
  const [dimensionY, setDimensionY] = useState(50);
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
                  value={dimensionX}
                  onChange={(e) => {
                    setDimensionX(e.target.value);
                    if (isSquare) setDimensionY(e.target.value);
                  }}
                />
                <small className="mx-2">rows</small>
                <input
                  type="number"
                  step="5"
                  className="form-control"
                  placeholder="number of rows"
                  value={dimensionY}
                  onChange={(e) => {
                    setDimensionY(e.target.value);
                    if (isSquare) setDimensionX(e.target.value);
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
                    if (e.target.checked) setDimensionY(dimensionX);
                  }}
                />
              </div>
            </form>
          </div>


          <div className="grid-panel">
            <Grid
              dimension={[dimensionX, dimensionY]}
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
