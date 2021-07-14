/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const Cell = ({
  margin,
  cellState,
  notify,
  classInitial,
  classOver,
  classSelect,
}) => {
  const styleFlexItem = { margin: `${margin}px` };

  function reducer(action) {
    let newState = { ...cellState };

    switch (action.type) {
      case "mouseOver":
        if (classOver) newState.className = classOver;
        break;
      case "mouseOut":
        if (classOver)
          newState.className = cellState.selected ? classSelect : classInitial;
        break;
      case "click":
        if (classSelect) {
          newState.className = cellState.selected ? classInitial : classSelect;
          newState.selected = !newState.selected;
          notify(newState);
        }
        break;
      default:
    }

    return newState;
  }

  return (
    <div
      className={`flex-item ${cellState.className}`}
      style={styleFlexItem}
      onMouseOver={() => reducer({ type: "mouseOver" })}
      onMouseOut={() => reducer({ type: "mouseOut" })}
      onClick={() => reducer({ type: "click" })}
    />
  );
};

export default Cell;
