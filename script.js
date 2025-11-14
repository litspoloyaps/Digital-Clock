function updateClock() {
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  
  // Get the current time
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Format time and display
  const timeString = `${hours} : ${minutes} : ${seconds} ${ampm}`;
  timeElement.textContent = timeString;

  // Get the current date
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const day = dayNames[now.getDay()];
  const month = monthNames[now.getMonth()];
  const dayOfMonth = now.getDate();
  const year = now.getFullYear();
  
  const dateString = `${day}, ${month} ${dayOfMonth}, ${year}`;
  dateElement.textContent = dateString;
}

// Call updateClock every second to update the time
setInterval(updateClock, 1000);

// Call it initially to set the correct time right away
updateClock();
