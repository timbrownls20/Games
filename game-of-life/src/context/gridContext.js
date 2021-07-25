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
    linearTransformer,
    gameOfLifeTransformer
  } = useGridState();

  const provider = {
    gameState,
    gameStateDispatch,
    getCellState,
    randomTransformer,
    linearTransformer,
    gameOfLifeTransformer
  };

  return (
    <GridContext.Provider value={provider}>{children}</GridContext.Provider>
  );
};
