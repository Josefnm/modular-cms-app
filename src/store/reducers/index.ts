import { persistCombineReducers, PersistedState } from 'redux-persist'
import { Action } from 'redux'
import storage from 'redux-persist/lib/storage'
import helloReducer, { HelloState } from './hello.reducers'

const persistConfig = {
  key: 'root',
  storage,
}

export type MainState = {
  hello: HelloState
}

export const appReducer = persistCombineReducers(persistConfig, {
  hello: helloReducer,
})

export default (state: PersistedState, action: Action) => {
  // @ts-ignore
  return appReducer(state, action)
}
