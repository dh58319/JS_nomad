const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    greeting.innerHTML= `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkEvent);
 