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

const SalaryWages = (props) => {
    const {changeStep} = props
    const salaryWagesField = find(FromField, {page_id: "salary_wages"})
    const formik = useFormik({
        initialValues: formikInitial(salaryWagesField.fields),
        validationSchema: Yup.object(validationLogic(salaryWagesField.fields)),
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log({values})
            changeStep(FormStep.IncomeStatement)
        }
    })
    return (
        <StepperLayout
            onPrev={() => changeStep(FormStep.TypeIncome)}
            onNext={() => formik.handleSubmit()}
        >
            {
                map(salaryWagesField.fields, (field) => (
                    <div key={field.field_id}>
                        <FormElement field={field} formik={formik}/>
                    </div>
                ))
            }
        </StepperLayout>
    );
};

SalaryWages.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default SalaryWages;
