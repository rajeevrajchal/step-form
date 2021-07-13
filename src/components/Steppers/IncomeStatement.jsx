import React from 'react';
import PropTypes from "prop-types";
import {Text} from "@chakra-ui/react";
import {FormStep} from "../../enum/FormStep";
import StepperLayout from "../../hoc/StepperLayout";

const IncomeStatement = (props) => {
    const {changeStep} = props
    return (
        <StepperLayout
            onPrev={() => changeStep(FormStep.SalaryWages)}
            onNext={() => changeStep(FormStep.Complete)}
        >
            <Text>The Income</Text>
        </StepperLayout>
    );
};

IncomeStatement.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default IncomeStatement;
