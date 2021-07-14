import React from 'react';
import {useFormik} from "formik";
import {formikInitial, validationLogic} from "../lib/FormikInital";
import * as Yup from "yup";
import {find, map} from "lodash";
import FormElement from "../components/FormElement";

const RecursiveForm = (props) => {
    const {
        fieldArray,
        submitFunction,
    } = props
    const formik = useFormik({
        initialValues: formikInitial(fieldArray),
        validationSchema: Yup.object(validationLogic(fieldArray)),
        validateOnBlur: true,
    })

    console.log('the formik', formik)
    return (
        <>
            {
                map(fieldArray || [], (field) => (
                    <div key={field.field_id}>
                        <FormElement field={field} formik={formik}/>
                    </div>
                ))
            }
        </>
    );
};

export default RecursiveForm;
