import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import firebase from 'firebase'
import { MainState } from '../reducers'
import { SignupForm } from '../../screens/SignupScreen'
import 'firebase/auth'
import { client, clientNoAuth } from '../../network/axios-client'
import * as ActionTypes from './ActionTypes'
import { UserModel } from '../reducers/user.reducers'
import * as actions from '.'
import { LoginForm } from '../../screens/LoginScreen'

const signupSuccess = (user: UserModel) => {
  return {
    type: ActionTypes.SIGNUP_SUCCESS,
    user,
  }
}

const signupFail = (error: string) => {
  return {
    type: ActionTypes.SIGNUP_FAIL,
    error,
  }
}

const loginSuccess = (user: UserModel) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    user,
  }
}

const loginFail = (error: string) => {
  return {
    type: ActionTypes.LOGIN_FAIL,
    error,
  }
}

export const signup = (form: SignupForm) => {
  return async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
    try {
      const response = await clientNoAuth.post('/users/signup', form)
      const user = response.data
      await firebaseLogin(form)
      dispatch(signupSuccess(user))
    } catch (error) {
      dispatch(signupFail(error.message))
      throw new Error(`Cant sign up: ${error.message}`)
    }
  }
}

export const login = (form: LoginForm) => {
  return async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
    try {
      await firebaseLogin(form)

      const response = await client.get('/users/getProfile')
      const user = response.data

      dispatch(loginSuccess(user))
    } catch (error) {
      dispatch(loginFail(error.message))
      throw new Error(`Cant sign up: ${error.message}`)
    }
  }
}

export const logout = () => {
  return async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
    await firebase.auth().signOut()
    await dispatch(actions.resetAppState())
  }
}

const firebaseLogin = async (form: LoginForm) => {
  if (firebase.auth().currentUser) {
    await firebase.auth().signOut()
  }
  const userCredential = await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
  const token = await userCredential.user.getIdToken()
  client.defaults.headers.authorization = `Bearer ${token}`
}
