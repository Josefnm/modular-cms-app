import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { MainState } from '../reducers'
import { client } from '../../config/axios-client'
import { TemplateModel } from '../reducers/template.reducers'
import { TypeKey } from './ActionTypes'

const getProjectTemplatesSuccess = (templates: TemplateModel[]) => {
  return {
    type: TypeKey.GET_PROJECT_TEMPLATES_SUCCESS,
    templates,
  }
}

const getProjectTemplatesFail = (error: string) => {
  return {
    type: TypeKey.GET_PROJECT_TEMPLATES_FAIL,
    error,
  }
}

export const getTemplates = () => async (
  dispatch: ThunkDispatch<MainState, {}, Action>,
  getState: () => MainState
) => {
  const {
    project: { selectedProject },
  } = getState()
  try {
    const response = await client.get(`template/projectId/${selectedProject}`)
    const templates = response.data
    console.log('templates', templates)
    dispatch(getProjectTemplatesSuccess(templates))
  } catch (error) {
    dispatch(getProjectTemplatesFail(error.response.message))
  }
}

export const createTemplate = (templateForm: TemplateModel) => async (
  dispatch: ThunkDispatch<MainState, {}, Action>,
  getState: () => MainState
) => {
  const {
    user: { profile },
    project: { selectedProject },
  } = getState()

  const template: TemplateModel = {
    ...templateForm,
    ownerId: profile.id,
    projectId: selectedProject,
  }
  try {
    const response = await client.post(`/template`, template)
    console.log(response)
    dispatch(createTemplateSuccess())
    dispatch(getTemplates())
  } catch (error) {
    console.log(error.response.message)
    dispatch(createTemplateFail(error.response.message))
  }
}

const createTemplateSuccess = () => {
  return {
    type: TypeKey.CREATE_TEMPLATE_SUCCESS,
  }
}

const createTemplateFail = (action: Action) => {
  return {
    type: TypeKey.CREATE_TEMPLATE_FAIL,
    error: action,
  }
}
