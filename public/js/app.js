
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

var config = {
    apiKey: "AIzaSyCFWzxl0VLYePJ-5O8U5umWWNJLT7TG9Fo",
    authDomain: "urmatt-app.firebaseapp.com",
    databaseURL: "https://urmatt-app.firebaseio.com",
    projectId: "urmatt-app",
    storageBucket: "urmatt-app.appspot.com",
    messagingSenderId: "523826665141"
};
// if(!firebase.apps.length){
    firebase.initializeApp(config);
// }
var db = firebase.firestore();

db.collection("reports").add({
    eggs: 8,
    firstName: "Joe",
    lastName: "Schmoe"
});

// fetch('https://urmatt-app.firebaseio.com/reports.json')
// fetch('https://firestore.googleapis.com/projects/urmatt-app/databases/reports/documents')
//     .then(function(res){
//         console.log(res);
//         return res.json();
//     })
//     .then(function(data){
//         console.log(Object.entries(JSON.parse(JSON.stringify(data))));
//     })
//     .catch(function(err){
//         console.log(err);
//     });