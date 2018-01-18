var submitBtn = document.querySelector("#submitBtn");
var form = document.querySelector("form");
var eggInput = document.querySelector("#eggInput");

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

}());

var data = {
    eggs: 5
};

function submitReport(data){
    var reportData = {
        eggs: data.eggs
    };

    // Get a key for a new User
    var newReportKey = firebase.database().ref().child('reports').push().key;

    var updates = {};
    updates['/reports/' + newReportKey] = reportData;

    return firebase.database().ref().update(updates);
}

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    numEggs = eggInput.value;
    console.log(numEggs);
    data = {
        eggs: numEggs
    };
    submitReport(data);
});

