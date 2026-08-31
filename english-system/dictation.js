let questions = [];
let index = 0;
let correct = 0;
let wrong = 0;

const POS = {
  see: { pos: "Verb", color: "#ff2442", cn: "看见", ipa: "/siː/" },
  you: { pos: "Pronoun", color: "#007bff", cn: "你", ipa: "/juː/" },
  around: { pos: "Adverb", color: "#28a745", cn: "附近", ipa: "/əˈraʊnd/" },
  am: { pos: "Verb", color: "#007bff", cn: "是", ipa: "/æm/" },
  proud: { pos: "Adj", color: "#ff9800", cn: "自豪的", ipa: "/praʊd/" },
  of: { pos: "Prep", color: "#9c27b0", cn: "关于", ipa: "/ʌv/" },
  my: { pos: "Pronoun", color: "#007bff", cn: "我的", ipa: "/maɪ/" },
  country: { pos: "Noun", color: "#28a745", cn: "国家", ipa: "/ˈkʌntri/" }
};

function init() {
  loadTheme("daily");
}

function loadTheme(name) {
  fetch(`data/${name}.json`)
    .then(res => res.json())
    .then(list => {
      questions = list;
      index = 0;
      correct = 0;
      wrong = 0;
      updateStats();
      renderQuestion();
    });
}

function renderQuestion() {
  const q = getCurrent();
  if (!q) return;

  const words = q.text.split(" ");
  const box = document.getElementById("wordInputs");

  box.innerHTML = words.map((w, i) => {
    const clean = w.replace(/[^a-z]/gi, "");
    const underlineWidth = Math.max(clean.length * 14, 50);

    return `
      <div style="display:inline-block; margin:6px;">
        <input 
          type="text" 
          id="wordInput_${i}" 
          style="
            border:none;
            border-bottom:3px solid #333;
            font-size:20px;
            text-align:center;
            width:${underlineWidth}px;
            padding:4px;
          "
        />
      </div>
    `;
  }).join("");

  document.getElementById("result").innerHTML = "";
}

function getCurrent() {
  return questions[index];
}

document.getElementById("playBtn").onclick = () => {
  const q = getCurrent();
  if (q) {
    const utter = new SpeechSynthesisUtterance(q.text);
    
    // 尝试使用英文语音（安卓通常只有一个）
    const enVoice = voices.find(v => v.lang.startsWith("en"));
    if (enVoice) utter.voice = enVoice;
    
    utter.lang = "en-US";
    utter.rate = 0.95;
    speechSynthesis.speak(utter);
  }
};

document.getElementById("prevBtn").onclick = () => {
  index = (index - 1 + questions.length) % questions.length;
  renderQuestion();
};

document.getElementById("nextBtn").onclick = () => {
  index = (index + 1) % questions.length;
  renderQuestion();
};

document.getElementById("checkBtn").onclick = () => {
  const q = getCurrent();
  if (!q) return;

  const words = q.text.split(" ");
  let allCorrect = true;

  words.forEach((w, i) => {
    const input = document.getElementById(`wordInput_${i}`);
    const user = (input.value || "").trim();
    const target = w.replace(/[^a-z]/gi, "");

    if (user.toLowerCase() === target.toLowerCase()) {
      input.style.borderBottomColor = "#28a745";
      input.style.color = "#28a745";
    } else {
      input.style.borderBottomColor = "#ff2442";
      input.style.color = "#ff2442";
      allCorrect = false;
    }
  });

  if (allCorrect) {
    correct++;
    updateStats();
    showFullExplanation(q);
  } else {
    wrong++;
    updateStats();
    document.getElementById("result").innerHTML =
      "✘ 有词没填对，再听一遍试试。";
    saveWrong(q);
  }
};

function updateStats() {
  document.getElementById("correctCount").textContent = correct;
  document.getElementById("wrongCount").textContent = wrong;
  const total = correct + wrong;
  const acc = total === 0 ? 0 : Math.round((correct / total) * 100);
  document.getElementById("accuracy").textContent = acc + "%";
}

function colorizeSentence(sentence) {
  return sentence.split(" ").map(w => {
    const key = w.toLowerCase().replace(/[^a-z]/g, "");
    const info = POS[key];
    if (!info) return `<span>${w}</span>`;
    return `<span style="color:${info.color}; font-weight:bold;">${w}</span>`;
  }).join(" ");
}

function explainSentence(sentence) {
  const words = sentence.split(" ");
  return `
    <table style="width:100%; font-size:16px; margin-top:10px;">
      <tr>
        <th>单词</th><th>词性</th><th>中文</th><th>读音</th>
      </tr>
      ${words.map(w => {
        const key = w.toLowerCase().replace(/[^a-z]/g, "");
        const info = POS[key];
        if (!info) {
          return `<tr><td>${w}</td><td>-</td><td>-</td><td>-</td></tr>`;
        }
        return `
          <tr>
            <td style="color:${info.color}; font-weight:bold">${w}</td>
            <td>${info.pos}</td>
            <td>${info.cn}</td>
            <td>${info.ipa}</td>
          </tr>
        `;
      }).join("")}
    </table>
  `;
}

function showFullExplanation(q) {
  const colored = colorizeSentence(q.text);
  const explain = explainSentence(q.text);

  document.getElementById("result").innerHTML = `
    <div style="font-size:22px; margin-bottom:10px;">✔ 全部填对！</div>
    <div style="font-size:22px; margin:10px 0;">${colored}</div>
    ${explain}
    <div style="margin-top:20px; font-size:18px; color:#555;">
      中文解释：${q.explanation || ""}
    </div>
  `;
}

function saveWrong(q) {
  const list = JSON.parse(localStorage.getItem("wrongEnglish") || "[]");
  q.time = Date.now();
  list.push(q);
  localStorage.setItem("wrongEnglish", JSON.stringify(list));
}


let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();

  // 安卓第一次通常返回空数组，需要延迟再试
  if (voices.length === 0) {
    setTimeout(() => {
      voices = speechSynthesis.getVoices();
    }, 300);
  }
}

// 监听语音库加载（安卓必须）
speechSynthesis.onvoiceschanged = loadVoices;

// 电脑端会立即加载，安卓端稍后加载
loadVoices();


init();
