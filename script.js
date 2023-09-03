const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const tens = document.querySelector(".tens");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");
const startBtn = document.querySelector(".start");

let interval;
let tensNum = 0;
let secondsNum = 0;
let minutesNum = 0;
let hoursNum = 0;


startBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    tensNum = 0;
    secondsNum = 0;
    minutesNum = 0;
    hoursNum = 0;
    tens.innerHTML = `0${tensNum}`;
    seconds.innerHTML = `0${secondsNum}`;
    minutes.innerHTML = `0${minutesNum}`;
    hours.innerHTML = `0${hoursNum}`;
});

function startTimer() {
    tensNum++;

    if (tensNum <= 9) {
        tens.innerHTML = `0${tensNum}`;
    } else if (tensNum > 9) {
        tens.innerHTML = tensNum;
    }

    if (tensNum > 99) {
        secondsNum++;
        seconds.innerHTML = `0${secondsNum}`;
        tensNum = 0;
        tens.innerHTML = `0${tensNum}`;
    } else if (secondsNum > 9) {
        seconds.innerHTML = secondsNum;
    }

    if (secondsNum > 59) {
        minutesNum++;
        minutes.innerHTML = `0${minutesNum}`;
        secondsNum = 0;
        seconds.innerHTML = `0${secondsNum}`;
        tensNum = 0;
        tens.innerHTML = `0${tensNum}`;
    } else if (minutesNum > 9) {
        minutes.innerHTML = minutesNum;
    }

    if (minutesNum > 59) {
        hoursNum++;
        hours.innerHTML = `0${hoursNum}`;
        minutesNum = 0;
        minutes.innerHTML = `0${minutesNum}`;
        secondsNum = 0;
        seconds.innerHTML = `0${secondsNum}`;
        tensNum = 0;
        tens.innerHTML = `0${tensNum}`;
    } else if (hoursNum > 9) {
        hours.innerHTML = hoursNum;
    }

}