import React, {useContext} from "react";
import { GlobalContext } from "./globalContext";

export const CellContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const CellProvider = ({ children, row, column }) => {

  const {
    getCellState,
    gameStateDispatch,
  } = useContext(GlobalContext)

  const cellState = getCellState(row, column);
  
  const provider = {
    cellState,
    gameStateDispatch
  };

  return (
    <CellContext.Provider value={provider}>{children}</CellContext.Provider>
  );
};
