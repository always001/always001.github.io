const App = {
  go(id) {
    document.querySelectorAll(".screen").forEach(s => s.style.display = "none");
    document.getElementById(id).style.display = "block";
  }
};

// ⭐ 1. 在顶部加入点评区控制变量
let lastUserAnswer = "";

let currentAudio = null;      // 这里保留接口，未来如果有音频文件可以用
let timerId = null;
let elapsed = 0;              // 当前题用时（秒）

function startTimer() {
  stopTimer();
  elapsed = 0;
  updateTimeBox();
  timerId = setInterval(() => {
    elapsed++;
    updateTimeBox();
  }, 1000);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function updateTimeBox() {
  document.getElementById("timeBox").textContent = `用时：${elapsed} 秒`;
}

function updateProgressBox() {
  const total = questions.length;
  const current = total === 0 ? 0 : (index + 1);
  document.getElementById("progressBox").textContent = `进度：${current} / ${total}`;
}

function playTTS(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  speechSynthesis.speak(utter);
}

function updateWrongModeButton() {
  const wrongList = JSON.parse(localStorage.getItem("wrongDictation") || "[]");
  const btn = document.getElementById("wrongMode");

  if (wrongList.length === 0) {
    btn.disabled = true;
    btn.innerHTML = `错题重练`;
  } else {
    btn.disabled = false;
    btn.innerHTML =
      `错题重练 <span class="badge bg-danger">${wrongList.length}</span>`;
  }
}

document.getElementById("wrongMode").onclick = () => {
  wrongMode = !wrongMode;

  if (wrongMode) {
    const wrongList = JSON.parse(localStorage.getItem("wrongDictation") || "[]");

    if (wrongList.length === 0) {
      document.activeElement.blur();

      const modalEl = document.getElementById("noWrongModal");
      modalEl.removeAttribute("inert");

      const modal = new bootstrap.Modal(modalEl);
      modal.show();

      modalEl.addEventListener("hidden.bs.modal", () => {
        modalEl.setAttribute("inert", "");
      });

      wrongMode = false;
      buildOrder();
      loadQuestion();
      return;
    }
  }

  buildOrder();
  loadQuestion();
};

document.getElementById("btnWrongBook").onclick = () => {
  App.go("wrongBook");
  renderWrongBook();
  renderWrongChart();
};

document.getElementById("btnStats").onclick = () => {
  App.go("stats");
  renderStats();
};

document.getElementById("playBtn").onclick = () => {
  const q = getCurrentQuestion();
  if (q) playTTS(q.text);
};

document.getElementById("prevBtn").onclick = () => {
  if (index > 0) {
    index--;
    loadQuestion();
  }
};

document.getElementById("submitBtn").onclick = () => {
  checkAnswerAndNext();
};

document.getElementById("answerInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    checkAnswerAndNext();
  }
});

function normalize(str) {
  return (str || "")
    .replace(/\s+/g, "")
    .replace(/[。、，,.]/g, "")
    .trim();
}

function checkAnswerAndNext() {
  const q = getCurrentQuestion();
  if (!q) return;

  const user = normalize(document.getElementById("answerInput").value);
  lastUserAnswer = user;
  
  const correctKana = normalize(q.kana);
  const correctText = normalize(q.text);

  const isCorrect = (user === correctKana) || (user === correctText);
  
  // 错题记录
  if (!isCorrect) {
    const list = JSON.parse(localStorage.getItem("wrongDictation") || "[]");
    list.push({
      id: q.id,
      text: q.text,
      kana: q.kana,
      explanation: q.explanation,
      time: Date.now()
    });
    localStorage.setItem("wrongDictation", JSON.stringify(list));
    updateWrongModeButton();
    // ✅ 四、答错震动反馈（手机震动）
    if (navigator.vibrate) navigator.vibrate(120);
    
    // ✅ 五、答对绿色闪光效果
  } else if (isCorrect) {
    const box = document.getElementById("questionBox");
    box.classList.add("flash-green");
    setTimeout(() => box.classList.remove("flash-green"), 400);
  }


  //index++;
  //if (index >= questions.length) {
  //  index = questions.length - 1;
  //}
  //loadQuestion();
  
  // ⭐ 显示点评区
  showReview(q, isCorrect);

  // 停止计时
  stopTimer();
}

function showReview(q, isCorrect) {
  document.getElementById("reviewBox").style.display = "block";

  document.getElementById("reviewTitle").textContent =
    isCorrect ? "回答正确！" : "有差异。（用时 " + elapsed + " 秒）";

  document.getElementById("reviewUser").textContent = lastUserAnswer || "（空）";
  document.getElementById("reviewCorrect").textContent = q.text;
  document.getElementById("reviewKana").textContent = q.kana;
  document.getElementById("reviewExplain").textContent = q.explanation || "（无解説）";

  // 隐藏主题区
  //document.getElementById("questionBox").style.display = "none";
  // ⭐ 不隐藏题目
  document.getElementById("questionBox").style.opacity = "1";

  // ⭐ 隐藏输入框与按钮（你可以选择是否隐藏
  //document.getElementById("hintBox").style.display = "none";
  document.getElementById("hintBox").style.opacity = "1";
  //document.getElementById("answerInput").style.display = "none";
  document.getElementById("answerInput").style.opacity = "1";
  //document.getElementById("submitBtn").style.display = "none";
  document.getElementById("submitBtn").style.opacity = "1";
  //document.getElementById("prevBtn").style.display = "none";
  document.getElementById("prevBtn").style.opacity = "1";
  //document.getElementById("playBtn").style.display = "none";
  document.getElementById("playBtn").style.opacity = "1";
}

// ⭐ 4. 下一题按钮逻辑（恢复主界面）
document.getElementById("nextBtn").onclick = () => {
  // 恢复主界面
  document.getElementById("reviewBox").style.display = "none";
  document.getElementById("questionBox").style.display = "block";
  document.getElementById("hintBox").style.display = "block";
  document.getElementById("answerInput").style.display = "block";
  document.getElementById("submitBtn").style.display = "inline-block";
  document.getElementById("prevBtn").style.display = "inline-block";
  document.getElementById("playBtn").style.display = "inline-block";

  // 下一题
  index++;
  if (index >= questions.length) index = questions.length - 1;

  loadQuestion();
};

function loadQuestion() {
  stopTimer();

  const q = getCurrentQuestion();
  if (!q) {
    document.getElementById("questionBox").innerHTML = "没有题目";
    document.getElementById("hintBox").textContent = "";
    document.getElementById("answerInput").value = "";
    updateProgressBox();
    updateTimeBox();
    return;
  }

  document.getElementById("questionBox").innerHTML = `
    <div class="card">
      <div id="toggleArea" class="card-body" style="cursor:pointer; min-height:120px; display:flex; align-items:center; justify-content:center; text-align:center;">
        
        <!-- ⭐ 初始显示的提示文字 -->
        <div id="toggleText" style="font-size:18px; color:#0984e3;">
          点击我显示提示
        </div>

        <!-- ⭐ 字幕内容（默认隐藏） -->
        <div id="subtitleBox" style="display:none;">
          <h5>${q.text}</h5>
          <div class="text-muted">${q.kana}</div>
        </div>

      </div>
    </div>
  `;

  const toggleArea = document.getElementById("toggleArea");
  const toggleText = document.getElementById("toggleText");
  const subtitleBox = document.getElementById("subtitleBox");

  toggleArea.onclick = () => {
    const isHidden = subtitleBox.style.display === "none";

    if (isHidden) {
      // 显示字幕
      subtitleBox.style.display = "block";
      toggleText.style.display = "none";
    } else {
      // 隐藏字幕，显示提示文字
      subtitleBox.style.display = "none";
      toggleText.style.display = "block";
    }
  };

  document.getElementById("hintBox").textContent =
    q.hint ? `提示：${q.hint}` : "";

  document.getElementById("answerInput").value = "";
  document.getElementById("answerInput").focus();

  updateProgressBox();
  startTimer();

  playTTS(q.text);
  
  // ✅ 三、自动播放下一题动画（滑入）
  document.getElementById("questionBox").classList.add("slide-in");
  setTimeout(() => {
    document.getElementById("questionBox").classList.remove("slide-in");
  }, 400);

}


function renderWrongBook() {
  const list = JSON.parse(localStorage.getItem("wrongDictation") || "[]");
  const box = document.getElementById("wrongBookList");

  if (list.length === 0) {
    box.innerHTML = `<div class="text-muted">当前没有错题记录。</div>`;
    return;
  }

  box.innerHTML = list.map((w, i) => `
    <div class="card mb-2">
      <div class="card-body">
        <h6>#${i+1} ${w.text}</h6>
        <div class="text-muted">${w.kana}</div>
        <div class="mt-2">${w.explanation || ''}</div>
        <div class="mt-2 small text-muted">${new Date(w.time).toLocaleString()}</div>
      </div>
    </div>
  `).join('');
}

function renderWrongChart() {
  const list = JSON.parse(localStorage.getItem("wrongDictation") || "[]");

  const map = {};
  list.forEach(w => {
    const d = new Date(w.time).toLocaleDateString();
    map[d] = (map[d] || 0) + 1;
  });

  new Chart(document.getElementById("wrongChart"), {
    type: 'line',
    data: {
      labels: Object.keys(map),
      datasets: [{
        label: '每日错题数量',
        data: Object.values(map),
        borderColor: 'red',
        tension: 0.3
      }]
    }
  });
}

function renderStats() {
  const list = JSON.parse(localStorage.getItem("wrongDictation") || "[]");

  document.getElementById("statsSummary").innerHTML = `
    <div>累计错题：${list.length}</div>
    <div>最近一次错题：${list.length ? new Date(list[list.length-1].time).toLocaleString() : '无'}</div>
  `;

  const map = {};
  list.forEach(w => {
    const d = new Date(w.time).toLocaleDateString();
    map[d] = (map[d] || 0) + 1;
  });

  new Chart(document.getElementById("statsChart"), {
    type: 'bar',
    data: {
      labels: Object.keys(map),
      datasets: [{
        label: '每日错题数量',
        data: Object.values(map),
        backgroundColor: 'rgba(255,99,132,0.5)'
      }]
    }
  });
}

/* ⭐ 手势滑动切换题目（仅手机版） */
let touchStartX = 0;

document.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].clientX;
});

document.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - touchStartX;

  if (Math.abs(diff) < 50) return; // 滑动太短不触发

  if (diff < 0) {
    // 左滑 → 下一题
    document.getElementById("nextBtn").click();
  } else {
    // 右滑 → 上一题
    document.getElementById("prevBtn").click();
  }
});


(async () => {
  await initLoader();        // 来自 loader.js
  updateWrongModeButton();
  loadQuestion();
})();
