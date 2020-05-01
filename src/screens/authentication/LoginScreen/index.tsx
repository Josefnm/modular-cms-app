import React, { FunctionComponent } from 'react'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { connect } from 'react-redux'
import validation from '../../../utils/validation'
import { MainState } from '../../../store/reducers'
import * as actions from '../../../store/actions'

export type LoginForm = {
  email: string
  password: string
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type OwnProps = {}
type Props = OwnProps & StateProps & DispatchProps

const LoginScreen: FunctionComponent<Props> = ({ onLogin }) => {
  const onSignupPress = async (form: LoginForm, helpers: FormikHelpers<LoginForm>) => {
    helpers.setSubmitting(true)
    await onLogin(form)
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
        <Form>
          <div>
            <Field name="email" type="email" placeholer="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field name="password" type="password" placeholer="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <button disabled={!isValid} type="submit">
              Log in
            </button>
          </div>
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
    onLogin: (form: LoginForm) => dispatch(actions.login(form)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
