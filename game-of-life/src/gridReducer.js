const GridReducer = (state, action) => {
  switch (action.type) {
    case "set-rows":
      return { ...state, rows: action.value };
    case "set-columns":
      return state.isSquare == true
        ? { ...state, columns: action.value, rows: action.value }
        : { ...state, columns: action.value };
    case "set-isSquare":
      return action.value == true
        ? { ...state, isSquare: action.value, rows: state.columns }
        : { ...state, isSquare: action.value };
    case "set-zoom":
      return { ...state, zoom: action.value };
    case "set-margin":
      return { ...state, margin: action.value };
    default:
      return state;
  }
};

export default GridReducer;
