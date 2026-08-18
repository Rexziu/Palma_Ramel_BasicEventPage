//DOM Element Selections
const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const messageArea = document.querySelector("#messageArea");

const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");


//Displays the greeting using the user's input name.
// Checks input then update heading and status message area.
function displayGreeting() {
    const userName = nameInput.value.trim();
    if (userName === "") {
        messageArea.textContent =
            "Please enter your name.";
    } else {
        mainHeading.textContent = "Hello, " + userName + "!";
        messageArea.textContent =
            "The greeting was displayed successfully.";
    }
}

//Updates the live typing feedback paragraph in real-time when the user types.
function showTypesText() {
    messageArea.textContent = "You are typing: " + nameInput.value;
    "You are typing: " + nameInput.value;
    console.log("Input event deleted.");
}

//Changes the background color of the body to MediumPurple and updates status.
function changeBackground() {
    document.body.style.backgroundColor = "MediumPurple";
    console.log("Background color changed.");
    messageArea.textContent = "Background color changed.";
}

//Resets the page elements, inputs, background color, and status messages back to default.
function resetPage() {
    mainHeading.textContent = "Basic Event Page";
    nameInput.value = "";
    messageArea.textContent = "";
    document.body.style.backgroundColor = "#f3f4f6";
    console.log("Reset button was clicked.")
}

//Mouseover event handler functions for console logging.
greetingButton.addEventListener("mouseover", function() {
    console.log("The mouse is over the greeting button.");
});
backgroundButton.addEventListener("mouseover", function() {
    console.log("The mouse is over the background button.");
});
resetButton.addEventListener("mouseover", function() {
    console.log("The mouse is over the reset button.");
});

greetingButton.addEventListener("click", displayGreeting);
backgroundButton.addEventListener("click", changeBackground);
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTypesText);


//Initialization Log
console.log("JavaScript file loaded successfully.");

