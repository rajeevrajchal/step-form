import {map} from "lodash";
import * as Yup from "yup";

const initialField = (items) => {
    return map(items.fields, (field) => {
        return {[field.field_id]: field.field_value}
    })
}

const validationField = (items) => {
    return map(items.fields, (field) => {
        const {field_id, field_mandatory, field_msg} = field
        if (field_mandatory === true) {
            return {[field_id]: Yup.string().required(field_msg)}
        }
        return {[field_id]: Yup.string().notRequired()}
    })
}
export const formikInitial = (formFields) => {
    return initialField(formFields).reduce(function (o, v) {
        return Object.assign(o, v);
    }, {})
}

export const validationLogic = (validationItems) => {
    return validationField(validationItems).reduce(function (o, v) {
        return Object.assign(o, v);
    }, {})
}

