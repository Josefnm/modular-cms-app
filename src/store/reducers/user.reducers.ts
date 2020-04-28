import { PURGE } from 'redux-persist'
import * as ActionTypes from '../actions/ActionTypes'

export type UserModel = {
  userName: string
  email: string
}

export type UserState = {
  profile: UserModel
  error: string
}

const INITIAL_STATE: UserState = {
  profile: { userName: '', email: '' },
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

    case PURGE:
      return INITIAL_STATE

    default:
      return state
  }
}
