import { PURGE } from 'redux-persist'
import * as ActionTypes from '../actions/ActionTypes'

export type UserModel = {
  id: string
  userName: string
  email: string
}

export type UserState = {
  profile: UserModel
  error: string
}

const emptyProfile = {
  id: '',
  userName: '',
  email: '',
}

const INITIAL_STATE: UserState = {
  profile: emptyProfile,
  error: null,
}

const signupSuccess = (state: UserState, action: { user: UserModel }) => {
  return {
    ...state,
    profile: action.user,
    error: null,
  }
}

const signupFail = (state: UserState, action: any) => ({
  ...state,
  error: action.error,
})

const loginSuccess = (state: UserState, action: { user: UserModel }) => {
  return {
    ...state,
    profile: action.user,
    error: null,
  }
}

const loginFail = (state: UserState, action: any) => ({
  ...state,
  error: action.error,
})

const getProfileSuccess = (state: UserState, action: { user: UserModel }) => {
  return {
    ...state,
    profile: action.user,
    error: null,
  }
}

const getProfileFail = (state: UserState, action: any) => ({
  profile: emptyProfile,
  error: action.error,
})

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.SIGNUP_SUCCESS:
      return signupSuccess(state, action)
    case ActionTypes.SIGNUP_FAIL:
      return signupFail(state, action)

    case ActionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action)
    case ActionTypes.LOGIN_FAIL:
      return loginFail(state, action)

    case ActionTypes.GET_PROFILE_SUCCESS:
      return getProfileSuccess(state, action)
    case ActionTypes.GET_PROFILE_FAIL:
      return getProfileFail(state, action)

    case PURGE:
      return INITIAL_STATE

    default:
      return state
  }
}
