import { persistCombineReducers, PersistedState } from 'redux-persist'
import { Action } from 'redux'
import storage from 'redux-persist/lib/storage'
import helloReducer, { HelloState } from './hello.reducers'
import userReducer, { UserState } from './user.reducers'
import templateReducer, { TemplateState } from './template.reducers'
import projectReducer, { ProjectState } from './project.reducers'

const persistConfig = {
  key: 'root',
  storage,
}

export type MainState = {
  hello: HelloState
  user: UserState
  template: TemplateState
  project: ProjectState
}

export const appReducer = persistCombineReducers(persistConfig, {
  hello: helloReducer,
  user: userReducer,
  template: templateReducer,
  project: projectReducer,
})

export default (state: PersistedState, action: Action) => {
  // @ts-ignore
  return appReducer(state, action)
}
