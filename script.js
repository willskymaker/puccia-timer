// DOM Elements
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const minutesInput = document.getElementById('minutes');
const timerDisplay = document.getElementById('timer');
const endMessage = document.getElementById('end-message');

// Stato del timer
let interval = null;
let secondsRemaining = 0;

// ▶️ Avvia il timer
function startTimer(minutes) {
  if (isNaN(minutes) || minutes <= 0) return;

  secondsRemaining = minutes * 60;
  updateDisplay(secondsRemaining);
  show(timerDisplay);
  hide(endMessage);

  clearInterval(interval);
  interval = setInterval(tick, 1000);
}

// ⏹️ Reset
function resetTimer() {
  clearInterval(interval);
  secondsRemaining = 0;
  updateDisplay(0);
  hide(timerDisplay);
  hide(endMessage);
  minutesInput.value = '';
}

// ⏲️ Tick ogni secondo
function tick() {
  secondsRemaining--;
  if (secondsRemaining <= 0) {
    clearInterval(interval);
    updateDisplay(0);
    show(endMessage);
  } else {
    updateDisplay(secondsRemaining);
  }
}

// 🔄 Aggiorna il testo e colore
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

// 👁️ Mostra/Nasconde elementi
function show(el) {
  el.classList.remove('hidden');
}

function hide(el) {
  el.classList.add('hidden');
}

// 🎯 Event listeners
startBtn.addEventListener('click', () => {
  const minutes = parseInt(minutesInput.value);
  startTimer(minutes);
});

resetBtn.addEventListener('click', resetTimer);

