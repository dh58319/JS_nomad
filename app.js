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

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    h1.classList.toggle(clickedClass);
}
h1.addEventListener("click",handleTitleClick);
