function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initial clock update
updateClock();
