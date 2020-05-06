import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { MainState } from '../reducers'
import { client } from '../../network/axios-client'
import * as ActionTypes from './ActionTypes'
import { TemplateModel } from '../reducers/template.reducers'

const getOwnTemplatesSuccess = (templates: TemplateModel[]) => {
  return {
    type: ActionTypes.GET_OWN_TEMPLATES_SUCCESS,
    templates,
  }
}

const getOwnTemplatesFail = (error: string) => {
  return {
    type: ActionTypes.GET_OWN_TEMPLATES_FAIL,
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
    dispatch(getOwnTemplatesSuccess(templates))
  } catch (error) {
    dispatch(getOwnTemplatesFail(error.message))
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
    dispatch(createTemplateSuccess(response.data))
  } catch (error) {
    console.log(error)
    dispatch(createTemplateFail(error.message))
  }
}

const createTemplateSuccess = (data: TemplateModel) => {
  return {
    type: ActionTypes.CREATE_TEMPLATE_SUCCESS,
    data,
  }
}

const createTemplateFail = (action: Action) => {
  return {
    type: ActionTypes.CREATE_TEMPLATE_FAIL,
    error: action,
  }
}
