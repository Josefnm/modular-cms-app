import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { useDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { MainState } from '../store/reducers'

export const useThunkDispatch = () => useDispatch<ThunkDispatch<MainState, {}, Action>>()

export const useSelector: TypedUseSelectorHook<MainState> = useReduxSelector
