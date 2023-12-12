var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

setInterval(function() {
    console.clear();
    seconds++;
    if(seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if(minutes >= 60) {
        minutes = 0;
        hours++;
    }
    if(hours > 23) {
        hours = 0;
    }
    var minutesString = minutes + '';
    if(minutes < 10) {
        minutesString = `0${minutes}`;
    }
    console.log(`${hours}:${minutesString}:${seconds}`);

}, 1000);