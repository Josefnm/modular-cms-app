import React, { FunctionComponent, useCallback, useEffect } from 'react'
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
import { TemplateModel } from '../../store/reducers/template.reducers'

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

const SignupScreen: FunctionComponent<Props> = ({ onGetOwnTemplates, userTemplates }) => {
  useEffect(() => {
    onGetOwnTemplates()
  }, [onGetOwnTemplates])

  const templates = useCallback(() => {
    userTemplates.map(template => <li>{template.id}</li>)
  }, [userTemplates])

  return <ul>{templates}</ul>
}

const mapStateToProps = (state: MainState) => {
  return {
    userTemplates: state.template.userTemplates,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    onGetOwnTemplates: () => dispatch(actions.getOwnTemplates()),
    onCreateTemplate: (template: TemplateModel) => dispatch(actions.createTemplate(template)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
