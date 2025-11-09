// Shutdown start date: October 1, 2025, 12:01 AM
const shutdownStart = new Date('2025-10-01T00:01:00');

function updateTimer() {
  const now = new Date();
  let diff = now - shutdownStart;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  // Update timer on the page
  document.getElementById('timer').textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update every second
setInterval(updateTimer, 1000);
updateTimer();
