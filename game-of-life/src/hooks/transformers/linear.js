import cellUtil from "../../utils/cellUtil";

const linear = (gameState, gridSettingState, gameStateDispatch) => {
  let arrTransformed = [];

  gameState.filter((row) => {
    row.filter((item) => {
      if (item && item.selected) {
        let nextRow = item.row <= 1 ? gridSettingState.rows : item.row - 1;
        let cellUp = gameState[nextRow][item.column];

        addCellToTransform(cellUtil.selectCell(cellUp));
        addCellToTransform(cellUtil.deselectCell(item));
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
      console.log(
        `merge cell ${JSON.stringify(existingCell)} into ${JSON.stringify(
          cellToAdd
        )}`
      );

      cellToAdd =
        existingCell.selected && !cellToAdd.selected ? existingCell : cellToAdd;

      console.log(
        `merged cell ${JSON.stringify(existingCell)} into ${JSON.stringify(
          cellToAdd
        )}`
      );
    }

    arrTransformed.push(cellToAdd);
  }
};

export default linear;
