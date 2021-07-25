import cellUtil from "../../utils/cellUtil";

const gameOfLife = (gameState, gridSettingState, gameStateDispatch) => {
  let arrTransformed = [];

  gameState.filter((row) => {
    row.filter((item) => {
      if (item) {
        let rowUp = item.row <= 1 ? gridSettingState.rows : item.row - 1;
        let rowDown = item.row >= gridSettingState.rows ? 1 : item.row + 1;
        let columnUp =
          item.column <= 1 ? gridSettingState.columns : item.column - 1;
        let columnDown =
          item.column >= gridSettingState.columns ? 1 : item.column + 1;

        let neighbours = [
          { row: rowUp, column: columnUp },
          { row: rowUp, column: item.column },
          { row: rowUp, column: columnDown },
          { row: item.row, column: columnUp },
          { row: item.row, column: columnDown },
          { row: rowDown, column: columnUp },
          { row: rowDown, column: item.column },
          { row: rowDown, column: columnDown },
        ];

        let activeNeighbours = neighbours.reduce((acc, searchItem) => {
          return gameState[searchItem.row][searchItem.column].selected
            ? acc + 1
            : acc;
        }, 0);

        if (item.selected && (activeNeighbours < 2 || activeNeighbours > 3)) {
          addCellToTransform(cellUtil.deselectCell(item));
        } else if (!item.selected && activeNeighbours == 3) {
          addCellToTransform(cellUtil.selectCell(item));
        }
      }
    });
  });

  arrTransformed.filter((element) => {
    gameState[element.row][element.column] = { ...element };
  });

  gameStateDispatch({ type: "set-state", value: gameState });

  function addCellToTransform(cellToAdd) {
    let existingCell = arrTransformed.find(
      (e) => e.column == cellToAdd.column && e.row == cellToAdd.row
    );
    if (existingCell) {
      cellToAdd =
        existingCell.selected && !cellToAdd.selected ? existingCell : cellToAdd;
    }

    arrTransformed.push(cellToAdd);
  }
};

export default gameOfLife;
