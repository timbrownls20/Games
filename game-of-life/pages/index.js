import React from "react";
import App from "../src/components/app";
import { GlobalProvider } from "../src/context/globalContext";

const Index = () => {
  
  return (
      <GlobalProvider>
      <App />
      </GlobalProvider>
  );
};

export default Index;
