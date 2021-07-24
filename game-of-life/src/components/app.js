import React, { useContext } from "react";
import Grid from "./grid";
import GridSettings from "./gridSettings";
import { GlobalContext } from "../context/globalContext";

const App = () => {

  const {gridSettingState} = useContext(GlobalContext);
  
  console.log(JSON.stringify(gridSettingState))

  return (
    <>
      <div className="container-fluid">
        <div className="game-container">
          <GridSettings key={gridSettingState.session} />
          <Grid />
        </div>
      </div>
    </>
  );
};

export default App;
