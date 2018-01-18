//      var button = document.querySelector("button");
// Initialize Firebase
(function() {
    var config = {
        apiKey: "AIzaSyCFWzxl0VLYePJ-5O8U5umWWNJLT7TG9Fo",
        authDomain: "urmatt-app.firebaseapp.com",
        databaseURL: "https://urmatt-app.firebaseio.com",
        projectId: "urmatt-app",
        storageBucket: "urmatt-app.appspot.com",
        messagingSenderId: "523826665141"
    };
    firebase.initializeApp(config);

//     const preObject = document.querySelector("#object");
//     const ulList = document.querySelector("#list");
//
//     const dbRefObject = firebase.database().ref().child('object');
//     const dbRefList = dbRefObject.child('hobbies');
//
//
//     dbRefObject.on("value", snap => {
//         preObject.innerText = JSON.stringify(snap.val(), null, 3);
//     });
//     dbRefList.on('child_added', snap => {
//         const li = document.createElement('li');
//         li.innerText = snap.val();
//         li.id = snap.key;
//         ulList.appendChild(li);
//     });
//
//     dbRefList.on('child_changed', snap => {
//         const liChanged = document.getElementById(snap.key);
//         liChanged.innerText = snap.val();
//     });
//
//     dbRefList.on('child_removed', snap => {
//         const liRemoved = document.getElementById(snap.key);
//     liRemoved.remove();
// });
//     var database = firebase.database();
//     buttonData(database);
}());



// function buttonData(db) {
//     button.addEventListener("click", function () {
//         db.ref('object').set({
//             username: "testuser2"
//         });
//     });
// }