import React, { FC } from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import validation from '../../../utils/validation'
import * as actions from '../../../store/actions'
import FormikField from '../../../components/FormikField'
import { ConfirmButton, StyledForm } from '../styled'
import { useThunkDispatch } from '../../../hooks/redux'

export type SignupForm = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type Props = {}

const Signup: FC<Props> = () => {
  const dispatch = useThunkDispatch()

  const onSignupPress = async (form: SignupForm, helpers: FormikHelpers<SignupForm>) => {
    helpers.setSubmitting(true)
    await dispatch(actions.signup(form))
    helpers.setSubmitting(false)
  }

  return (
    <Formik<SignupForm>
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={onSignupPress}
      validationSchema={yup.object().shape({
        name: validation.userName,
        email: validation.email,
        password: validation.password,
        confirmPassword: validation.confirmPassword,
      })}
    >
      {({ isValid }) => (
        <StyledForm>
          <FormikField name="name" type="text" label="Username" />
          <FormikField name="email" type="email" label="Email" />
          <FormikField name="password" type="password" label="Password" />
          <FormikField name="confirmPassword" type="password" label="Confirm password" />
          <ConfirmButton disabled={!isValid} type="submit" margin="30px 0 0">
            Confirm
          </ConfirmButton>
        </StyledForm>
      )}
    </Formik>
  )
}

export default Signup
