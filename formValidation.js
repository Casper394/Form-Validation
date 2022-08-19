const errorMessagesList = document.querySelector(".error-messages");
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitButton = document.querySelector("#submit-button")
const nameErrorBox = document.querySelector("#name-error-box");
const passwordErrorBox = document.querySelector("#password-error-box");
const nameFreeSpace = document.querySelector("#name-free-space");
const emailFreeSpace = document.querySelector("#email-free-space");
const passwordFreeSpace = document.querySelector("#password-free-space");

submitButton.style.width = nameInput.offsetWidth + "px";

form.addEventListener("submit", (e) => {
    if (nameInput.value.length < 2) {
        e.preventDefault()
        nameFreeSpace.remove()
        let pError = document.createElement("p")
        let pErrorMessage = document.createTextNode("Name must be at least 2 letters long 🠕")
        pError.appendChild(pErrorMessage)
        pError.setAttribute("class", "pError")
        nameErrorBox.appendChild(pError)
    }
    if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
        e.preventDefault()
        nameFreeSpace.remove()
        let pError = document.createElement("p")
        let pErrorMessage = document.createTextNode("Name must only have letters 🠕")
        pError.appendChild(pErrorMessage)
        pError.setAttribute("class", "pError")
        nameErrorBox.appendChild(pError)
    }
    if (passwordInput.value.length < 6) {
        e.preventDefault()
        passwordFreeSpace.remove()
        let pError = document.createElement("p")
        let pErrorMessage = document.createTextNode("Password must be over 6 letters long 🠕")
        pError.appendChild(pErrorMessage)
        pError.setAttribute("class", "pError")
        passwordErrorBox.appendChild(pError)
    }

});