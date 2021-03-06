import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'
import 'firebase/auth'


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBEKw7xHLjfa-eUomMgB5nsoWbp0Y-fWzk",
    authDomain: "noteherder-8e6b9.firebaseapp.com",
    databaseURL: "https://noteherder-8e6b9.firebaseio.com",
    projectId: "noteherder-8e6b9",
    storageBucket: "noteherder-8e6b9.appspot.com",
    messagingSenderId: "674364939816"
  }
 const app=  firebase.initializeApp(config)

 export const auth = firebase.auth()
 export const googleProvider = new firebase.auth.GoogleAuthProvider();
 export const githubProvider = new firebase.auth.GithubAuthProvider()


 export default Rebase.createClass(app.database())