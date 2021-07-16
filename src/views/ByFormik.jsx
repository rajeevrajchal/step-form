import React from "react";
import { useFormik } from "formik";
import jsonschema from "../schema/formik-test";
import RecursiveContainer from "../components/RecursiveFormElement";
import { Container } from "@chakra-ui/react";
const ByFormik = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <RecursiveContainer config={jsonschema} formik={formik} />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default ByFormik;
