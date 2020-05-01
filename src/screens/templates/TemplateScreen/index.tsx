import React, { FunctionComponent, useCallback, useEffect } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { connect } from 'react-redux'
import { MainState } from '../../../store/reducers'
import * as actions from '../../../store/actions'
import { TemplateModel } from '../../../store/reducers/template.reducers'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type OwnProps = {}
type Props = OwnProps & StateProps & DispatchProps

const TemplateScreen: FunctionComponent<Props> = ({ onGetOwnTemplates, userTemplates }) => {
  useEffect(() => {
    onGetOwnTemplates()
  }, [onGetOwnTemplates])

  const templates = useCallback(() => {
    return userTemplates.map(template => <li>{template.id}</li>)
  }, [userTemplates])

  return <ul>{templates()}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplateScreen)
