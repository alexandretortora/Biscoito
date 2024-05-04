// Variables

const cookieClosed = document.querySelector("#cookieClosed");
const cookieOpened = document.querySelector("#cookieOpened");
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

// Events, Callback function 

cookieClosed.addEventListener('click', openTheCookie);
cookieOpened.addEventListener('click', cookieReset);

function openTheCookie(e){
    e.preventDefault()
        toggleScreen()       
    };

function cookieReset(e){
    e.preventDefault
    toggleScreen()

};

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")    
};
