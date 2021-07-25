import config from "../config/config";

const cellUtil = {
  toggleCell: (cellState) => {
    let newCellState = { ...cellState };
    newCellState.className = cellState.selected
      ? config.Css.Cell
      : config.Css.CellSelect;
    newCellState.selected = !newCellState.selected;
    return newCellState;
  },

  selectCell: (cell) => {
    let newCellState = { ...cell };
    newCellState.selected = true;
    newCellState.className = config.Css.CellSelect;
    return newCellState;
  },

  deselectCell: (cell) => {
    let newCellState = { ...cell };
    newCellState.selected = false;
    newCellState.className = config.Css.Cell;
    return newCellState;
  },
};

export default cellUtil;
