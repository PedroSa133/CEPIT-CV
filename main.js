"use strict";

let btnNavBar = document.querySelector("#btnNavBar");
let navBar    = document.querySelector(".container-nav-bar");
let container = document.querySelector(".container");
let btnToggleActive = false;

btnNavBar.addEventListener("click", navBarActive);

function navBarActive(){
    if(!btnToggleActive){
        container.style.marginTop = "10px";
        navBar.classList.add('container-nav-bar-active');
        btnToggleActive = true;
    } else{
        container.style.marginTop = "-210px";
        navBar.classList.remove('container-nav-bar-active');
        btnToggleActive = false;
    }
}
