const startBtn = document.getElementById('start');
const minutesInput = document.getElementById('minutes');
const timerDisplay = document.getElementById('timer');
const endMessage = document.getElementById('end-message');
const resetBtn = document.getElementById('reset');

let interval;

startBtn.addEventListener('click', () => {
  const minutes = parseInt(minutesInput.value);
  if (isNaN(minutes) || minutes <= 0) return;

  let seconds = minutes * 60;
  updateDisplay(seconds);
  timerDisplay.classList.remove('hidden');
  endMessage.classList.add('hidden');

  clearInterval(interval);
  interval = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(interval);
      timerDisplay.textContent = '00:00';
      timerDisplay.style.color = 'red';
      endMessage.classList.remove('hidden');
      return;
    }
    updateDisplay(seconds);
  }, 1000);
});

function updateDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  if (seconds <= 30) {
    timerDisplay.style.color = 'red';
  } else if (seconds <= 60) {
    timerDisplay.style.color = 'orange';
  } else {
    timerDisplay.style.color = 'lime';
  }
}
resetBtn.addEventsListener('click', () => {
    clearInterval(interval);
    timerDisplay.classList.add('hidden');
    endMessage.classList.add('hidden');
    timerDisplay.textContent = '00:00';
    timerDisplay.style.color = 'white';
    minutesInput.value = '';
});
