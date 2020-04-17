import { PURGE } from 'redux-persist'
import * as ActionTypes from '../actions/ActionTypes'

export type HelloState = {
  greeting: string
  error: string
}

const INITIAL_STATE: HelloState = {
  greeting: 'Hello world',
  error: null,
}

const setGreetingSuccess = (state: HelloState, action: { data: string }) => ({
  ...state,
  greeting: action.data,
})

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_GREETING_SUCCESS:
      return setGreetingSuccess(state, action)

    case PURGE:
      return INITIAL_STATE

    default:
      return state
  }
}
