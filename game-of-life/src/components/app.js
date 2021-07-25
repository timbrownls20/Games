import React, { useContext } from "react";
import Grid from "./grid";
import GridSettings from "./gridSettings";
import { GlobalContext } from "../context/globalContext";
import { GridProvider } from "../context/gridContext";

const App = () => {

  const {gridSettingState} = useContext(GlobalContext);
  
  return (
    <>
      <div className="container-fluid">
        <div className="game-container">
        <GridProvider>
            <GridSettings key={gridSettingState.session} />
            <Grid />
          </GridProvider>
        </div>
      </div>
    </>
  );
};

export default App;
