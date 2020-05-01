import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import imageCompression from 'browser-image-compression'

export const initializeFirebaseAuth = async () => {
  await firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'josefs-cms.firebaseapp.com',
    databaseURL: 'https://josefs-cms.firebaseio.com',
    projectId: 'josefs-cms',
    storageBucket: 'josefs-cms.appspot.com',
    messagingSenderId: '329786074187',
    appId: '1:329786074187:web:2b29f1441f50e2eee019ce',
  })
  await firebase.auth()
}
const options = {
  maxSizeMB: 2,
  maxWidthOrHeight: 1920,
  useWebWorker: false,
}

export const uploadImage = async (ref: string, Image: File | Blob) => {
  try {
    const compressedImage = await imageCompression(Image, options)
    const storageRef = firebase.storage().ref(ref)
    await storageRef.put(compressedImage)
    return await storageRef.getDownloadURL()
  } catch (error) {
    console.log(error.message)
    throw error
  }
}
