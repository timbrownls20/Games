import config from "../config/config";

const cellUtil = {

    toggleCell: (cellState) => {
        let newCellState = { ...cellState };
        newCellState.className = cellState.selected
          ? config.Css.Cell
          : config.Css.CellSelect;
        newCellState.selected = !newCellState.selected;
        return newCellState;
      }
}

export default cellUtil;