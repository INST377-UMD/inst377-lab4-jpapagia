// Alert Name Function
function alertName() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        alert(`Hi ${name}!`);
    } else {
        alert("Please enter a name.");
    }
}

// Change Color Function
let isBlue = true;
function changeColor() {
    const body = document.getElementById('body');
    if (isBlue) {
        body.style.backgroundColor = 'green';
    } else {
        body.style.backgroundColor = 'lightblue';
    }
    isBlue = !isBlue;
}

// Validate Text Function
function validateText() {
    const text = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert("Text contains special characters!");
    } else {
        alert("Text is valid!");
    }
}

// Add Text Function
function addText() {
    const heading = document.getElementById('heading');
    heading.innerHTML += " Add Text";
}
