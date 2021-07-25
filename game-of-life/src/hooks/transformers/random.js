import mathsUtil from "../../utils/mathsUtil";

  const randomTransformer = (gridSettingState, gameStateDispatch) => {
    let newRow = mathsUtil.random(1, gridSettingState.rows);
    let newColumn = mathsUtil.random(1, gridSettingState.columns);
    gameStateDispatch({ type: "cell-toggle", row: newRow, column: newColumn });
  };

  export default randomTransformer;
