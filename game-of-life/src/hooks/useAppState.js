import { useReducer } from "react";

function useAppState(initialState) {

  const GridSettingsReducer = (state, action) => {
    switch (action.type) {
      case "set-rows":
        return state.isSquare == true
          ? { ...state, columns: action.value, rows: action.value }
          : { ...state, rows: action.value };
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
      case "set-interval":
        return { ...state, interval: action.value };
      case "toggle-start":
        return { ...state, isStarted: !state.isStarted };
      case "increment-session":
        return { ...state, session: state.session + 1 };
      default:
        return {...state};
    }
  };

  const [gridSettingState, gridSettingStateDispatch] = useReducer(
    GridSettingsReducer,
    initialState
  );

  return {
    gridSettingState,
    gridSettingStateDispatch
  };
}

export default useAppState;
