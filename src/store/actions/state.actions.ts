import { Dispatch } from 'redux'

import * as ActionTypes from './ActionTypes'
import { persistor } from '..'

export const resetAppStateSuccess = () => {
  return {
    type: ActionTypes.RESET_APP_STATE_SUCCESS,
  }
}

export const resetAppStateFail = () => {
  return {
    type: ActionTypes.RESET_APP_STATE_FAIL,
  }
}

export const resetAppState = () => async (dispatch: Dispatch) => {
  try {
    persistor.purge().then(result => console.log('purged state', result))
    dispatch(resetAppStateSuccess())
  } catch (error) {
    console.log('error', error)
    dispatch(resetAppStateFail())
    throw new Error(`Cant reset app state: ${error}`)
  }
}
