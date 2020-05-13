import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { MainState } from '../reducers'
import { client } from '../../config/axios-client'

import { ProjectModel } from '../reducers/project.reducers'
import * as actions from '.'
import { ProjectForm } from '../../components/CreateProject'
import { UserModel } from '../reducers/user.reducers'
import { UpdateProjectForm } from '../../screens/SettingsScreen'
import { TypeKey } from './ActionTypes'

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

const getOwnProjectsSuccess = (projects: ProjectModel[]) => {
  return {
    type: TypeKey.GET_OWN_PROJECTS_SUCCESS,
    projects,
  }
}

const getOwnProjectsFail = (error: string) => {
  return {
    type: TypeKey.GET_OWN_PROJECTS_FAIL,
    error,
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
    const { data } = await client.post<ProjectModel>(`/project`, project)

    console.log('create proj success', data)
    dispatch(createProjectSuccess(data))
    await dispatch(selectProject(data.id))
  } catch (error) {
    console.log(error)
    dispatch(createProjectFail(error.message))
  }
}

const createProjectSuccess = (data: ProjectModel) => {
  return {
    type: TypeKey.CREATE_PROJECT_SUCCESS,
    data,
  }
}

const createProjectFail = (action: Action) => {
  return {
    type: TypeKey.CREATE_PROJECT_FAIL,
    error: action,
  }
}

export const updateProject = (form: UpdateProjectForm) => async (
  dispatch: ThunkDispatch<MainState, {}, Action>,
  getState: () => MainState
) => {
  try {
    const submitForm = {
      id: getState().project.selectedProject,
      name: form.name,
      description: form.description,
      memberIds: form.members.map(member => member.id),
    }
    const { data } = await client.post<ProjectModel>(`/project/update`, submitForm)

    dispatch(updateProjectSuccess(data))
    dispatch(getProjects())
    dispatch(getMembers(data.id))
    console.log('update proj success', data)
  } catch (error) {
    console.log('update project error:', error.message)
    dispatch(updateProjectFail(error.message))
  }
}

const updateProjectSuccess = (data: ProjectModel) => {
  return {
    type: TypeKey.UPDATE_PROJECT_SUCCESS,
    data,
  }
}

const updateProjectFail = (action: Action) => {
  return {
    type: TypeKey.UPDATE_PROJECT_FAIL,
    error: action,
  }
}

export const deleteProject = (projectId: string) => async (
  dispatch: ThunkDispatch<MainState, {}, Action>
) => {
  try {
    const response = await client.delete(`/project/${projectId}`)

    dispatch(deleteProjectSuccess())
    await dispatch(getProjects())
    dispatch(selectDefaultProject())
    console.log('delete proj success')
  } catch (error) {
    console.log('delete project error:', error.message)
    dispatch(deleteProjectFail(error.message))
  }
}

const deleteProjectSuccess = () => {
  return {
    type: TypeKey.DELETE_PROJECT_SUCCESS,
  }
}

const deleteProjectFail = (action: Action) => {
  return {
    type: TypeKey.DELETE_PROJECT_FAIL,
    error: action,
  }
}

const selectProjectSuccess = (projectId: string) => {
  return {
    type: TypeKey.SELECT_PROJECT_SUCCESS,
    data: projectId,
  }
}

const selectProjectFail = (error: string) => {
  return {
    type: TypeKey.SELECT_PROJECT_FAIL,
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
    dispatch(actions.getMembers(projectId))
  } catch (error) {
    console.log('select project error', error.message)
    dispatch(selectProjectFail('Group not found in the state'))
  }
}

export const getMembers = (projectId: string) => async (
  dispatch: ThunkDispatch<MainState, {}, Action>
) => {
  try {
    const { data } = await client.get<UserModel[]>(`user/project?projectId=${projectId}`)

    dispatch(getMembersSuccess(data))
  } catch (error) {
    console.log('get members error', error)
    dispatch(getMembersFail(error.message))
  }
}

const getMembersSuccess = (members: UserModel[]) => {
  return {
    type: TypeKey.GET_MEMBERS_SUCCESS,
    members,
  }
}

const getMembersFail = (action: Action) => {
  return {
    type: TypeKey.GET_MEMBERS_FAIL,
    error: action,
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
