import React from "react";
import { useFormik } from "formik";
import jsonschema from "../schema/formik-test";
import RecursiveContainer from "../components/RecursiveFormElement";
import { Button, Container, Box } from "@chakra-ui/react";
const ByFormik = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <Container>
      <Box marginY={10}>
        <RecursiveContainer config={jsonschema} formik={formik} />
        <Button colorScheme="blue" onClick={formik.handleSubmit} marginY={4}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ByFormik;
