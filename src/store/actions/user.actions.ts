import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import firebase from 'firebase/app'
import { MainState } from '../reducers'
import 'firebase/auth'
import { client, clientNoAuth } from '../../config/axios-client'
import { UserModel } from '../reducers/user.reducers'
import * as actions from '.'
import { SignupForm } from '../../screens/AuthScreen/Signup'
import { LoginForm } from '../../screens/AuthScreen/Login'
import { TypeKey } from './ActionTypes'

const signupSuccess = (user: UserModel) => {
  return {
    type: TypeKey.SIGNUP_SUCCESS,
    user,
  }
}

const signupFail = (error: string) => {
  return {
    type: TypeKey.SIGNUP_FAIL,
    error,
  }
}

const loginSuccess = (user: UserModel) => {
  return {
    type: TypeKey.LOGIN_SUCCESS,
    user,
  }
}

const loginFail = (error: string) => {
  return {
    type: TypeKey.LOGIN_FAIL,
    error,
  }
}

const getProfileSuccess = (user: UserModel) => {
  return {
    type: TypeKey.GET_PROFILE_SUCCESS,
    user,
  }
}

const getProfileFail = (error: string) => {
  return {
    type: TypeKey.GET_PROFILE_FAIL,
    error,
  }
}

export const signup = (form: SignupForm) => {
  return async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
    try {
      const response = await clientNoAuth.post('/user/signup', form)
      const user = response.data
      await dispatch(firebaseLogin(form))
      dispatch(signupSuccess(user))
    } catch (error) {
      dispatch(signupFail(error.response.message))
    }
  }
}

export const getProfile = () => {
  return async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
    try {
      const response = await client.get('/user')
      const user = response.data
      console.log('user', user)
      dispatch(getProfileSuccess(user))
    } catch (error) {
      dispatch(getProfileFail(error.response.message))
    }
  }
}

export const logout = () => {
  return async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
    await firebase.auth().signOut()
    await dispatch(actions.resetAppState())
  }
}

export const firebaseLogin = (form: LoginForm) => {
  return async (dispatch: ThunkDispatch<MainState, {}, Action>) => {
    try {
      if (firebase.auth().currentUser) {
        await dispatch(actions.logout())
      }
      const { user } = await firebase.auth().signInWithEmailAndPassword(form.email, form.password)

      const token = await user.getIdToken()

      client.defaults.headers.authorization = `Bearer ${token}`

      const userProfile: UserModel = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
      }
      dispatch(loginSuccess(userProfile))
    } catch (error) {
      dispatch(loginFail(error.message))
    }
  }
}
