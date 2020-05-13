import { PURGE } from 'redux-persist'
import { AxiosError } from 'axios'
import { MainState } from './index'
import { UserModel } from './user.reducers'
import { TypeKey } from '../actions/ActionTypes'

export type ProjectModel = {
  id?: string
  ownerId: string
  memberIds?: string[]
  created?: number
  updated?: number
  name: string
  description?: string
}

export type MembersModel = {
  [id: string]: UserModel
}

export type ProjectState = {
  projects: ProjectModel[]
  selectedProject: string
  members: MembersModel
  error: string
}

const INITIAL_STATE: ProjectState = {
  projects: [],
  selectedProject: '',
  members: {},
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

const getMembersSuccess = (state: ProjectState, action: { members: UserModel[] }): ProjectState => {
  const members = action.members.reduce<MembersModel>((obj, member) => {
    return { ...obj, [member.id]: member }
  }, {})
  return {
    ...state,
    members,
    error: null,
  }
}

const getMembersFail = (state: ProjectState, action: any): ProjectState => ({
  ...state,
  error: action.error,
})

const createProjectSuccess = (state: ProjectState, action: { data: ProjectModel }) => {
  return {
    ...state,
    error: null,
    projects: [action.data, ...state.projects],
  }
}

const createProjectFail = (state: ProjectState, action: { error: AxiosError }) => {
  return { ...state, error: action.error }
}

const updateProjectSuccess = (state: ProjectState, action) => {
  return {
    ...state,
    error: null,
  }
}

const updateProjectFail = (state: ProjectState, action: { error: AxiosError }) => {
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
    case TypeKey.GET_OWN_PROJECTS_SUCCESS:
      return getOwnProjectsSuccess(state, action)
    case TypeKey.GET_OWN_PROJECTS_FAIL:
      return getOwnProjectsFail(state, action)

    case TypeKey.CREATE_PROJECT_SUCCESS:
      return createProjectSuccess(state, action)
    case TypeKey.CREATE_PROJECT_FAIL:
      return createProjectFail(state, action)

    case TypeKey.SELECT_PROJECT_SUCCESS:
      return selectProjectSuccess(state, action)
    case TypeKey.SELECT_PROJECT_FAIL:
      return selectProjectFail(state, action)

    case TypeKey.UPDATE_PROJECT_SUCCESS:
      return updateProjectSuccess(state, action)
    case TypeKey.UPDATE_PROJECT_FAIL:
      return updateProjectFail(state, action)

    case TypeKey.GET_MEMBERS_SUCCESS:
      return getMembersSuccess(state, action)
    case TypeKey.GET_MEMBERS_FAIL:
      return getMembersFail(state, action)

    case PURGE:
      return INITIAL_STATE

    default:
      return state
  }
}
