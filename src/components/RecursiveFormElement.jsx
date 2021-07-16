import React from "react";
import AppInput from "../ui/AppInput";
import AppRadio from "../ui/AppRadio";
import AppSelect from "../ui/AppSelect";
import AppSwitch from "../ui/AppSwitch";
import AppCheckbox from "../ui/AppCheckbox";

const RecursiveContainer = ({ config, formik }) => {
  const builder = (individualConfig, key) => {
    console.log({ individualConfig });
    const { field, label, options, children, defaultActive } = individualConfig;
    switch (individualConfig.type) {
      case "text":
        return (
          <div key={label + key}>
            <AppInput
              id={field}
              label={label}
              name={field}
              type="text"
              onChange={formik.handleChange}
              isInvalid={formik.errors[field] ? true : false}
            />
          </div>
        );
      case "number":
        return (
          <div key={label + key}>
            <AppInput
              id={field}
              label={label}
              name={field}
              type="number"
              value={formik.values[field]}
              onChange={formik.handleChange}
              isInvalid={formik.errors[field] ? true : false}
            />
          </div>
        );
      case "select":
        return (
          <div key={label + key}>
            <AppSelect
              id={field}
              name={field}
              label={label}
              onChange={formik.handleChange}
              options={options}
              isInvalid={formik.errors[field] ? true : false}
            />
          </div>
        );
      case "radio":
        return (
          <div key={label + key}>
            <AppRadio
              id={field}
              name={field}
              label={label}
              onChange={formik.handleChange}
              options={options}
              isInvalid={formik.errors[field] ? true : false}
            />
            {children && children.length ? (
              <RecursiveContainer config={children || []} formik={formik} />
            ) : (
              ""
            )}
          </div>
        );
      case "switch":
        return (
          <div key={label + key}>
            <AppSwitch
              label={label}
              id={field}
              name={field}
              value={formik.values[field]}
              onChange={formik.handleChange}
              options={options}
              isInvalid={formik.errors[field] ? true : false}
            />
            {defaultActive &&
            defaultActive &&
            formik.values[field] === true &&
            children &&
            children.length ? (
              <RecursiveContainer config={children || []} formik={formik} />
            ) : (
              ""
            )}
          </div>
        );
      case "checkbox":
        return (
          <div key={label + key}>
            <AppCheckbox
              label={label}
              id={field}
              name={field}
              value={formik.values[field]}
              onChange={formik.handleChange}
              options={options}
              isInvalid={formik.errors[field] ? true : false}
            />
          </div>
        );
      case "array":
        return (
          <div key={key}>
            <RecursiveContainer config={children || []} formik={formik} />
          </div>
        );
      default:
        return <div>Unsupported field</div>;
    }
  };

  return (
    <>
      {config.map((c, key) => {
        return builder(c, key);
      })}
    </>
  );
};

export default RecursiveContainer;
