import React from "react";
import { Text, Radio, Stack } from "@chakra-ui/react";
import { map } from "lodash";

const AppRadio = (props) => {
  const { id, label, name, value, options, isInvalid, onChange } = props;
  return (
    <>
      <Text>{label}</Text>
      <Stack direction="row">
        {map(options, (item, key) => (
          <Radio
            key={key}
            id={id}
            name={name}
            onChange={(e) => onChange(e)}
            value={value}
            isInvalid={isInvalid}
          >
            {item.label}
          </Radio>
        ))}
      </Stack>
    </>
  );
};

export default AppRadio;
