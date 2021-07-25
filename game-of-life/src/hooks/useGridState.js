import { useReducer, useContext } from "react";
import mathsUtil from "../utils/mathsUtil";
import cellUtil from "../utils/cellUtil";
import config from "../config/config";
import {GlobalContext} from '../context/globalContext';

function useGridState() {

const {gridSettingState } = useContext(GlobalContext);

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
          arrTransformed.push(cellUtil.toggleCell(cellUp));
          arrTransformed.push(cellUtil.toggleCell(item));
        }
      });
    });

    arrTransformed.filter((element) => {
      gameState[element.row][element.column] = { ...element };
    });

    gameStateDispatch({ type: "set-state", value: gameState });
  };

  return {
    gameState,
    gameStateDispatch,
    getCellState,
    randomTransformer,
    oneDirectionTransformer,
  };
}

export default useGridState;
