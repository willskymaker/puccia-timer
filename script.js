const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const minutesInput = document.getElementById('minutes');
const timerDisplay = document.getElementById('timer');
const endMessage = document.getElementById('end-message');

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

resetBtn.addEventListener('click', () => {
  clearInterval(interval); // Ferma il timer
  timerDisplay.classList.add('hidden'); // Nasconde il display
  endMessage.classList.add('hidden'); // Nasconde il messaggio finale
  timerDisplay.textContent = '00:00'; // Reimposta display
  timerDisplay.style.color = 'white'; // Colore neutro
  minutesInput.value = ''; // Svuota input
});

