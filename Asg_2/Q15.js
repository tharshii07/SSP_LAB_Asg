
// 15. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
function displayTime() {
 const date = new Date();
 const hours = formatTimeUnit(date.getHours());
 const minutes = formatTimeUnit(date.getMinutes());
 const seconds = formatTimeUnit(date.getSeconds());
 
 console.log(${hours}:${minutes}:${seconds});
}
function formatTimeUnit(unit) {
 return unit < 10 ? '0' + unit : unit;
}
// Display the time every second
setInterval(displayTime, 1000);