import * as yup from 'yup'
import { Schema } from 'yup'
import { TemplateFieldModel } from '../store/reducers/template.reducers'
import { DataType } from '../models/dataType'

const email = yup
  .string()
  .email('Must be a valid email')
  .required('Field required')
  .max(255, 'Too long')

const password = yup
  .string()
  .required('Field required')
  .min(6, 'Too short')
  .max(255, 'Too long')

const confirmPassword = yup
  .string()
  .required('Field required')
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Confirm Password is required')

const userName = yup
  .string()
  .required('Field required')
  .min(6, 'Too short')
  .max(255, 'Too long')

const description = yup.string().max(511, 'Too long')

const fieldArray = yup.array().min(1, 'Add at least one field to the template')

const uniqueName = (name: string[]) => {
  return yup
    .string()
    .required('* Field required')
    .max(25, '* Too long')
    .notOneOf(name, '* Name already in use')
}

const stringField = yup.string().max(255, 'Too long')

const textField = yup.string().max(10000, 'Too long')
const imageField = yup.string()

const dateField = yup.date().nullable(true)

const numberField = yup
  .number()
  .typeError('Must be a number')
  .max(9223372036854775807, 'Too large, maximum value is 9223372036854775807')
  .min(-9223372036854775808, 'Too small, minimum value is -9223372036854775808')

const booleanField = yup
  .boolean()
  .typeError('* Field required')
  .required('* Field required')

export const generateValidators = (templateFields: TemplateFieldModel[]) => {
  return templateFields.reduce((object, tField) => {
    return { ...object, [tField.name]: chooseValidator(tField.dataType) }
  }, {} as { [name: string]: Schema<any> })
}

const chooseValidator = (dataType: string) => {
  switch (dataType) {
    case DataType.STRING:
      return stringField
    case DataType.TEXT:
      return textField
    case DataType.NUMBER:
      return numberField
    case DataType.DATE:
      return dateField
    case DataType.IMAGE:
      return imageField
    case DataType.BOOL:
      return booleanField
    case DataType.MODULE:
      return stringField
    default:
      return null
  }
}

export default {
  email,
  password,
  confirmPassword,
  userName,
  uniqueName,
  description,
  fieldArray,
  stringField,
  numberField,
  booleanField,
}
