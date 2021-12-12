// array on Javascript
//use [,]
// object 
/*const player = {
    name : "nico" ,
    points : 10,
    fat: true,
};
 

//function 2.7 
 
function sayHello(){
    //what ever I write here, it will execute 
    
}

//cosnt age = prompt(message, default) -> pause until user make resoponce
// how to change type 
// parseInt() converse string into intager.
//

//git init

const title = document.getElementById("title"); 
console.dir(title);

title.innerText = "Got you!"; 
*/

const title = document.querySelector("div.hello:first-child h1");

title.innerText = "Hello";
function handleTitleClick(){
    console.log("Title was clicked");
}
title.addEventListener("click",handleTitleClick);



