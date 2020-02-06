import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyB5QbZyqZZs-41hv6o2sOF_LWUMdtO-5iU",
    authDomain: "sosaperopushnotify.firebaseapp.com",
    databaseURL: "https://sosaperopushnotify.firebaseio.com",
    projectId: "sosaperopushnotify",
    storageBucket: "sosaperopushnotify.appspot.com",
    messagingSenderId: "384845307679"
  };
 const fire = firebase.initializeApp(config);
export default fire;