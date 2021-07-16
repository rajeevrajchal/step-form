import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import TaxForm from "./views/TaxForm";
import DummyForm from "./views/DummyForm";
import "./App.css";
import ByFormik from "./views/ByFormik";

const App = () => {
  return (
    <ChakraProvider>
      {/* <DummyForm /> */}
      {/* <TaxForm/> */}
      <ByFormik />
    </ChakraProvider>
  );
};

export default App;
