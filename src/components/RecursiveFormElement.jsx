import React from "react";
import AppInput from "../ui/AppInput";

const RecursiveContainer = ({ config, formik }) => {
  const builder = (individualConfig) => {
    const { field, label } = individualConfig;
    switch (individualConfig.type) {
      case "text":
        return (
          <AppInput
            id={field}
            label={label}
            name={field}
            type="text"
            onChange={formik.handleChange}
            isInvalid={formik.errors[field] ? true : false}
          />
        );
      case "number":
        return (
          <AppInput
            id={field}
            label={label}
            name={field}
            type="number"
            value={formik.values[field]}
            onChange={formik.handleChange}
            isInvalid={formik.errors[field] ? true : false}
          />
        );
      case "array":
        return (
          <RecursiveContainer
            config={individualConfig.children || []}
            formik={formik}
          />
        );
      default:
        return <div>Unsupported field</div>;
    }
  };

  return (
    <>
      {config.map((c) => {
        return builder(c);
      })}
    </>
  );
};

export default RecursiveContainer;
