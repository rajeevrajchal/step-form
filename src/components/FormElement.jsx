import React from 'react';
import AppInput from "../ui/AppInput";
import AppSelect from "../ui/AppSelect";
import AppSwitch from "../ui/AppSwitch";

const FormElement = (props) => {
    const {
        field: {
            field_id,
            field_placeholder,
            field_type,
            field_options,
            field_label
        },
        formik
    } = props
    switch (field_type) {
        case "text":
            return <AppInput
                id={field_id}
                label={field_label}
                name={field_id}
                type={field_type}
                placeholder={field_placeholder}
                value={formik.values[field_id]}
                onChange={formik.handleChange}
                options={field_options}
                isInvalid={formik.errors[field_id] ? true : false}
            />
        case "number":
            return <AppInput
                id={field_id}
                label={field_label}
                name={field_id}
                type={field_type}
                placeholder={field_placeholder}
                value={formik.values[field_id]}
                onChange={formik.handleChange}
                options={field_options}
                isInvalid={formik.errors[field_id] ? true : false}
            />
        case "select":
            return <AppSelect
                id={field_id}
                name={field_id}
                label={field_label}
                placeholder={field_placeholder}
                value={formik.values[field_id]}
                onChange={formik.handleChange}
                options={field_options}
                isInvalid={formik.errors[field_id] ? true : false}
            />
        case "switch":
            return <AppSwitch
                label={field_label}
                id={field_id}
                name={field_id}
                placeholder={field_placeholder}
                value={formik.values[field_id]}
                onChange={formik.handleChange}
                options={field_options}
                isInvalid={formik.errors[field_id] ? true : false}
            />
        default:
            return <p>No Element</p>
    }
};

export default FormElement;
