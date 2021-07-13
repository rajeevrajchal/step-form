import React from 'react';
import {FormStep} from "../../enum/FormStep";
import {Text} from "@chakra-ui/react";
import StepperLayout from "../../hoc/StepperLayout";
import PropTypes from "prop-types";

const IncomeType = (props) => {
    const {changeStep} = props
    return (
        <StepperLayout
            onPrev={() => changeStep(FormStep.TaxID)}
            onNext={() => changeStep(FormStep.SalaryWages)}
        >
            <Text>The Income Type</Text>
        </StepperLayout>
    );
};

IncomeType.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default IncomeType;
