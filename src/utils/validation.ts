import * as yup from 'yup'

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

const description = yup.string().max(255, 'Too long')

const fieldArray = yup.array().min(1, 'Add at least one field to the template')

const fieldName = (name: string[]) => {
  return yup
    .string()
    .required('* Field required')
    .max(255, 'Too long')
    .notOneOf(name, '* Name already in use')
}

export default {
  email,
  password,
  confirmPassword,
  userName,
  fieldName,
  description,
  fieldArray,
}
