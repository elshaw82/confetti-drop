const button = document.querySelector(".button");
button.addEventListener('click', confettiDrop);

function confettiDrop() {
  var inner = document.querySelectorAll("inner");
    inner.classList.add("confetti");
}  
