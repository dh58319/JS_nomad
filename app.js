const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginButtonClick(){
    console.log(loginInput.value);
}
loginButton.addEventListener("click",onLoginButtonClick );
