import React from 'react';
import {Button, Flex} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import {FormStep} from "../../enum/FormStep";

const InitialForm = (props) => {
    const {changeStep} = props
    return (
        <Flex justifyContent='center' marginY={15}>
            <Button colorScheme="green" onClick={() => changeStep(FormStep.TaxID)}>Finish My 2021 Tax
                Return</Button>
        </Flex>
    );
};

InitialForm.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default InitialForm;
