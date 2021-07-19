  import React from 'react';

  const gridSettings = ({gridState, dispatch}) => {

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
            value={gridState.columns}
            onChange={(e) => {
              dispatch({type:'set-columns', value:parseInt(e.target.value)});
            }}
          />
          <small className="mx-2">rows</small>
          <input
            type="number"
            step="5"
            min="0"
            className="form-control"
            placeholder="number of rows"
            value={gridState.rows}
            onChange={(e) => {
              dispatch({type:'set-rows', value:parseInt(e.target.value)});
            }}
          />
          <small className="mx-2">zoom</small>
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="zoom"
            value={gridState.zoom}
            onChange={(e) => {
              dispatch({type:'set-zoom', value:parseInt(e.target.value)});
            }}
          />
          <small className="mx-2">margin</small>
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="margin px"
            value={gridState.margin}
            onChange={(e) => {
              dispatch({type:'set-margin', value:parseInt(e.target.value)});
            }}
          />
          <small className="mx-2">is square</small>
          <input
            type="checkbox"
            className="form-check-input"
            placeholder="is square"
            checked={gridState.isSquare}
            onChange={(e) => {
              
              console.log(e.target);

              dispatch({type:'set-isSquare', value:e.target.checked});
            }}
          />
        </div>
      </form>
      </div>
    )

  }

  export default gridSettings;