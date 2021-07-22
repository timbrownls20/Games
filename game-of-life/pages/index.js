import React from "react";
import App from "../src/components/app";
import ConfigContext from "../src/context/configContext";
import { GlobalProvider } from "../src/context/globalContext";
import config from "../src/config/config";

const Index = () => {
  
  return (
    <ConfigContext.Provider value={config}>
      <GlobalProvider>
      <App />
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default Index;
