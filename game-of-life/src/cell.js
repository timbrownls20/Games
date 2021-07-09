import React, { useReducer } from "react";

// eslint-disable-next-line react/prop-types
const Cell = ({ margin, classInitial, classOut, classOver, classSelect }) => {

  const styleFlexItem = { margin: `${margin}px` };
  const [cellState, dispatch] = useReducer(reducer, {
    className: classInitial,
    selected: false
  });

  function reducer(state, action) {

    let newState = {
      className: state.className,
      selected: state.selected
    };

    console.log(newState);

    switch (action.type) {
      case "mouseOver":
        if (classOver) newState.className = classOver;
        break;
      case "mouseOut":
        if (classOut) newState.className = state.selected ? classSelect : classInitial;
        break;
      case "click":
        if (classSelect) {
          newState.className = state.selected ? classInitial : classSelect;
          newState.selected = !newState.selected;
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
      onMouseOver={() => dispatch({ type: "mouseOver" })}
      onMouseOut={() => dispatch({ type: "mouseOut" })}
      onClick={() => dispatch({ type: "click" })}
    />
  );
};

export default Cell;
