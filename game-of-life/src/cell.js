/* eslint-disable react/prop-types */
import React, { useEffect, useReducer } from "react";

// eslint-disable-next-line react/prop-types
const Cell = ({
  margin,
  gameState,
  notify,
  classInitial,
  classOver,
  classSelect,
}) => {
  const styleFlexItem = { margin: `${margin}px` };

  function reducer(state, action) {
    let newState = { ...state };

    switch (action.type) {
      case "mouseOver":
        if (classOver) newState.className = classOver;
        break;
      case "mouseOut":
        if (classOver)
          newState.className = state.selected ? classSelect : classInitial;
        break;
      case "click":
        if (classSelect) {
          newState.className = state.selected ? classInitial : classSelect;
          newState.selected = !newState.selected;
          notify(newState);
        }
        break;
      default:
    }

    return newState;
  }

  useEffect(() => {
    console.log(`cell render row ${cellState.row} column ${cellState.column}`);
  });

  const [cellState, dispatch] = useReducer(reducer, gameState);

  return (
    <div
      className={`flex-item ${cellState.className}`}
      style={styleFlexItem}
      onMouseOver={() => dispatch({ type: "mouseOver" })}
      onMouseOut={() => dispatch({ type: "mouseOut" })}
      onClick={() => dispatch({ type: "click" })}
    />
  );
};

export default Cell;
