var hamburgerIcon = document.querySelector(".hamburger-icon");
var bar1          = document.querySelector("#bar-1");
var bar2          = document.querySelector("#bar-2");
var bar3          = document.querySelector("#bar-3");
var navMenu       = document.querySelector(".nav");

hamburgerIcon.addEventListener("click", function(){
    bar1.classList.toggle("bar-1-active");
    bar2.classList.toggle("bar-2-active");
    bar3.classList.toggle("bar-3-active");
});