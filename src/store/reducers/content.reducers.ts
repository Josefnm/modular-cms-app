import { PURGE } from 'redux-persist'
import { AxiosError } from 'axios'
import { TypeKey } from '../actions/ActionTypes'

export type ContentModel = {
  id?: string
  ownerId?: string
  projectId: string
  templateId: string
  created?: number
  updated?: number
  name: string
  description?: string
  isPublic?: boolean
  contentFields: ContentFieldModel[]
  ownerName?: string
  templateName?: string
}

export type ContentFieldModel = {
  name: string
  data: any
  type: string
}

export type ContentState = {
  projectContent: ContentModel[]
  error: string
}

const INITIAL_STATE: ContentState = {
  projectContent: new Array<ContentModel>(),
  error: null,
}

const getProjectContentsSuccess = (
  state: ContentState,
  action: { contents: ContentModel[] }
): ContentState => {
  return {
    ...state,
    projectContent: action.contents,
    error: null,
  }
}

const getProjectContentsFail = (state: ContentState, action: any): ContentState => ({
  ...state,
  error: action.error,
})

const createContentSuccess = (state: ContentState, action: { data: ContentModel }) => {
  return {
    ...state,
    error: null,
    userContents: [action.data, ...state.projectContent],
  }
}

const createContentFail = (state: ContentState, action: { error: AxiosError }) => {
  return { ...state, error: action.error }
}
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TypeKey.GET_PROJECT_CONTENT_SUCCESS:
      return getProjectContentsSuccess(state, action)
    case TypeKey.GET_PROJECT_CONTENT_FAIL:
      return getProjectContentsFail(state, action)

    case TypeKey.CREATE_CONTENT_SUCCESS:
      return createContentSuccess(state, action)
    case TypeKey.CREATE_CONTENT_FAIL:
      return createContentFail(state, action)

    case PURGE:
      return INITIAL_STATE

    default:
      return state
  }
}
