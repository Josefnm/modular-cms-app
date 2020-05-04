import React, { FunctionComponent } from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import validation from '../../../utils/validation'
import * as actions from '../../../store/actions'
import FormField from '../../../components/FormField'
import { ConfirmButton, StyledForm } from '../styled'
import { useThunkDispatch } from '../../../hooks/redux'

export type SignupForm = {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

type Props = {}

const Signup: FunctionComponent<Props> = () => {
  const dispatch = useThunkDispatch()

  const onSignupPress = async (form: SignupForm, helpers: FormikHelpers<SignupForm>) => {
    helpers.setSubmitting(true)
    await dispatch(actions.signup(form))
    helpers.setSubmitting(false)
  }

  return (
    <Formik<SignupForm>
      initialValues={{
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={onSignupPress}
      validationSchema={yup.object().shape({
        userName: validation.userName,
        email: validation.email,
        password: validation.password,
        confirmPassword: validation.confirmPassword,
      })}
    >
      {({ isValid }) => (
        <StyledForm>
          <FormField name="userName" type="text" label="Username" />
          <FormField name="email" type="email" label="Email" />
          <FormField name="password" type="password" label="Password" />
          <FormField name="confirmPassword" type="password" label="Confirm password" />
          <ConfirmButton disabled={!isValid} type="submit" margin="30px 0 0">
            Confirm
          </ConfirmButton>
        </StyledForm>
      )}
    </Formik>
  )
}

export default Signup
