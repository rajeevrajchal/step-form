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
        initialValues: formikInitial(incomeStatementField.fields),
        validationSchema: Yup.object(validationLogic(incomeStatementField.fields)),
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log({values})
            changeStep(FormStep.Complete)
        }
    })


    const sub_formik = useFormik({
        initialValues: formikInitial(incomeStatementField.sub_fields),
        validationSchema: Yup.object(validationLogic(incomeStatementField.sub_fields)),
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log({values})
            changeStep(FormStep.Complete)
        }
    })


    return (
        <StepperLayout
            onPrev={() => changeStep(FormStep.SalaryWages)}
            onNext={() => console.log('next function')}
        >
            {
                map(incomeStatementField.fields, (field) => (
                    <div key={field.field_id}>
                        <FormElement field={field} formik={formik}/>
                    </div>
                ))
            }
            {
                formik.values[incomeStatementField.sub_field_toggle] === true && incomeStatementField.sub_fields.length ? map(incomeStatementField.sub_fields, (sub_field) => (
                    <div key={sub_field.field_id}>
                        <FormElement field={sub_field} formik={sub_formik}>
                            <>
                                <FormElement field={sub_field} formik={sub_formik}
                                             isSubField={sub_field.field_sub_fields.length ? true : false}/>
                            </>
                        </FormElement>
                    </div>
                )) : ''
            }
        </StepperLayout>
    );
};

IncomeStatement.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default IncomeStatement;
