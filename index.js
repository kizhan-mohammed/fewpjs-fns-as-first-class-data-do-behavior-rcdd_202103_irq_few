/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
let time = "HH:MM"
function greet(time) {
  if (time<12:00) {
    return `SGood Morning`;
  }
  if (time>12:00 && time<17:00) {
    return`Good Afternoon`;
  }
  if (time>17:00){
    return`Good Evening`;
  }
}
function greet();

function displayMessage(time){
  if(time ==="HH:MM" ){
}