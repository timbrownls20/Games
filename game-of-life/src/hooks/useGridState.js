import { useReducer, useContext } from "react";
import cellUtil from "../utils/cellUtil";
import config from "../config/config";
import { GlobalContext } from "../context/globalContext";
import linear from "./transformers/linear";
import random from "./transformers/random";
import gameOfLife from "./transformers/gameOfLife";

function useGridState() {
  const { gridSettingState } = useContext(GlobalContext);

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
        case "cell-select":
          newCellState.selected = true;
          newCellState.className = config.Css.CellSelect;
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

  const randomTransformer = () => random(gridSettingState, gameStateDispatch);
  const linearTransformer = () => linear(gameState, gridSettingState, gameStateDispatch);
  const gameOfLifeTransformer = () => gameOfLife(gameState, gridSettingState, gameStateDispatch);

  return {
    gameState,
    gameStateDispatch,
    getCellState,
    randomTransformer,
    linearTransformer,
    gameOfLifeTransformer
  };
}

export default useGridState;
