import { useEffect, useState } from 'react'
import * as firebase from 'firebase/app'
import { useThunkDispatch } from './redux'
import 'firebase/auth'
import { initializeFirebaseAuth } from '../config/firebase'
import * as actions from '../store/actions'

export const useAuth = () => {
  const dispatch = useThunkDispatch()
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    let fbUnsub: firebase.Unsubscribe

    const firebaseListener = async () => {
      await initializeFirebaseAuth()
      // listens for changes in auth state, loads data if user is logged in
      fbUnsub = firebase.auth().onAuthStateChanged(async user => {
        console.log('auth state change', user)
        if (user) {
          await dispatch(actions.getProfile())
          await dispatch(actions.getProjects())
          setLoggedIn(true)
        } else {
          setLoggedIn(false)
        }
        setLoading(false)
      })
    }

    firebaseListener()
    return () => fbUnsub()
  }, [dispatch])
  return [loading, loggedIn]
}
