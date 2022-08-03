const signupLogin = document.getElementById('signup-login');
const signupPassword = document.getElementById('signup-password');
const signupConfirmPassword = document.getElementById('signup-confirm-password');
const signupButton = document.getElementById('signup-button');

const checkLoginValidity  = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;

const checkPasswordValidity  = ''

const checkConfirmation = (a,b) => {
   return a.value === b.value
}
 

signupButton.addEventListener('click', () => {
    if(
        checkConfirmation(signupPassword,signupConfirmPassword)
        && checkLoginValidity.test(signupLogin.value)
        
    ) {
       console.log(8)
    }
})