import React from "react";
import Grid from "./grid";
import GridSettings from "./gridSettings";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="game-container">
          <GridSettings />
          <Grid />
        </div>
      </div>
    </>
  );
};

export default App;
