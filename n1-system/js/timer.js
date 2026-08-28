// 简单的每题计时器：进入题目时 startTimer()，提交时 stopTimer()

let timerInterval = null;
let startTime = 0;

function startTimer() {
  stopTimer();
  startTime = Date.now();
  timerInterval = setInterval(updateTimerUI, 500);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function getElapsedSeconds() {
  if (!startTime) return 0;
  return Math.floor((Date.now() - startTime) / 1000);
}

function updateTimerUI() {
  const sec = getElapsedSeconds();
  const el = document.getElementById("timer");
  if (el) el.textContent = `用时：${sec} 秒`;
}
