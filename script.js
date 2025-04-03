// script.js
document.getElementById("log").onclick = function() {
    const sleepTimeInput = document.getElementById("sleep-time");
    const wakeTimeInput = document.getElementById("wake-time");
    const hoursInput = document.getElementById("hours");
    const messageDisplay = document.getElementById("message");

    const sleepTime = sleepTimeInput.value;
    const wakeTime = wakeTimeInput.value;
    const manualHours = parseFloat(hoursInput.value);

    let hours;

    if (sleepTime && wakeTime) {
        hours = calculateSleepHours(sleepTime, wakeTime);
    } else if (!isNaN(manualHours) && manualHours > 0) {
        hours = manualHours;
    } else {
        messageDisplay.textContent = "Please enter sleep and wake times or hours slept.";
        return;
    }

    if (hours >= 7 && hours <= 9) {
        messageDisplay.textContent = "Good sleep!";
    } else if (hours < 7) {
        messageDisplay.textContent = "Too little sleep.";
    } else {
        messageDisplay.textContent = "Too much sleep.";
    }
};

function calculateSleepHours(sleepTime, wakeTime) {
    const sleepDate = new Date(`2000-01-01T${sleepTime}`);
    const wakeDate = new Date(`2000-01-01T${wakeTime}`);

    let diff = (wakeDate - sleepDate) / (1000 * 60 * 60);

    if (diff < 0) {
        diff += 24;
    }

    return diff;
}