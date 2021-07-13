import React from 'react';
import StepperLayout from "../../hoc/StepperLayout";
import {Text} from "@chakra-ui/react";
import PropTypes from "prop-types";
import InitialForm from "./InitialForm";
import {FormStep} from "../../enum/FormStep";

const TaxId = (props) => {
    const {changeStep} = props
    return (
        <StepperLayout
            onPrev={() => changeStep(FormStep.Initial)}
            onNext={() => changeStep(FormStep.TypeIncome)}
        >
            <Text>The Tax Id</Text>
        </StepperLayout>
    );
};

InitialForm.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default TaxId;
