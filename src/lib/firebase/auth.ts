import firebaseApp from '.'
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
export const auth = getAuth(firebaseApp)

type SignUpType = {
  email: string
  password: string
}
export async function signup({ email, password }: SignUpType) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log(userCredential.user)
      return
    })
    .catch((error) => {
      console.log(error)
    })
}

export function login({ email, password }: SignUpType) {
  const auth = getAuth(firebaseApp)
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          console.log(userCredential.user)
        })
        .catch((error) => {
          console.log(error)
        })
    })
    .catch((error) => {
      console.log(error)
    })
}

export function logout(): Promise<void> {
  return new Promise((resolve, reject) => {
    const auth = getAuth(firebaseApp)
    signOut(auth)
      .then(() => {
        resolve()
      })
      .catch((error) => reject(error))
  })
}
