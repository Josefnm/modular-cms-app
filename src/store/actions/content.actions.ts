import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { MainState } from '../reducers'
import { client } from '../../config/axios-client'

import { ContentModel } from '../reducers/content.reducers'
import { TypeKey } from './ActionTypes'

const getOwnContentsSuccess = (contents: ContentModel[]) => {
  return {
    type: TypeKey.GET_PROJECT_CONTENT_SUCCESS,
    contents,
  }
}

const getOwnContentsFail = (error: string) => {
  return {
    type: TypeKey.GET_PROJECT_CONTENT_FAIL,
    error,
  }
}

export const getContent = () => async (
  dispatch: ThunkDispatch<MainState, {}, Action>,
  getState: () => MainState
) => {
  const {
    project: { selectedProject },
  } = getState()
  try {
    const response = await client.get(`content/projectId/${selectedProject}`)
    const contents = response.data
    dispatch(getOwnContentsSuccess(contents))
  } catch (error) {
    console.log(error.response.message)
    dispatch(getOwnContentsFail(error.response.message))
  }
}

export const createContent = (contentForm: ContentModel) => async (
  dispatch: ThunkDispatch<MainState, {}, Action>,
  getState: () => MainState
) => {
  const {
    user: { profile },
    project: { selectedProject },
  } = getState()

  const content: ContentModel = {
    ...contentForm,
    ownerId: profile.id,
    projectId: selectedProject,
  }

  try {
    const response = await client.post(`/content`, content)
    console.log(response)
    dispatch(createContentSuccess(response.data))
  } catch (error) {
    console.log(error)
    dispatch(createContentFail(error.message))
  }
}

const createContentSuccess = (data: ContentModel) => {
  return {
    type: TypeKey.CREATE_CONTENT_SUCCESS,
    data,
  }
}

const createContentFail = (action: Action) => {
  return {
    type: TypeKey.CREATE_CONTENT_FAIL,
    error: action,
  }
}
