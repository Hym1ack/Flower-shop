import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './js/config'

const firebaseApp = initializeApp(firebaseConfig)

export const database = getFirestore(firebaseApp)
