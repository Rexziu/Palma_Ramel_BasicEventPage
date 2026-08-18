const heading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const typingMessage = document.querySelector("#typingMessage");
const messageArea = document.querySelector("#messageArea");

const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");

function displayGreeting() {
    const name = nameInput.value.trim();

    if (name === "") {
        messageArea.textContent =
            "Please enter your name.";
    } else {
        heading.textContent = "Hello, " + name;
        console.log("The greeting was displayed successfully.");
        messageArea.textContent =
            "The greeting was displayed successfully.";
    }
}

function showTypedText() {
    typingMessage.textContent =
        "You are typing: " + nameInput.value;
}

function changeBackground() {
    document.body.style.backgroundColor = "MediumPurple";
    console.log("Background color changed.");
    messageArea.textContent = 
    "Background color changed.";
}

function resetPage() {
    heading.textContent = "Basic Event Page";
    nameInput.value = "";
    typingMessage.textContent = "You are typing:";
    messageArea.textContent = "Enter your name and select an action.";
    document.body.style.backgroundColor = "#f3f4f6";
}

function greetingMouseOver() {
    console.log('The mouse is over the greeting button.');
}
function backgroundMouseOver() {
    console.log('The mouse is over the background button.');
}
function resetMouseOver() {
    console.log('The mouse is over the reset button.');
}

greetingButton.addEventListener("mouseover", greetingMouseOver);
backgroundButton.addEventListener("mouseover", backgroundMouseOver);
resetButton.addEventListener("mouseover", resetMouseOver);
greetingButton.addEventListener("click", displayGreeting);
backgroundButton.addEventListener("click", changeBackground);
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTypedText);

console.log("JavaScript file loaded successfully.");

