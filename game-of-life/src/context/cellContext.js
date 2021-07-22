import React, {useContext, useMemo} from "react";
import { GlobalContext } from "./globalContext";

export const CellContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const CellProvider = ({ children, row, column }) => {

  const {
    getCellState,
    gameStateDispatch,
  } = useContext(GlobalContext)

  const cellStateIn = getCellState(row, column);
  const cellState = useMemo(() => cellStateIn, [cellStateIn]);

  const provider = {
    cellState,
    gameStateDispatch
  };

  return (
    <CellContext.Provider value={provider}>{children}</CellContext.Provider>
  );
};
