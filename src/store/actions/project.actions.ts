import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { AxiosResponse } from 'axios'
import { MainState } from '../reducers'
import { client } from '../../network/axios-client'
import * as ActionTypes from './ActionTypes'
import { ProjectModel } from '../reducers/project.reducers'
import * as actions from '.'
import { ProjectForm } from '../../components/CreateProject'

const getOwnProjectsSuccess = (projects: ProjectModel[]) => {
  return {
    type: ActionTypes.GET_OWN_PROJECTS_SUCCESS,
    projects,
  }
}

const getOwnProjectsFail = (error: string) => {
  return {
    type: ActionTypes.GET_OWN_PROJECTS_FAIL,
    error,
  }
}

export const getProjects = () => async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
  try {
    const response = await client.get('/project/user')
    const projects = response.data
    console.log('get own projects', projects)
    dispatch(getOwnProjectsSuccess(projects))
    dispatch(selectDefaultProject())
  } catch (error) {
    console.log('get own projects error', error.message)
    dispatch(getOwnProjectsFail(error.message))
  }
}

export const createProject = (projectForm: ProjectForm) => async (
  dispatch: ThunkDispatch<MainState, {}, Action>,
  getState: () => MainState
) => {
  try {
    const {
      user: { profile },
    } = getState()

    const project: ProjectModel = {
      ...projectForm,
      ownerId: profile.id,
    }
    const response: AxiosResponse<ProjectModel> = await client.post(`/project`, project)

    console.log('create proj success', response.data)
    dispatch(createProjectSuccess(response.data))
    await dispatch(selectProject(response.data.id))
  } catch (error) {
    console.log(error)
    dispatch(createProjectFail(error.message))
  }
}

const createProjectSuccess = (data: ProjectModel) => {
  console.log('createProjectSuccess: ', data)
  return {
    type: ActionTypes.CREATE_PROJECT_SUCCESS,
    data,
  }
}

const createProjectFail = (action: Action) => {
  return {
    type: ActionTypes.CREATE_PROJECT_FAIL,
    error: action,
  }
}

const selectProjectSuccess = (projectId: string) => {
  return {
    type: ActionTypes.SELECT_PROJECT_SUCCESS,
    data: projectId,
  }
}

const selectProjectFail = (error: string) => {
  return {
    type: ActionTypes.SELECT_PROJECT_FAIL,
    error,
  }
}

export const selectProject = (projectId: string) => async (
  dispatch: ThunkDispatch<MainState, {}, Action>,
  getState: () => MainState
) => {
  const {
    project: { projects },
  } = getState()
  try {
    const projectFound = projects.find((project: ProjectModel) => project.id === projectId)

    if (!projectFound) throw new Error()
    dispatch(selectProjectSuccess(projectFound.id))
    dispatch(actions.getTemplates())
    dispatch(actions.getContent())
  } catch (error) {
    console.log('select project error', error.message)
    dispatch(selectProjectFail('Group not found in the state'))
  }
}

export const selectDefaultProject = () => async (
  dispatch: ThunkDispatch<MainState, {}, Action>,
  getState: () => MainState
) => {
  const {
    project: { projects, selectedProject },
  } = getState()

  if (
    (selectedProject === '' || projects.findIndex(group => group.id === selectedProject) === -1) &&
    projects.length !== 0
  ) {
    const { id } = projects[0]
    dispatch(selectProject(id))
  }
}
