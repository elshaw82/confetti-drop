// grab the button
const button = document.querySelector(".button");
button.addEventListener('click', confettiDrop);

function confettiDrop() {
    //grab the divs
var divs = document.querySelectorAll(".inner");
// loop over and add the new class
 for (var i = 0; i < divs.length; i++) {
     divs[i].classList.add("confetti");
 }
}
