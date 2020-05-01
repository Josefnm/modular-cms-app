import { ThunkDispatch } from 'redux-thunk'
import { Action, Dispatch } from 'redux'
import { MainState } from '../reducers'
import 'firebase/auth'
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

export const getOwnTemplates = () => async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
  try {
    const response = await client.get('/template/user')
    const templates = response.data
    dispatch(getOwnTemplatesSuccess(templates))
  } catch (error) {
    dispatch(getOwnTemplatesFail(error.message))
  }
}

export const createTemplate = (template: TemplateModel) => async (
  dispatch: ThunkDispatch<MainState, {}, Action>
) => {
  try {
    const response = await client.post(`/template`, template)
    console.log(response)
    dispatch(createEventSuccess(response.data))
  } catch (error) {
    console.log(error)
    dispatch(createEventFail(error.message))
  }
}

const createEventSuccess = (data: TemplateModel) => {
  return {
    type: ActionTypes.CREATE_TEMPLATE_SUCCESS,
    action: data,
  }
}

const createEventFail = (action: Action) => {
  return {
    type: ActionTypes.CREATE_TEMPLATE_FAIL,
    error: action,
  }
}
