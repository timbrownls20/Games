import React from "react";
import App from "../src/app";
import ConfigContext from "../src/context/configContext";
import config from "../src/config";

const Index = () => {
  
  return (
    <ConfigContext.Provider value={config}>
      <App />
    </ConfigContext.Provider>
  );
};

export default Index;
