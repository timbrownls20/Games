  import React,{useContext} from 'react';
  import { GlobalContext } from "../context/globalContext";


  const gridSettings = () => {

    const { gridSettingState, gridSettingStateDispatch } = useContext(GlobalContext);

    return (
      <div className="form-panel">
      <form>
        <div className="form-group my-2">
          <small className="mx-2">columns</small>
          <input
            type="number"
            step="5"
            min="0"
            className="form-control"
            placeholder="number of columns"
            value={gridSettingState.columns}
            onChange={(e) => {
              gridSettingStateDispatch({type:'set-columns', value:parseInt(e.target.value)});
            }}
          />
          <small className="mx-2">rows</small>
          <input
            type="number"
            step="5"
            min="0"
            className="form-control"
            placeholder="number of rows"
            value={gridSettingState.rows}
            onChange={(e) => {
              gridSettingStateDispatch({type:'set-rows', value:parseInt(e.target.value)});
            }}
          />
          <small className="mx-2">zoom</small>
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="zoom"
            value={gridSettingState.zoom}
            onChange={(e) => {
              gridSettingStateDispatch({type:'set-zoom', value:parseInt(e.target.value)});
            }}
          />
          <small className="mx-2">margin</small>
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="margin px"
            value={gridSettingState.margin}
            onChange={(e) => {
              gridSettingStateDispatch({type:'set-margin', value:parseInt(e.target.value)});
            }}
          />
          <small className="mx-2">interval</small>
          <input
            type="number"
            min="100"
            step="5"
            className="form-control"
            placeholder="interval (ms)"
            value={gridSettingState.interval}
            onChange={(e) => {
              gridSettingStateDispatch({type:'set-interval', value:parseInt(e.target.value)});
            }}
          />
          <small className="m-2">is square</small>
          <input
            type="checkbox"
            className="form-check-input"
            placeholder="is square"
            checked={gridSettingState.isSquare}
            onChange={(e) => {
              gridSettingStateDispatch({type:'set-isSquare', value:e.target.checked});
            }}
          />
        </div>
        <div>
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              gridSettingStateDispatch({type:'toggle-start'});
            }}
            
          >
          {gridSettingState.isStart ? "Stop" : "Start"}
          </button>
        </div>
      </form>
      </div>
    )

  }

  export default gridSettings;