import { useContext, useReducer } from "react";
import ConfigContext from "../context/configContext";
import mathsUtil from "../utils/mathsUtil";
import cellUtil from "../utils/cellUtil";

function useAppState(initialState) {
  const config = useContext(ConfigContext);

  const GameReducer = (state, action) => {
    let newState = [...state];

    if (action.row) {
      let cellState = state[action.row][action.column];
      let newCellState = { ...cellState };

      switch (action.type) {
        case "cell-over":
          if (config.Css.CellOver) newCellState.className = config.Css.CellOver;
          if (config.Debug) console.log(JSON.stringify(cellState));
          break;
        case "cell-out":
          if (config.Css.CellOver)
            newCellState.className = cellState.selected
              ? config.Css.CellSelect
              : config.Css.Cell;
          break;
        case "cell-toggle":
          newCellState = cellUtil.toggleCell(cellState, config);
          break;
        default:
      }

      newState[action.row][action.column] = newCellState;
    } else {
      switch (action.type) {
        case "init":
          newState = getInitialGameState(gridSettingState.max);
          break;
        case "set-state":
          newState = [...action.value];
          break;
        default:
      }
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
      case "set-interval":
        return { ...state, interval: action.value };
      case "toggle-start":
        return { ...state, isStarted: !state.isStarted };
      case "increment-session":
        return { ...state, session: state.session + 1 };
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

  const getCellState = (row, column) => {
    return gameState[row] && gameState[row] ? gameState[row][column] : {};
  };

  const [gridSettingState, gridSettingStateDispatch] = useReducer(
    GridSettingsReducer,
    initialState
  );
  const [gameState, gameStateDispatch] = useReducer(
    GameReducer,
    getInitialGameState(gridSettingState.max)
  );

  const randomTransformer = () => {
    let newRow = mathsUtil.random(1, gridSettingState.rows);
    let newColumn = mathsUtil.random(1, gridSettingState.columns);
    gameStateDispatch({ type: "cell-toggle", row: newRow, column: newColumn });
  };

  const oneDirectionTransformer = () => {
    let arrTransformed = [];

    gameState.filter((row) => {
      row.filter((item) => {
        if (item && item.selected) {
          let nextRow = item.row <= 1 ? gridSettingState.rows : item.row - 1;
          let cellUp = gameState[nextRow][item.column];
          arrTransformed.push(cellUtil.toggleCell(cellUp, config));
          arrTransformed.push(cellUtil.toggleCell(item, config));
        }
      });
    });

    arrTransformed.filter((element) => {
      gameState[element.row][element.column] = { ...element };
    });

    gameStateDispatch({ type: "set-state", value: gameState });
  };

  return {
    gridSettingState,
    gridSettingStateDispatch,
    gameState,
    gameStateDispatch,
    getCellState,
    randomTransformer,
    oneDirectionTransformer,
  };
}

export default useAppState;
