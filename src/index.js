document.getElementById('btnCifrar').addEventListener('click', () => {
  beep();
  const text = document.getElementById('inputText').value;
  const offset = document.getElementById('offset').value;
  document.getElementById('outputText').value = cipher.encode(offset, text);
});

document.getElementById('btnDescifrar').addEventListener('click', () => {
  beep();
  const text = document.getElementById('inputText').value;
  const offset = document.getElementById('offset').value;
  document.getElementById('outputText').value = cipher.decode(offset, text);
});

function beep() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.1);
}
