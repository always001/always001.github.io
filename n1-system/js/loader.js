let questions = [];
let order = [];
let index = 0;
let randomMode = true;
let wrongMode = false;

async function initLoader() {
  cleanOldWrong();

  const level = localStorage.getItem("dictationLevel") || "n1";
  document.getElementById("title").textContent =
    `日语听力默写（${level.toUpperCase()}）`;

  const custom = localStorage.getItem("customDictation");
  if (custom) {
    questions = JSON.parse(custom);
  } else {
    const path = `data/${level}.json`;
    questions = await loadJSON(path);
  }

  buildOrder();
}

async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error("JSON 加载失败：" + path);
  return await res.json();
}

function buildOrder() {
  if (!wrongMode) {
    order = [...Array(questions.length).keys()];
  } else {
    const wrongList = JSON.parse(localStorage.getItem("wrongDictation") || "[]");
    questions = wrongList.map(w => ({
      id: w.id,
      text: w.text,
      kana: w.kana,
      hint: "错题重练",
      explanation: w.explanation,
      time: w.time
    }));
    order = [...Array(questions.length).keys()];
  }

  if (randomMode) {
    order.sort(() => Math.random() - 0.5);
  }

  index = 0;
}

function getCurrentQuestion() {
  if (questions.length === 0) return null;
  if (index < 0) index = 0;
  if (index >= questions.length) index = questions.length - 1;
  return questions[order[index]];
}

function cleanOldWrong() {
  const list = JSON.parse(localStorage.getItem("wrongDictation") || "[]");
  const now = Date.now();
  const keep = list.filter(w => now - w.time < 30 * 24 * 3600 * 1000);
  localStorage.setItem("wrongDictation", JSON.stringify(keep));
}
