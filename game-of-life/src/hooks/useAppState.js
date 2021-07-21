import { useContext, useReducer } from "react";
import ConfigContext from "../context/configContext";

function useAppState(initialState) {
  const config = useContext(ConfigContext);

  const GameReducer = (state, action) => {
    let cellState = state[action.row][action.column];
    let newCellState = { ...cellState };
    let newState = [...state];
    newState[action.row][action.column] = newCellState;

    switch (action.type) {
      case "cell-cover":
        if (config.Css.CellOver) newCellState.className = config.Css.CellOver;
        if (config.Debug) console.log(JSON.stringify(cellState));
        break;
      case "cell-out":
        if (config.Css.CellOver)
          newCellState.className = cellState.selected
            ? config.Css.CellSelect
            : config.Css.Cell;
        break;
      case "cell-select":
        if (config.Css.CellSelect) {
          newCellState.className = cellState.selected
            ? config.Css.Cell
            : config.Css.CellSelect;
          newCellState.selected = !newCellState.selected;
        }
        break;
      default:
    }

    return newState;
  };

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
      default:
        return state;
    }
  };

  const getInitialGameState = (max) => {
    let gridStateInitial = Array.from({ length: max + 1 }, (_, row) => {
      return Array.from({ length: max + 1 }, (_, column) => {
        if (row == 0 || column == 0) return null;

        return {
          row: row,
          column: column,
          selected: false,
          className: config.Css.Cell,
        };
      });
    });

    return gridStateInitial;
  };

  const [gridSettingState, gridSettingStateDispatch] = useReducer(
    GridSettingsReducer,
    initialState
  );
  const [gameState, gameStateDispatch] = useReducer(
    GameReducer,
    getInitialGameState(gridSettingState.max)
  );

  return {
    gridSettingState,
    gridSettingStateDispatch,
    gameState,
    gameStateDispatch,
  };
}

export default useAppState;
