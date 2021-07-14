import React from 'react';
import StepperLayout from "../../hoc/StepperLayout";
import PropTypes from "prop-types";
import InitialForm from "./InitialForm";
import {FormStep} from "../../enum/FormStep";
import {useFormik} from "formik";
import FromField from '../../schema/FormSchema.json'
import {map, find} from "lodash"
import * as Yup from 'yup';
import {formikInitial, validationLogic} from "../../lib/FormikInital";
import FormElement from "../FormElement";

const TaxId = (props) => {
    const {changeStep} = props
    const taxIDFromField = find(FromField, {page_id: "tax_id"})

    const formik = useFormik({
        initialValues: formikInitial(taxIDFromField),
        validationSchema: Yup.object(validationLogic(taxIDFromField)),
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log({values})
            changeStep(FormStep.TypeIncome)
        }
    })

    return (
        <StepperLayout
            onPrev={() => changeStep(FormStep.Initial)}
            onNext={() => formik.handleSubmit()}
        >
            {
                map(taxIDFromField.fields, (field) => (
                    <div key={field.field_id}>
                        <FormElement field={field} formik={formik}/>
                    </div>
                ))
            }
        </StepperLayout>
    );
};

InitialForm.propTypes = {
    changeStep: PropTypes.func.isRequired
};

export default TaxId;
