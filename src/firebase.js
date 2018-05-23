import firebase from "firebase"


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBEKw7xHLjfa-eUomMgB5nsoWbp0Y-fWzk",
    authDomain: "noteherder-8e6b9.firebaseapp.com",
    databaseURL: "https://noteherder-8e6b9.firebaseio.com",
    projectId: "noteherder-8e6b9",
    storageBucket: "",
    messagingSenderId: "674364939816"
  };
  firebase.initializeApp(config);

  export default firebase
