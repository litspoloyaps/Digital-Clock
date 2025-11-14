function updateClock() {
  const now = new Date();
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = 'AM';

  // Format hours to 12-hour format
  if (hours >= 12) {
    ampm = 'PM';
    if (hours > 12) hours -= 12; // Convert 24-hour time to 12-hour time
  } else if (hours === 0) {
    hours = 12; // Midnight hour adjustment
  }

  // Add leading zeros if necessary
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Update the clock display
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('ampm').textContent = ampm;

  // Update the date
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', dateOptions);
  document.getElementById('date').textContent = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
