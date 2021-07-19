import React, {  useReducer } from "react";
import Grid from "../src/Grid";
import GridSettings from "../src/gridSettings";
import GridReducer from "../src/gridReducer";

const Index = () => {
  const initialState = {
    rows: 5,
    columns: 5,
    max: 1000,
    isSquare: true,
    zoom: 50,
    margin: 1,
  };

  const [gridState, dispatch] = useReducer(GridReducer, initialState);

  return (
    <>
      <div className="container-fluid">
        <div className="game-container">
          <GridSettings gridState={gridState}
                         dispatch={dispatch}/>
          <Grid rows={gridState.rows} columns={gridState.columns} zoom={gridState.zoom} margin={gridState.margin} max={initialState.max} />
        </div>
      </div>
    </>
  );
};

export default Index;
