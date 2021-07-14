import React, {useEffect, useState} from 'react';
import {Container,Text} from "@chakra-ui/react"
import InitialForm from "../components/Steppers/InitialForm";
import TaxId from "../components/Steppers/TaxId";
import {FormStep} from "../enum/FormStep";
import IncomeType from "../components/Steppers/IncomeType";
import SalaryWages from "../components/Steppers/SalaryWage";
import IncomeStatement from "../components/Steppers/IncomeStatement";
import Complete from "../components/Steppers/Complete";

const TaxForm = () => {
    const [step, setFormStep] = useState(FormStep.Initial)
    const getFormType = () => {
        switch (step) {
            case FormStep.Initial:
                return <InitialForm changeStep={changeFormStep}/>
            case FormStep.TaxID:
                return <TaxId changeStep={changeFormStep}/>
            case FormStep.TypeIncome:
                return <IncomeType changeStep={changeFormStep}/>
            case FormStep.SalaryWages:
                return <SalaryWages changeStep={changeFormStep}/>
            case FormStep.IncomeStatement:
                return <IncomeStatement changeStep={changeFormStep}/>
            case FormStep.Complete:
                return <Complete changeStep={changeFormStep}/>
            default:
                return <Text>No Form Screen</Text>
        }
    }

    const changeFormStep = (key) => {
        localStorage.setItem("FormStep", key)
        setFormStep(key)
    }

    useEffect(() => {
        const persistStep = localStorage.getItem("FormStep")
        setFormStep(persistStep ? parseInt(persistStep, 10): FormStep.Initial)
    },[])

    return (
        <Container py={20}>
            {getFormType()}
        </Container>
    );
};

export default TaxForm;
