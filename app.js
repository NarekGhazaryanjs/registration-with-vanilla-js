//   if (database.getItem(signupLogin.value))
const database = window.localStorage;

// getting login button from login html
const loginButton = document.getElementById('login-button');


// getting sign in login input form html
const signinLogin = document.getElementById('login');


// getting sign in password input field
const signinPassword = document.getElementById('password');


// checking if user Exists to sign in
const ifUserExistsLogIn = () => {
    if (database.getItem(signinLogin.value) && database.getItem(signinLogin.value) === signinPassword.value) {
       console.log(database.getItem(signinLogin.value))
       let userName = database.getItem(signinLogin.value);
       document.querySelector('section').style.display = 'none';
       document.getElementById('user-block').style.display = 'block';
       document.getElementById('user-block').append(userName)
    }
}

loginButton.addEventListener('click', ifUserExistsLogIn)

