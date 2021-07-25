import cellUtil from "../../utils/cellUtil";

const oneDirection = (gameState, gridSettingState, gameStateDispatch) => {
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

export default oneDirection;
