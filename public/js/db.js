// var submitBtn = document.querySelector("#submitBtn");
// var form = document.querySelector("form");
// var eggInput = document.querySelector("#eggInput");
// var firstNameInput = document.querySelector("#firstName");
// var lastNameInput = document.querySelector("#lastName");
//
// var config = {
//     apiKey: "AIzaSyCFWzxl0VLYePJ-5O8U5umWWNJLT7TG9Fo",
//     authDomain: "urmatt-app.firebaseapp.com",
//     // databaseURL: "https://urmatt-app.firebaseio.com",
//     projectId: "urmatt-app",
//     // storageBucket: "urmatt-app.appspot.com",
//     // messagingSenderId: "523826665141"
// };
// firebase.initializeApp(config);
//
//
// var db = firebase.firestore();
//
// db.collection("reports").add({
//     eggs: 7,
//     firstName: "Joe",
//     lastName: "Schmoe"
// });

// function submitReport(data){
//
//     // Get a key for a new User
//     var newReportKey = firebase.database().ref().child('reports').push().key;
//
//     var updates = {};
//     updates['/reports/' + newReportKey] = data;
//
//     return firebase.database().ref().update(updates);
// }
//
// submitBtn.addEventListener("click", function(e) {
//     e.preventDefault();
//     var data = {
//         firstName: firstNameInput.value,
//         lastName: lastNameInput.value,
//         eggs: eggInput.value,
//         timestamp: Date.now()
//     };
//     submitReport(data);
//     form.reset();
// });

