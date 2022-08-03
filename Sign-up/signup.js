// getting sign-up page login input field
const signupLogin = document.getElementById('signup-login');
// getting sign-up page password input field
const signupPassword = document.getElementById('signup-password');
// getting sign-up page confirm password input field
const signupConfirmPassword = document.getElementById('signup-confirm-password');
// getting sign-up page button to sign up 
const signupButton = document.getElementById('signup-button');
// getting wrong-block if something goes wrong to show errors
const wrongBlock = document.getElementById('wrong-block');
// renaming the localeStorage to database to work with
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

// adding event listener to sign up button with checks  or show possible reasons of fail 
signupButton.addEventListener('click', () => {
    // if everything is ok adding user to our database
    if(allValidationsPass()){
        database.setItem(`${signupLogin.value}`, signupLogin.value);
    }  
    // if something is wrong show user possible issues
    else {
           wrongBlock.innerHTML = `
             <p> Something Went Wrong </p>
             <p>  possible issues  </p>
             <ul> 
               <li> user with username already exists </li>
               <li> password and confirm password are not matched </li>
               <li> there is issue within fields requierements </li>
             </ul>
           `
    }
})