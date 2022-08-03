const signupLogin = document.getElementById('signup-login');
const signupPassword = document.getElementById('signup-password');
const signupConfirmPassword = document.getElementById('signup-confirm-password');
const signupButton = document.getElementById('signup-button');
const database = window.localStorage;


// regex for login (minimum 8 length)
const checkLoginValidity = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;


// regex for password (minimum 8 length, minimum 1 letter)
const checkPasswordValidity = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


// function for checking password and confirm password fields equality
const checkConfirmation = (a, b) => {
    return a.value === b.value
}


// checking to add only not existing login
const checkingUserExists = () => {
    if(database.getItem(signupLogin.value))  {
        return false
    }
    return true
}


// checking if all validations of sign up have been passed
const allValidationsPass = () => {
    if (
        checkingUserExists() &&
        checkConfirmation(signupPassword, signupConfirmPassword) &&
        checkLoginValidity.test(signupLogin.value) &&
        checkPasswordValidity.test(signupPassword.value)
    ) {
        return true
    }
    return false
}



// adding event listener to sign up button with checks 
signupButton.addEventListener('click', () => {
     allValidationsPass() ?  database.setItem(`${signupLogin.value}`, signupLogin.value) : null
})