import React from 'react';
import {Input, Text} from "@chakra-ui/react"

const AppInput = (props) => {
    const {id, label, placeholder, value, isInvalid, type,onChange} = props
    return (
        <>
            <Text mb="8px">{label}</Text>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                size="md"
                value={value}
                isInvalid={isInvalid}
                onChange={(e) => onChange(e)}
            />
        </>
    );
};

export default AppInput;
