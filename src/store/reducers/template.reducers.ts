import { PURGE } from 'redux-persist'
import { AxiosError } from 'axios'
import * as ActionTypes from '../actions/ActionTypes'

export type TemplateModel = {
  id: string
  ownerId: string
  created: number
  updated: number
  name: string
  description: string
  isPublic: boolean
  templateFields: TemplateFieldModel[]
}
export type TemplateFieldModel = {
  name: string
  dataType: string
}

export type TemplateState = {
  userTemplates: TemplateModel[]
  error: string
}

const INITIAL_STATE: TemplateState = {
  userTemplates: new Array<TemplateModel>(),
  error: null,
}

const getOwnTemplatesSuccess = (
  state: TemplateState,
  action: { templates: TemplateModel[] }
): TemplateState => {
  return {
    ...state,
    userTemplates: action.templates,
    error: null,
  }
}

const getOwnTemplatesFail = (state: TemplateState, action: any): TemplateState => ({
  ...state,
  error: action.error,
})

const createTemplateSuccess = (state: TemplateState, action: { data: TemplateModel }) => {
  return {
    ...state,
    error: null,
    userTemplates: [action.data, ...state.userTemplates],
  }
}

const createTemplateFail = (state: TemplateState, action: { error: AxiosError }) => {
  return { ...state, error: action.error }
}
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_OWN_TEMPLATES_SUCCESS:
      return getOwnTemplatesSuccess(state, action)
    case ActionTypes.GET_OWN_TEMPLATES_FAIL:
      return getOwnTemplatesFail(state, action)

    case ActionTypes.CREATE_TEMPLATE_SUCCESS:
      return createTemplateSuccess(state, action)
    case ActionTypes.CREATE_TEMPLATE_FAIL:
      return createTemplateFail(state, action)

    case PURGE:
      return INITIAL_STATE

    default:
      return state
  }
}
