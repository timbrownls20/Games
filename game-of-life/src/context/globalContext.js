import React from "react";
import useAppState from "../hooks/useAppState";
import initialState from "../config/initialState";

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const {
    gridSettingState,
    gridSettingStateDispatch,
    gameState,
    gameStateDispatch,
    getCellState,
    randomTransformer
  } = useAppState(initialState);

  const provider = {
    gridSettingState,
    gridSettingStateDispatch,
    gameState,
    gameStateDispatch,
    getCellState,
    randomTransformer
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
