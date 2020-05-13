import { PURGE } from 'redux-persist'
import { AxiosError } from 'axios'
import { MainState } from './index'
import { TypeKey } from '../actions/ActionTypes'

export type TemplateModel = {
  id?: string
  ownerId?: string
  projectId: string
  created?: number
  updated?: number
  name: string
  description?: string
  templateFields: TemplateFieldModel[]
  ownerName?: string
}

export type TemplateFieldModel = {
  name: string
  dataType: string
}

export type TemplateState = {
  projectTemplates: TemplateModel[]
  error: string
}

const INITIAL_STATE: TemplateState = {
  projectTemplates: new Array<TemplateModel>(),
  error: null,
}

const getProjectTemplatesSuccess = (
  state: TemplateState,
  action: { templates: TemplateModel[] }
): TemplateState => {
  return {
    ...state,
    projectTemplates: action.templates,
    error: null,
  }
}

const getProjectTemplatesFail = (state: TemplateState, action: any): TemplateState => ({
  ...state,
  error: action.error,
})

const createTemplateSuccess = (state: TemplateState, action: any) => {
  return {
    ...state,
    error: null,
  }
}

const createTemplateFail = (state: TemplateState, action: { error: AxiosError }) => {
  return { ...state, error: action.error }
}

export const getById = (state: MainState, id: string) => {
  return state.template.projectTemplates.find(template => template.id === id)
}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TypeKey.GET_PROJECT_TEMPLATES_SUCCESS:
      return getProjectTemplatesSuccess(state, action)
    case TypeKey.GET_PROJECT_TEMPLATES_FAIL:
      return getProjectTemplatesFail(state, action)

    case TypeKey.CREATE_TEMPLATE_SUCCESS:
      return createTemplateSuccess(state, action)
    case TypeKey.CREATE_TEMPLATE_FAIL:
      return createTemplateFail(state, action)

    case PURGE:
      return INITIAL_STATE

    default:
      return state
  }
}
