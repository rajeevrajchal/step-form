import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import TaxForm from "./views/TaxForm";

const App = () => {
    return (
        <ChakraProvider>
            <TaxForm/>
        </ChakraProvider>
    );
};

export default App;
