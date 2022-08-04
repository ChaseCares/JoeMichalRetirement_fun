END_DATE = "December 31, 2022 00:00:00"
// functions = [countDownDefault(), countDownMilliseconds()];
let i = 0;
let currentInterval = "";

console.log("Version: 1");

window.onload = function() {
    countDownSwitcher(i);
    questionMarkSwitcher();
};

function buttonPress(){
    i++;
    clearInterval(currentInterval);
    countDownSwitcher(i);
}

function buttonCountDownDefault(){
    i = 0;
    countDownSwitcher(i);
}

function buttonCountDownMilliseconds(){
    i = 1;
    countDownSwitcher(i);
}

function countDownSwitcher() {
    clearInterval(currentInterval);
    gEbIDclass("buttonDefault", "button");
    gEbIDclass("buttonMS", "button");

    if (i == 0) {
        gEbIDclass("buttonDefault", "button active");
        countDownDefault();
    } else if (i == 1) {
        countDownMilliseconds();
        gEbIDclass("buttonMS", "button active");
    } else{
        countDownDefault();
        gEbIDclass("buttonDefault", "button active");
        i = 0;
    }
}

function gEbID(ID, content) {document.getElementById(ID).innerHTML = content; }
function gEbIDclass(ID, newClass) {document.getElementById(ID).className = newClass; }

function fullCountDownDefault(){
    var countDownDate = new Date(END_DATE).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    gEbID("days", Math.floor(distance / (1000 * 60 * 60 * 24)));
    gEbID("hours", Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    gEbID("minutes", Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    gEbID("seconds", Math.floor((distance % (1000 * 60)) / 1000));
}


function countDownDefault(){
    gEbID("countdown-container", `<div id="countDownDefault-container"><div class="digit" id="days"></div>
		<div class="digit" id="hours"></div>
		<div class="digit" id="minutes"></div>
		<div class="digit" id="seconds"></div>
		<div class="digit-text">Days</div>
		<div class="digit-text">Hours</div>
		<div class="digit-text">Minutes</div>
		<div class="digit-text">Seconds</div></div>`)
        fullCountDownDefault();

        currentInterval = setInterval(function() {
            fullCountDownDefault();
        }, 1000);
}

function countDownMilliseconds(){
    gEbID("countdown-container",`<div class="digit ms" id="milliseconds"></div>
    <div class="milliseconds">Milliseconds</div>`);

    currentInterval = setInterval(function() {
        var countDownDate = new Date(END_DATE).getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        gEbID("milliseconds", distance.toLocaleString('en-US'));
    }, 1);
}

function countdownDogYears(){
    var dogYears = document.getElementById("dog-years").value;
    var dogYears = dogYears * 7;
    gEbID("dog-years-result", dogYears);
}


function questionMarkSwitcher(){
    var _ = setInterval(function() {
    var randomNumber = Math.random();
        if (randomNumber < 0.5) {
            gEbID("text-retires", "retires!");
        } else {
            gEbID("text-retires","retires?");
        }
    }, 5000);
}
