// script.js
document.getElementById('animateButton').addEventListener('click', function() {
  let animationDiv = document.getElementById('animationDiv');
  animationDiv.style.display = 'block'; // Show the div
  animationDiv.classList.add('slideIn'); // Trigger animation
});
