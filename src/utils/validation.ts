import * as yup from 'yup'

const email = yup
  .string()
  .email('Must be a valid email')
  .required('Field required')

const password = yup
  .string()
  .required('Field required')
  .min(6, 'Too short')

const confirmPassword = yup
  .string()
  .required('Field required')
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Confirm Password is required')

const userName = yup
  .string()
  .required('Field required')
  .min(6, 'Too short')

export default {
  email,
  password,
  confirmPassword,
  userName,
}
