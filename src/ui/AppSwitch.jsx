import React from 'react';
import {FormControl, FormLabel, Switch} from "@chakra-ui/react"

const AppSwitch = (props) => {
    const {id, label, name, placeholder, value, options, isInvalid, onChange} = props
    return (
        <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
                {label}
            </FormLabel>
            <Switch id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e)}
                    isInvalid={isInvalid}
                    size="md" />
        </FormControl>
    );
};

export default AppSwitch;
