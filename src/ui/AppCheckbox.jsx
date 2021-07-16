import React from "react";
import { map } from "lodash";
import { Stack, Checkbox, Text } from "@chakra-ui/react";

const AppCheckbox = (props) => {
  const { id, label, name, options, value, isInvalid, onChange } = props;
  return (
    <>
      <Text>{label}</Text>
      <Stack spacing={10} direction="row">
        {map(options, (item, key) => (
          <Checkbox
            id={id}
            key={key}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            isInvalid={isInvalid}
            size="md"
          >
            {item.label}
          </Checkbox>
        ))}
      </Stack>
    </>
  );
};

export default AppCheckbox;
