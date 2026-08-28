function loadWrong() {
  const list = JSON.parse(localStorage.getItem("wrongDictation") || "[]");
  const container = document.getElementById("list");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>没有错题。</p>";
    return;
  }

  list.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "card p-3 mb-3";
    const date = new Date(item.time);
    div.innerHTML = `
      <p class="text-danger fw-bold">❌ 错题 ${i + 1}</p>
      <p><b>题目：</b>${item.text}</p>
      <p><b>假名：</b>${item.kana}</p>
      <p><b>你的答案：</b>${item.user}</p>
      <p><b>解説：</b>${item.explanation}</p>
      <p><b>答题时间：</b>${item.seconds ?? "-"} 秒</p>
      <p><small>${date.toLocaleString()}</small></p>
      <button class="btn btn-sm btn-outline-danger mt-2" onclick="removeOne(${i})">删除此错题</button>
    `;
    container.appendChild(div);
  });
}

function removeOne(i) {
  const list = JSON.parse(localStorage.getItem("wrongDictation") || "[]");
  list.splice(i, 1);
  localStorage.setItem("wrongDictation", JSON.stringify(list));
  loadWrong();
}

document.getElementById("clear").onclick = () => {
  localStorage.removeItem("wrongDictation");
  loadWrong();
};

loadWrong();
