import React from 'react';
import {FormStep} from "../../enum/FormStep";
import StepperLayout from "../../hoc/StepperLayout";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import {formikInitial, validationLogic} from "../../lib/FormikInital";
import * as Yup from "yup";
import {find, map} from "lodash";
import FromField from "../../schema/FormSchema.json";
import FormElement from "../FormElement";

const IncomeType = (props) => {
        const {changeStep} = props
        const incomeTypeField = find(FromField, {page_id: "income_type"})
        const formik = useFormik({
            initialValues: formikInitial(incomeTypeField.fields),
            validationSchema: Yup.object(validationLogic(incomeTypeField.fields)),
            validateOnBlur: true,
            onSubmit: (values) => {
                console.log({values})
                changeStep(FormStep.SalaryWages)
            }
        })
        return (
            <StepperLayout
                onPrev={() => changeStep(FormStep.TaxID)}
                onNext={() => changeStep(FormStep.SalaryWages)}
            >
                {
                    map(incomeTypeField.fields, (field) => (
                        <div key={field.field_id}>
                            <FormElement field={field} formik={formik}/>
                        </div>
                    ))
                }
            </StepperLayout>
        );
    }
;

IncomeType.propTypes =
    {
        changeStep: PropTypes.func.isRequired
    }
;

export default IncomeType;
