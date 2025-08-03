const ring = document.querySelector('.button-ring');
let angle = 0;

function updateRingRotation() {
  ring.style.transform = `rotate(${angle}deg)`;
}

function rotateRing(direction) {
  angle += direction;
  updateRingRotation();
}

document.addEventListener('mousemove', (e) => {
  const screenWidth = window.innerWidth;
  const mouseX = e.clientX;

  if (mouseX < screenWidth * 0.3) {
    rotateRing(-1); // Counterclockwise
  } else if (mouseX > screenWidth * 0.7) {
    rotateRing(1); // Clockwise
  }
});

document.getElementById('ring-container').addEventListener('click', () => {
  // The "top" button is the one at angle 0
  // Find the closest button to the top (rotate-angle 0)
  const buttons = ring.querySelectorAll('button');
  const activeIndex = Math.round((-angle / (360 / buttons.length))) % buttons.length;
  const index = (activeIndex + buttons.length) % buttons.length;
  buttons[index].click();
});
