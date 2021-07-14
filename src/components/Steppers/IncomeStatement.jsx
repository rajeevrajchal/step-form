import React from 'react';
import PropTypes from "prop-types";
import {FormStep} from "../../enum/FormStep";
import StepperLayout from "../../hoc/StepperLayout";
import {find, map} from "lodash";
import FromField from "../../schema/FormSchema.json";
import {useFormik} from "formik";
import {formikInitial, validationLogic} from "../../lib/FormikInital";
import * as Yup from "yup";
import FormElement from "../FormElement";

const IncomeStatement = (props) => {
    const {changeStep} = props
    const incomeStatementField = find(FromField, {page_id: "income_statement"})

    const formik = useFormik({
        initialValues: formikInitial(incomeStatementField),
        validationSchema: Yup.object(validationLogic(incomeStatementField)),
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log({values})
            changeStep(FormStep.Complete)
        }
    })
    return (
        <StepperLayout
            onPrev={() => changeStep(FormStep.SalaryWages)}
            onNext={() => formik.handleSubmit()}
        >
            {
                map(incomeStatementField.fields, (field) => (
                    <div key={field.field_id}>
                        <FormElement field={field} formik={formik}/>
                    </div>
                ))
            }
        </StepperLayout>
    );
};

IncomeStatement.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default IncomeStatement;
