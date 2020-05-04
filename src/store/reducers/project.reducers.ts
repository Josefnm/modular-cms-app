import { PURGE } from 'redux-persist'
import { AxiosError } from 'axios'
import * as ActionTypes from '../actions/ActionTypes'
import { MainState } from './index'

export type ProjectModel = {
  id?: string
  ownerId: string
  memberIds?: string[]
  created?: number
  updated?: number
  name: string
  description?: string
}

export type ProjectState = {
  projects: ProjectModel[]
  selectedProject: string
  error: string
}

const INITIAL_STATE: ProjectState = {
  projects: [],
  selectedProject: '',
  error: null,
}

const getOwnProjectsSuccess = (
  state: ProjectState,
  action: { projects: ProjectModel[] }
): ProjectState => {
  return {
    ...state,
    projects: action.projects,
    error: null,
  }
}

const getOwnProjectsFail = (state: ProjectState, action: any): ProjectState => ({
  ...state,
  error: action.error,
})

const createProjectSuccess = (state: ProjectState, action: { data: ProjectModel }) => {
  console.log('actions data', action)
  console.log('actions data', action.data)
  return {
    ...state,
    error: null,
    projects: [action.data, ...state.projects],
  }
}

const createProjectFail = (state: ProjectState, action: { error: AxiosError }) => {
  return { ...state, error: action.error }
}

const selectProjectSuccess = (state: ProjectState, action: { data: string }) => {
  return {
    ...state,
    error: null,
    selectedProject: action.data,
  }
}

const selectProjectFail = (state: ProjectState, action) => {
  return { ...state, error: action.error }
}

export const getSelectedProject = (state: MainState) => {
  const selectedProject = state.project.projects.find(project => {
    return project.id === state.project.selectedProject
  })
  return (
    selectedProject || {
      id: '',
      ownerId: '',
      memberIds: [],
      name: '',
    }
  )
}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_OWN_PROJECTS_SUCCESS:
      return getOwnProjectsSuccess(state, action)
    case ActionTypes.GET_OWN_PROJECTS_FAIL:
      return getOwnProjectsFail(state, action)

    case ActionTypes.CREATE_PROJECT_SUCCESS:
      return createProjectSuccess(state, action)
    case ActionTypes.CREATE_PROJECT_FAIL:
      return createProjectFail(state, action)

    case ActionTypes.SELECT_PROJECT_SUCCESS:
      return selectProjectSuccess(state, action)
    case ActionTypes.SELECT_PROJECT_FAIL:
      return selectProjectFail(state, action)

    case PURGE:
      return INITIAL_STATE

    default:
      return state
  }
}
