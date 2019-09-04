// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6FQjqA8RIt9ZkZB1Lcw8WhMxVktgI3oY",
    authDomain: "portfoliocontact-680d5.firebaseapp.com",
    databaseURL: "https://portfoliocontact-680d5.firebaseio.com",
    projectId: "portfoliocontact-680d5",
    storageBucket: "portfoliocontact-680d5.appspot.com",
    messagingSenderId: "87969096774",
    appId: "1:87969096774:web:b4502c55c0e80637"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();

//need to create a button for users to add their info to the database.
$("#add-contact-info").on("click", function (event) {
    event.preventDefault();

    //garab info from the user input
var name = $("#name").val().trim();
var email = $("#email").val().trim();
var messageme = $("#messageme").val().trim();
  
    //create a local temp object to hold the data
    var contactData = {
        name: name,
        email: email,
        messageme: messageme,
    };
    //to upload contact data to the database
    database.ref().push(contactData);

    console.log(contactData.name);
    console.log(contactData.email);
    console.log(contactData.messageme);

    //to clear the text boxes
    $("#name").val("");
    $("#email").val("");
    $("#messageme").val("");
});
