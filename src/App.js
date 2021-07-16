import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import ByFormik from "./views/ByFormik";

const App = () => {
  return (
    <ChakraProvider>
      <ByFormik />
    </ChakraProvider>
  );
};

export default App;
