import React, {useEffect, useState} from 'react';
import formElement from '../schema/DummyFormSchema.json'
import {Text,Container} from "@chakra-ui/react";
import {map} from 'lodash'
import FormElement from "../components/FormElement";
const JsonForm = () => {
    const [element, setElement] = useState(null)
    useEffect(() => {
        setElement(formElement[0])
    },[])
    const {
        page_label,
        fields
    } = element ?? {}
    return (
        <Container>
            <Text>{page_label}</Text>
            {
                map(fields, (field) => (
                    <FormElement key={field.id} field={field}/>
                ))
            }
        </Container>
    );
};

export default JsonForm;
