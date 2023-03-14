let home = 0
let guest = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let status = document.getElementById("header")
let seconds = 0
let timer = setInterval(upTimer, 1000);
let countup = document.getElementById("countup")

function homeSum(points) {
    home+= points
    homeScore.textContent = home
    updateScore()
}

function guestSum(points) {
    guest+= points
    guestScore.textContent = guest
    updateScore()
}

function updateScore() {
    if (home>guest) {
        status.textContent = "Home is winning!"
    }
    else if (guest>home) {
        status.textContent = "Guest is winning!"
    }
    else status.textContent = "Game tied!"
}

function upTimer() {
    ++seconds;
    let minute = Math.floor(seconds / 60);
    let updSecond = seconds - (minute * 60);
    let minuteString = "0"
    let secondsString = "0"
    if (minute<10) {
        minuteString = "0"+minute
    }
    else {
        minuteString = minute
    }
    if (updSecond<10) {
        secondsString = "0"+updSecond
    }
    else {
        secondsString = updSecond
    }
    
    countup.textContent = minuteString + ":" + secondsString;
}

window.homeSum = homeSum
window.guestSum = guestSum
