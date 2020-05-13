import React, { FC } from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import validation from '../../../utils/validation'
import * as actions from '../../../store/actions'
import FormikField from '../../../components/FormikField'
import { ConfirmButton, StyledForm } from '../styled'
import { useThunkDispatch } from '../../../hooks/redux'

export type LoginForm = {
  email: string
  password: string
}

type Props = {}

const Login: FC<Props> = () => {
  const dispatch = useThunkDispatch()

  const onSignupPress = async (form: LoginForm, helpers: FormikHelpers<LoginForm>) => {
    helpers.setSubmitting(true)
    await dispatch(actions.firebaseLogin(form))
    helpers.setSubmitting(false)
  }
  return (
    <Formik<LoginForm>
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSignupPress}
      validationSchema={yup.object().shape({
        email: validation.email,
      })}
    >
      {({ isValid }) => (
        <StyledForm>
          <FormikField name="email" type="email" label="Email" />
          <FormikField name="password" type="password" label="Password" />
          <ConfirmButton disabled={!isValid} type="submit" margin="25px 0 0">
            Confirm
          </ConfirmButton>
        </StyledForm>
      )}
    </Formik>
  )
}

export default Login
