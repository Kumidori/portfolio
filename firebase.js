import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCPbATEptQkvrxkz2kLf9YzZGP7VNUUrLg",
    authDomain: "smoothies-5a75a.firebaseapp.com",
    databaseURL: "https://smoothies-5a75a.firebaseio.com",
    projectId: "smoothies-5a75a",
    storageBucket: "",
    messagingSenderId: "841931770683"
};

firebase.initializeApp(config);
export default firebase;