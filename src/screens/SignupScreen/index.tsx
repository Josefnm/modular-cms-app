import React, { FunctionComponent } from 'react'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import validation from '../../utils/validation'
import { MainState } from '../../store/reducers'
import * as actions from '../../store/actions'
import { Container } from './styled'

export type SignupForm = {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type OwnProps = {}
type Props = OwnProps & StateProps & DispatchProps

const SignupScreen: FunctionComponent<Props> = ({ onSignup }) => {
  const onSignupPress = async (form: SignupForm, helpers: FormikHelpers<SignupForm>) => {
    helpers.setSubmitting(true)
    await onSignup(form)
    helpers.setSubmitting(false)
    navigateHome()
  }
  const history = useHistory()

  const navigateHome = () => history.push('/')

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
        <Form>
          <Container>
            <div>
              <Field name="userName" type="text" placeholder="user name" />
              <ErrorMessage name="userName" component="div" />
            </div>
            <div>
              <Field name="email" type="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <Field name="confirmPassword" type="password" placeholder="confirm password" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <div>
              <button disabled={!isValid} type="submit">
                Confirm
              </button>
            </div>
          </Container>
        </Form>
      )}
    </Formik>
  )
}
const mapStateToProps = (state: MainState) => {
  return {
    userError: state.user.error,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    onSignup: (form: SignupForm) => dispatch(actions.signup(form)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
