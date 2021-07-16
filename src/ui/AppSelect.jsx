import React from "react";
import { Select, Text } from "@chakra-ui/react";
import { map } from "lodash";

const AppSelect = (props) => {
  const { id, label, name, placeholder, value, options, isInvalid, onChange } =
    props;
  return (
    <>
      <Text>{label}</Text>
      <Select
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        isInvalid={isInvalid}
      >
        {map(options, (item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </>
  );
};

export default AppSelect;
