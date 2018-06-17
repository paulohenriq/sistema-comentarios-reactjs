import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBHf4Jg_RlF2fJ3TA0RDLZp2t86sNAhXA",
  authDomain: "comentarios-com-react-js.firebaseapp.com",
  databaseURL: "https://comentarios-com-react-js.firebaseio.com",
  storageBucket: "comentarios-com-react-js.appspot.com",
  messagingSenderId: "1044977463705"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base