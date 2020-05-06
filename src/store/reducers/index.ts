import { persistCombineReducers, PersistedState } from 'redux-persist'
import { Action } from 'redux'
import storage from 'redux-persist/lib/storage'
import userReducer, { UserState } from './user.reducers'
import templateReducer, { TemplateState } from './template.reducers'
import projectReducer, { ProjectState } from './project.reducers'
import contentReducer, { ContentState } from './content.reducers'

const persistConfig = {
  key: 'root',
  storage,
}

export type MainState = {
  user: UserState
  template: TemplateState
  content: ContentState
  project: ProjectState
}

export const appReducer = persistCombineReducers(persistConfig, {
  user: userReducer,
  template: templateReducer,
  content: contentReducer,
  project: projectReducer,
})

export default (state: PersistedState, action: Action) => {
  // @ts-ignore
  return appReducer(state, action)
}
