import { ref, firebaseAuth } from '../config/constants'

export function auth (name, email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set({
      name: user.name,
      email: user.email,
      uid: user.uid,
      type_user: 0,
      personal_id: '',
      phone: ''
    })
    .then(() => user)
}
