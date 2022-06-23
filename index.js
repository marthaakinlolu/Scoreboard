let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function plusOneH() {
    countHome += 1 
    homeScore.textContent = countHome 
}

function plusTwoH() {
    countHome += 2 
    homeScore.textContent = countHome 
}
function plusThreeH() {
    countHome += 3
    homeScore.textContent = countHome 
}
function plusOneG() {
    countGuest += 1 
    guestScore.textContent = countGuest 
}

function plusTwoG() {
    countGuest += 2 
    guestScore.textContent = countGuest 
}
function plusThreeG() {
    countGuest += 3
    guestScore.textContent = countGuest 
}
