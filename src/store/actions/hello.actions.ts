import * as ActionTypes from './ActionTypes'

export const setGreetingSuccess = (greeting: string) => {
  return {
    type: ActionTypes.SET_GREETING_SUCCESS,
    data: greeting,
  }
}
