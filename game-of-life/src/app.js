import React, { useContext } from "react";
import Grid from "./grid";
import GridSettings from "./gridSettings";
import { GlobalContext } from "./context/globalContext";

const App = () => {
  const { gridSettingState, gridSettingStateDispatch } =
    useContext(GlobalContext);

  return (
    <>
      <div className="container-fluid">
        <div className="game-container">
          <GridSettings
            gridState={gridSettingState}
            dispatch={gridSettingStateDispatch}
          />
          <Grid gridSettingState={gridSettingState} />
        </div>
      </div>
    </>
  );
};

export default App;
