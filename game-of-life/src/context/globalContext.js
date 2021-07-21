import React from "react";
import useAppState from "../hooks/useAppState";

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {

    
  const initialState = {
    rows: 5,
    columns: 5,
    max: 1000,
    isSquare: true,
    zoom: 50,
    margin: 1,
  };

    const {
        gridSettingState, gridSettingStateDispatch, gameState, gameStateDispatch
    } = useAppState(initialState);
  
    const provider = {
        gridSettingState, gridSettingStateDispatch, gameState, gameStateDispatch
    };
  
    return (
      <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
    );
  };
