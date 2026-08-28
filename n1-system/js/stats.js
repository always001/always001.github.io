function loadStats(){
  const wrong = JSON.parse(localStorage.getItem("wrongDictation") || "[]");

  const totalWrong = wrong.length;
  const avgTime = wrong.length
    ? (wrong.reduce((a,b)=>a+(b.seconds||0),0) / wrong.length).toFixed(1)
    : 0;

  const summary = document.getElementById("summary");
  summary.innerHTML = `
    <div class="card">
      <h3>总体统计</h3>
      <p>错题总数：${totalWrong}</p>
      <p>错题平均用时：${avgTime} 秒</p>
    </div>
  `;
}

loadStats();
