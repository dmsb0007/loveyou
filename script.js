// Optional: If you want to trigger the animation when the page is fully loaded
window.onload = function() {
  let heart = document.getElementById('heart');
  let text = document.getElementById('text');
  heart.style.animation = 'heartPop 2s ease-in-out forwards';
  text.style.animation = 'textFadeIn 2s 2s forwards';  // Delay text fade-in after heart animation
};
