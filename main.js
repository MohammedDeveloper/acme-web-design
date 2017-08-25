/// Initialize Firebase
var config = {
    apiKey: "AIzaSyDEEiw53hZjrfFwN0F9XD1DpquGsANdhmM",
    authDomain: "pocpostmessages.firebaseapp.com",
    databaseURL: "https://pocpostmessages.firebaseio.com",
    projectId: "pocpostmessages",
    storageBucket: "",
    messagingSenderId: "191898226798"
};
firebase.initializeApp(config);

/// set the collection...
var messageRef = firebase.database().ref("messages");

/// Add the document submit button listener...
document.getElementById("messageForm").addEventListener("submit", submitMessage);

/// Handles the submit message fn
function submitMessage(event) {

    /// prevent default...
    event.preventDefault();

    /// set the message
    var messageObj = {
        name: getInputValue("name"),
        // company: getInputValue("company"),
        // emailaddress: getInputValue("emailaddress"),
        // phone: getInputValue("phone"),
        message: getInputValue("message")
    };

    /// save the message
    saveMessage(messageObj);
    document.getElementById("alertMessage").classList.remove("hide");
    document.getElementById("alertMessage").classList.remove("fadeOutDown");
    document.getElementById("alertMessage").classList.add("fadeInDown");
    document.getElementById("messageForm").reset();
    window.scrollTo(0, 0);

    /// set the timeout
    setTimeout(function () {
        /// remove the message      
        document.getElementById("alertMessage").classList.remove("fadeInDown");
        document.getElementById("alertMessage").classList.add("fadeOutDown");

        /// set the timeout
        setTimeout(function () {
            /// hide the message..
            document.getElementById("alertMessage").classList.add("hide");
        }, 2000);
    }, 3000);


}

/// gets the input value...
function getInputValue(element) {
    return document.getElementById(element).value;
}

/// saves the message to firebase collection...
function saveMessage(messageObj) {

    /// make the push ready....
    var message = messageRef.push();
    message.set(messageObj);
}