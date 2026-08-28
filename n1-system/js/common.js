// 载入 JSON 题库
async function loadJSON(path) {
  const res = await fetch(path);
  return await res.json();
}


// 日语朗读
function speakJP(text) {
  const utter = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  const jpVoice = voices.find(v => v.lang === "ja-JP") || voices[0];
  utter.voice = jpVoice;
  utter.rate = 1.0;
  utter.pitch = 1.0;
  speechSynthesis.speak(utter);
}

// 加载 JSON 题库
async function loadJSON(path) {
  const res = await fetch(path);
  return await res.json();
}

// localStorage 存储
function saveProgress(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadProgress(key, defaultValue) {
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
}


function recordWrong(questionObj, userAnswer) {
  const wrong = {
    id: questionObj.id,
    type: questionObj.type,
    question: questionObj.question || questionObj.text || questionObj.jpText,
    meta: {
      word: questionObj.word || null,
      passage: questionObj.passage || null
    },
    correct: questionObj.correctChoiceId || questionObj.text,
    userAnswer: userAnswer,
    time: Date.now()
  };

  // 方案 A：localStorage 存错题
  const key = "n1_wrong_questions";
  const list = JSON.parse(localStorage.getItem(key) || "[]");
  list.push(wrong);
  localStorage.setItem(key, JSON.stringify(list));

  // 方案 B：对接「华夏小课堂」后端（你可以改成自己的 API）
  /*
  fetch("https://always001.github.io/huaxia-classroom/api/addWrong", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(wrong)
  });
  */
}

let examTimer = null;
let examRemaining = 0;

function startExamTimer(seconds, onTick, onEnd) {
  examRemaining = seconds;
  if (examTimer) clearInterval(examTimer);

  examTimer = setInterval(() => {
    examRemaining--;
    if (onTick) onTick(examRemaining);
    if (examRemaining <= 0) {
      clearInterval(examTimer);
      examTimer = null;
      if (onEnd) onEnd();
    }
  }, 1000);
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}分${s}秒`;
}

