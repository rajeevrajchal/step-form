import React from 'react';
import PropTypes from "prop-types";
import {Text} from "@chakra-ui/react";
import {FormStep} from "../../enum/FormStep";
import StepperLayout from "../../hoc/StepperLayout";

const SalaryWages = (props) => {
    const {changeStep} = props
    return (
        <StepperLayout
            onPrev={() => changeStep(FormStep.TypeIncome)}
            onNext={() => changeStep(FormStep.IncomeStatement)}
        >
            <Text>The Salary Wages</Text>
        </StepperLayout>
    );
};

SalaryWages.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default SalaryWages;
