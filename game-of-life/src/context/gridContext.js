import React from "react";
import useGridState from "../hooks/useGridState";

export const GridContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const GridProvider = ({ children }) => {
  const {
    gameState,
    gameStateDispatch,
    getCellState,
    randomTransformer,
    linearTransformer
  } = useGridState();

  const provider = {
    gameState,
    gameStateDispatch,
    getCellState,
    randomTransformer,
    linearTransformer
  };

  return (
    <GridContext.Provider value={provider}>{children}</GridContext.Provider>
  );
};
