let home = document.getElementById("home-el")
let guest = document.getElementById("guest-el")
function hadd1() {
    home.textContent = Number(home.textContent) + 1
}
function hadd2() {
    home.textContent = Number(home.textContent) + 2
}
function hadd3() {
    home.textContent = Number(home.textContent) + 3
}
function gadd1() {
    guest.textContent = Number(guest.textContent) + 1
}
function gadd2() {
    guest.textContent = Number(guest.textContent) + 2
}
function gadd3() {
    guest.textContent = Number(guest.textContent) + 3
}
function resetHome(){
    home.textContent = 0
}
function resetGuest(){
    guest.textContent = 0
}
