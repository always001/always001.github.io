/* ============================================
   📚 kb.js - 数学知识库系统（完整版）
   功能：50+ 知识 · 关键词高亮 · 点击重问 · 趋势统计
   ============================================ */

// =============== 默认知识库（50+ 条）===============
const DEFAULT_KB = [
  // 一、基础概念
  "凑十法是把一个数拆开，让另一个数先凑成 10，再加剩下的部分。",
  "破十法是个位不够减时，从十位借 1 当 10 来用。",
  "相邻数是指前后差 1 的连续整数，比如 5、6、7。",
  "相邻两个数的差是 1，相邻三个数的和是中间数乘以 3。",
  "进位是个位满 10 向十位加 1。",
  "借位是个位不够减时从十位借 1 变 10 再减。",
  "找规律填数要看相邻两个数的差或比值。",
  "比大小用大于号小于号，开口对大数尖头对小数。",
  "0 表示一个也没有，0 加任何数还得原数。",
  "10 以内的加减法是基础，要熟练掌握。",
  
  // 二、加减法
  "加法是把两个或多个数合并成一个数的运算。",
  "减法是已知两个加数的和与其中一个加数，求另一个加数的运算。",
  "加法交换律：两个数相加，交换位置和不变，如 3+5=5+3。",
  "加法结合律：三个数相加，先算前两个或后两个和不变。",
  "减法的性质：a-b-c 等于 a-(b+c)，比如 10-3-2=10-5=5。",
  "求总数用加法：原有加又有等于总数。",
  "求剩余用减法：总数减拿走等于剩余。",
  "求部分用减法：总数减部分等于另一部分。",
  "比多比少：大数减小数等于多的部分。",
  "加减混合运算从左到右依次计算，有括号的先算括号里。",
  
  // 三、凑十破十专项
  "凑十法口诀：一九一九好朋友，二八二八手拉手，三七三七真亲密，四六四六一起走，五五凑成一双手。",
  "凑十法适合 11-18 的进位加法，比如 9+5=9+1+4=10+4=14。",
  "破十法适合 11-18 的退位减法，比如 13-7=10+3-7=3+3=6。",
  "凑十法要把小数拆开，拆出的数和大的数凑成 10。",
  "破十法要把被减数拆成 10 加几，先用 10 减减数再加剩下的。",
  "9 加几用 1 凑十：9 加几等于 10 加几减 1。",
  "8 加几用 2 凑十：8 加几等于 10 加几减 2。",
  "11 减几用 1 借位：11 减几等于 10 加 1 减几。",
  "12 减几用 2 借位：12 减几等于 10 加 2 减几。",
  "凑十法看大数，拆小数；破十法看减数，拆被减数。",
  
  // 四、图形算式
  "图形算式是用图形代替数字，要先找出能确定的数。",
  "图形算式的解法：先找只出现一次的图形，用已知和减去它求其他数。",
  "图形算式中相同的图形代表相同的数。",
  "图形算式要利用加减法的互逆关系来求。",
  "图形算式两边图形相同时可以约掉。",
  "多个图形相加时，先观察哪个图形最特殊。",
  "图形算式答案要代入检验确保正确。",
  "求图形代表的数：先求只有一个的图形，再求其他的。",
  
  // 五、算式树 / 数字分解
  "算式树是把一个数分解成两部分或三部分的图形。",
  "树的顶部是总数，下面是分支的数。",
  "算式树从下往上算：先把下面的数加起来等于上面的数。",
  "数字分解：一个数可以分成两个或多个数，加起来等于原数。",
  "8 可以分成 1 和 7、2 和 6、3 和 5、4 和 4 等。",
  "凑十法用到的就是数字分解思想。",
  
  // 六、竖式计算
  "竖式计算要从个位开始算起。",
  "加减法竖式要把相同数位对齐。",
  "进位要在横线上写小 1 表示进到十位。",
  "借位要在被借位上方点一个小点表示借走。",
  "竖式计算要检查：相同数位是否对齐，进位借位是否正确。",
  "减法竖式被减数位数不够时要补 0。",
  
  // 七、单位
  "1 时等于 60 分，1 分等于 60 秒。",
  "1 米等于 100 厘米，1 厘米等于 10 毫米。",
  "1 元等于 10 角，1 角等于 10 分。",
  "1 千克等于 1000 克，1 吨等于 1000 千克。",
  "钟面上长针是分针短针是时针，时针走一大格是 1 小时。",
  
  // 八、应用题
  "应用题要先读题，找已知条件和问题。",
  "求总数用加法：原有数量加又来数量等于总数。",
  "求剩余用减法：原有数量减拿走数量等于剩余。",
  "比多比少：大数减小数等于多多少或少多少。",
  "应用题最后要写出答：答：xxx。",
  
  // 九、通用百科
  "1 加 1 等于 2。",
  "圆的面积公式是 π 乘以半径的平方。",
  "圆周率约等于 3.1415926。",
  "北京是中国的首都，人口约 2100 万。",
  // ⭐ 新增 Tokyo 相关（多种问法都覆盖）
  "Tokyo 是日本的首都，国际大都市，英文名 Tokyo。",
  "东京 Tokyo 是日本的首都，日文写作東京。",
  "Tokyo 位于日本本州关东地区，是世界最大城市之一。",
  
  // 人口
  "Tokyo 人口约 1400 万 Tokyo population about 14 million。",
  "Tokyo 都市圈人口约 3700 万，是世界最大都市圈之一 metro area 37 million。",
  
  // 语言和货币
  "Tokyo 的官方语言是日语 Japanese。",
  "Tokyo 使用的货币是日元 Japanese Yen 货币符号是 JPY 或 ¥。",
  "Tokyo 语言日语货币日元 language Japanese currency Yen。",
  
  // 著名景点
  "Tokyo 著名景点有涩谷十字路口 Shibuya Crossing 是世界上最繁忙的十字路口。",
  "Tokyo 著名景点有东京塔 Tokyo Tower 高度 333 米仿照巴黎埃菲尔铁塔建造。",
  "Tokyo 著名景点有浅草寺 Senso-ji Temple 是东京最古老的寺庙。",
  "Tokyo 著名景点有秋叶原 Akihabara 是电器和动漫圣地。",
  "Tokyo 著名景点有东京晴空塔 Tokyo Skytree 高度 634 米是世界第二高塔。",
  "Tokyo 著名景点有东京迪士尼乐园 Tokyo Disneyland 是亚洲第一座迪士尼。",
  "Tokyo 著名景点有明治神宫 Meiji Shrine 是东京最重要的神社之一。",
  "Tokyo 著名景点有皇居 Imperial Palace 是天皇的居所。",
  "Tokyo 著名景点有新宿御苑 Shinjuku Gyoen 是著名的大型公园。",
  
  // 樱花和文化
  "Tokyo 樱花在每年 3 月底 4 月初盛开 cherry blossom。",
  "Tokyo 是日本的美食之都，有寿司拉面怀石料理等日本料理 sushi ramen。",
  "Tokyo 美食丰富，寿司拉面天妇罗都非常有名 Japanese food。",
  
  // 奥运和现代
  "Tokyo 2020 奥运会在 2021 年举办 Olympics。",
  "Tokyo 是科技中心 Sony 丰田软银等大公司总部所在地 technology。",
  "Tokyo 是金融中心 日本银行东京证券交易所所在地 finance。",
  "Tokyo 是时尚中心 原宿表参道是时尚地标 fashion。",
  "Tokyo 是流行文化中心 秋叶原是动漫圣地 pop culture anime。",
  
  // 政治地位
  "Tokyo 是日本的政治中心，天皇和日本政府所在地 political center。",
  "Tokyo 是天皇的居所 Imperial family Emperor of Japan。",
  "Tokyo 是日本国会首相府所在地 government parliament。",
  
  // 英文完整版（直接对应你的原文）
  "Tokyo is the capital of Japan. 东京是日本的首都。",
  "Tokyo population approximately 14 million metro area 37 million. 东京人口约 1400 万都市圈 3700 万。",
  "Tokyo language Japanese currency Japanese Yen JPY. 东京语言日语货币日元。",
  "Tokyo famous for Shibuya Crossing Tokyo Tower Senso-ji Temple Akihabara. 东京以涩谷东京塔浅草寺秋叶原闻名。",
  "Tokyo is the political center home to the Emperor and government. 东京是政治中心天皇和政府所在地。",
  "Tokyo is a major hub for technology finance fashion and pop culture. 东京是科技金融时尚流行文化中心。",
  "Tokyo incredible food scene sushi ramen. 东京美食丰富寿司拉面。",
  // 英文版（直接对应你的原文）
  "Tokyo is the capital of Japan. 东京是日本的首都。",
  "Tokyo population about 14 million. 东京人口约 1400 万。",
  "Tokyo metro area about 37 million. 东京都市圈约 3700 万。",
  "Tokyo language is Japanese. 东京语言是日语。",
  "Tokyo currency is Japanese Yen JPY. 东京货币是日元。",
  "Tokyo famous for Shibuya Crossing, Tokyo Tower, Senso-ji Temple, Akihabara. 东京以涩谷十字路口东京塔浅草寺秋叶原闻名。",
  "Tokyo is the political center home to the Emperor and government. 东京是政治中心，天皇和政府所在地。",
  "Tokyo is a major hub for technology, finance, fashion, and pop culture. 东京是科技金融时尚流行文化中心。",
  "Yes, that's correct! Tokyo (東京) is the capital of Japan.",
  "Tokyo is the capital of Japan.",
  "Python 是易学的编程语言。"
];

// 关键词（加权用）
const KB_KEYWORDS = [
  "凑十","破十","相邻","进位","借位","找规律","比大小","交换律","结合律",
  "加法","减法","乘法","除法","算式","括号","等式","运算","计算",
  "图形","三角形","圆形","正方","算式树","竖式","数位","对齐",
  "时间","长度","重量","单位","钟面","时针","分针",
  "应用题","读题","条件","问题","答","原有","剩下","比多","比少",
  "深圳","上海","北京","广州","杭州","成都","西安","tokyo","japan",
  "腾讯","华为","阿里","百度","python","人工智能"
];

// =============== 全局状态 ===============
let KB_DATA = [];
let KB_HITS = 0;
let KB_MISSES = 0;
let KB_LOGS = [];

// =============== 初始化 ===============
function initKB() {
  try {
    const saved = localStorage.getItem('mathPark_kb');
    if (saved) {
      const data = JSON.parse(saved);
      if (Array.isArray(data) && data.length > 0) {
        KB_DATA = data;
        loadKBStats();
        return;
      }
    }
  } catch(e) {}
  KB_DATA = [...DEFAULT_KB];
  loadKBStats();
}

function saveKB() {
  try {
    localStorage.setItem('mathPark_kb', JSON.stringify(KB_DATA));
  } catch(e) {}
}

function loadKBStats() {
  try {
    const saved = localStorage.getItem('mathPark_kb_stats');
    if (saved) {
      const s = JSON.parse(saved);
      KB_HITS = s.hits || 0;
      KB_MISSES = s.misses || 0;
    }
  } catch(e) {}
}

function saveKBStats() {
  try {
    localStorage.setItem('mathPark_kb_stats', JSON.stringify({
      hits: KB_HITS,
      misses: KB_MISSES
    }));
  } catch(e) {}
}

// =============== 分词 ===============
function kbTokenize(text) {
  // ⭐ 关键修复 1：先转小写
//const clean = text.replace(/[，。！？；:\s\n　,.!?？]/g, '').toLowerCase();
  //const clean = text.replace(/[，。！？；:\s\n　,.!?？()【】《》「」『』"'`~@#$%^&*]/g, '').toLowerCase();
  // 扩展版（去掉所有标点，包括英文）
  const clean = text
    .replace(/[\s\n\r\t　]/g, '')        // 空白字符
    .replace(/[，。！？；:,!?]/g, '')     // 中英文标点
    .replace(/[()【】《》「」『』"'\`~@#$%^&*]/g, '')  // 各种括号引号
    .toLowerCase();
  const tokens = [];
  let i = 0;
  while (i < clean.length) {
    const c = clean[i];
    
    // ⭐ 关键修复 2：英文（大小写都匹配）
    if (/[a-zA-Z]/.test(c)) {
      let word = '';
      while (i < clean.length && /[a-zA-Z0-9]/.test(clean[i])) {
        word += clean[i];
        i++;
      }
      if (word) tokens.push(word.toLowerCase());  // 统一小写
      continue;
    }
    
    // 数字+符号
    if (/[0-9+\-*/=().×÷π]/.test(c)) {
      let expr = '';
      while (i < clean.length && /[0-9+\-*/=().×÷π]/.test(clean[i])) {
        expr += clean[i];
        i++;
      }
      if (expr) tokens.push(expr);
      continue;
    }
    
    /*
    if (/[a-z]/.test(c)) {
      let word = '';
      while (i < clean.length && /[a-z0-9]/.test(clean[i])) {
        word += clean[i];
        i++;
      }
      if (word) tokens.push(word);
      continue;
    }
    */
    
    // 中文 2 字
    if (/[\u4e00-\u9fa5]/.test(c)) {
      if (i + 2 <= clean.length) {
        tokens.push(clean.substr(i, 2));
        i += 2;
      } else {
        tokens.push(c);
        i++;
      }
      continue;
    }
    i++;
  }
  
  //return tokens.filter(t => t.length >= 2);
  // ⭐ 关键修复 3：单字过滤（但保留英文单词）
  return tokens.filter(t => {
    if (/[a-z]/.test(t)) return true;  // 英文全部保留（包括 "a", "I"）
    return t.length >= 2;  // 中文/数字至少 2 位
  });
}

// =============== 相似度 ===============
function kbSimilarity(a, b) {
  const ta = kbTokenize(a);
  const tb = kbTokenize(b);
  if (ta.length === 0 || tb.length === 0) return 0;
  
  const sa = {}, sb = {};
  for (const x of ta) sa[x] = (sa[x] || 0) + 1;
  for (const x of tb) sb[x] = (sb[x] || 0) + 1;
  
  let common = 0;
  for (const k in sa) {
    if (sb[k]) {
      common += Math.min(sa[k], sb[k]);
      if (KB_KEYWORDS.includes(k)) common += 3;
    }
  }
  return common / (ta.length + tb.length + 1);
}

// =============== 查知识库 ===============
function searchKB(question) {
  let best = null, bestScore = 0, matchedWords = [];
  
  for (const k of KB_DATA) {
    const s = kbSimilarity(question, k);
    if (s > bestScore) { 
      bestScore = s; 
      best = k; 
      const qTokens = new Set(kbTokenize(question));
      matchedWords = Array.from(qTokens).filter(t => 
        kbTokenize(k).includes(t) && t.length >= 2
      );
    }
  }
  
  const found = bestScore > 0.01; // 改 0.10 → 0.01
  if (found) KB_HITS++; else KB_MISSES++;
  
  KB_LOGS.unshift({
    q: question,
    hit: found,
    score: bestScore,
    answer: best ? best.substring(0, 30) : '无',
    matchedWords,
    time: new Date().toLocaleTimeString('zh-CN', {hour12: false}),
    date: new Date().toISOString().slice(0, 10)
  });
  if (KB_LOGS.length > 50) KB_LOGS.pop();
  
  saveKBStats();
  
  return { answer: best, score: bestScore, found, matchedWords };
}

// =============== 关键词高亮 ===============
function highlightMatches(text, matchedWords) {
  if (!matchedWords || matchedWords.length === 0) return text;
  let result = text;
  const sorted = [...matchedWords].sort((a, b) => b.length - a.length);
  for (const word of sorted) {
    if (word.length < 2) continue;
    const re = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    result = result.replace(re, `<span style="color:#d63031;font-weight:bold;background:#fff3cd;padding:0 2px;border-radius:3px">${word}</span>`);
  }
  return result;
}

// =============== 趋势图 ===============
function renderKBTrend(days = 7, returnHTML = false) {
  const today = new Date();
  const dateMap = {};
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const label = `${d.getMonth() + 1}/${d.getDate()}`;
    dateMap[key] = { label, hits: 0, total: 0 };
  }
  KB_LOGS.forEach(log => {
    if (dateMap[log.date]) {
      dateMap[log.date].total++;
      if (log.hit) dateMap[log.date].hits++;
    }
  });
  const entries = Object.values(dateMap);
  const maxTotal = Math.max(1, ...entries.map(e => e.total));
  const chartWidth = 320, chartHeight = 120;
  const barWidth = (chartWidth - 20) / entries.length - 4;
  let bars = '';
  entries.forEach((e, i) => {
    const x = 10 + i * ((chartWidth - 20) / entries.length) + 2;
    const totalH = (e.total / maxTotal) * (chartHeight - 30);
    const hitH = e.total > 0 ? (e.hits / e.total) * totalH : 0;
    const totalY = chartHeight - 20 - totalH;
    const hitY = chartHeight - 20 - hitH;
    bars += `<rect x="${x}" y="${totalY}" width="${barWidth}" height="${totalH}" fill="#e5e7eb" rx="3"><title>${e.label}: ${e.hits}/${e.total}</title></rect>`;
    if (e.hits > 0) {
      const color = e.hits / Math.max(1, e.total) >= 0.7 ? '#00b894' 
                  : e.hits / Math.max(1, e.total) >= 0.4 ? '#fdcb6e' 
                  : '#ff7675';
      bars += `<rect x="${x}" y="${hitY}" width="${barWidth}" height="${hitH}" fill="${color}" rx="3"></rect>`;
    }
    if (e.total > 0) {
      bars += `<text x="${x + barWidth/2}" y="${totalY - 2}" text-anchor="middle" font-size="9" fill="#374151" font-weight="bold">${e.total}</text>`;
    }
    bars += `<text x="${x + barWidth/2}" y="${chartHeight - 5}" text-anchor="middle" font-size="8" fill="#6b7280">${e.label}</text>`;
  });
  const totalHits = entries.reduce((s, e) => s + e.hits, 0);
  const totalTotal = entries.reduce((s, e) => s + e.total, 0);
  const periodRate = totalTotal > 0 ? (totalHits / totalTotal * 100).toFixed(0) : 0;
  const html = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <div style="font-size:13px">📊 近 ${days} 天: <b style="color:#d63031">${periodRate}%</b> <span style="color:#888">(${totalHits}/${totalTotal})</span></div>
      <div style="font-size:11px;color:#888">
        <span style="display:inline-block;width:8px;height:8px;background:#00b894;border-radius:2px;margin-right:2px"></span>高
        <span style="display:inline-block;width:8px;height:8px;background:#fdcb6e;border-radius:2px;margin:0 2px 0 8px"></span>中
        <span style="display:inline-block;width:8px;height:8px;background:#ff7675;border-radius:2px;margin:0 2px 0 8px"></span>低
      </div>
    </div>
    <svg width="${chartWidth}" height="${chartHeight}" style="background:#fafafa;border-radius:6px;display:block;margin:0 auto">${bars}</svg>
    <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:11px;color:#888">
      <span>总计 ${totalTotal} 次查询</span>
      <span>${totalTotal === 0 ? '暂无数据' : `日均 ${(totalTotal / days).toFixed(1)} 次`}</span>
    </div>`;
  if (returnHTML) return html;
  document.querySelectorAll('.trend-btn').forEach(btn => {
    const d = parseInt(btn.dataset.days);
    if (d === days) {
      btn.style.background = '#4a90e2';
      btn.style.color = '#fff';
    } else {
      btn.style.background = '#e5e7eb';
      btn.style.color = '#374151';
    }
  });
  document.getElementById('kbTrendChart').innerHTML = html;
}

// =============== 日志列表（高亮 + 点击填入）===============
function renderKBLogs() {
  if (KB_LOGS.length === 0) {
    return '<p style="color:#999;text-align:center;padding:20px">还没有查询记录<br>去问问问题试试~</p>';
  }
  return KB_LOGS.map(log => {
    const icon = log.hit ? '✅' : '❌';
    const color = log.hit ? '#00b894' : '#ff7675';
    const bg = log.hit ? '#e8f8f5' : '#fff5f5';
    const answerPreview = log.matchedWords && log.matchedWords.length > 0
      ? highlightMatches(log.answer + '...', log.matchedWords)
      : (log.answer + '...');
    const safeQ = log.q.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    return `
      <div onclick="fillQuestion('${safeQ}')" style="
        padding:8px 10px;margin:6px 0;background:${bg};
        border-left:3px solid ${color};border-radius:6px;
        cursor:pointer;transition:transform .15s,box-shadow .15s;
      " onmouseover="this.style.transform='translateX(4px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,.1)'"
         onmouseout="this.style.transform='';this.style.boxShadow=''">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-weight:bold">${icon} ${log.q}<span style="font-size:10px;color:#4a90e2;margin-left:4px">↩️ 点击重问</span></span>
          <span style="color:#888;font-size:10px">${log.time}</span>
        </div>
        <div style="color:#666;font-size:11px;margin-top:4px;line-height:1.5">📊 ${log.score.toFixed(3)} → ${answerPreview}</div>
        ${log.matchedWords && log.matchedWords.length > 0 ? `
          <div style="margin-top:4px">
            ${log.matchedWords.slice(0, 5).map(w => 
              `<span style="display:inline-block;background:#fff3cd;color:#d63031;padding:1px 6px;border-radius:8px;font-size:10px;margin:2px 2px 0 0">${w}</span>`
            ).join('')}
            ${log.matchedWords.length > 5 ? `<span style="font-size:10px;color:#888">+${log.matchedWords.length - 5}</span>` : ''}
          </div>` : ''}
      </div>`;
  }).join('');
}

// =============== 点击日志 → 自动填入 ===============
function fillQuestion(question) {
  const input = document.getElementById('userInput');
  if (!input) {
    alert('❌ 找不到聊天输入框（请先进入 AI 调难度页面）');
    return;
  }
  input.value = question;
  input.focus();
  input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  input.style.transition = 'all .3s';
  input.style.background = '#fff3cd';
  input.style.borderColor = '#d63031';
  setTimeout(() => {
    input.style.background = '';
    input.style.borderColor = '';
  }, 800);
  if (typeof App !== 'undefined' && App.go) App.go('aiDifficulty');
}

// =============== 编辑界面 ===============
function renderKBEditor() {
  let container = document.getElementById('kbEditorContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'kbEditorContainer';
    const aiBody = document.getElementById('aiDifficultyBody');
    if (aiBody) aiBody.appendChild(container);
  }
  const total = KB_HITS + KB_MISSES;
  const hitRate = total > 0 ? (KB_HITS / total * 100).toFixed(0) : 0;
  const avgScore = KB_LOGS.length > 0 
    ? (KB_LOGS.reduce((s, l) => s + l.score, 0) / KB_LOGS.length).toFixed(3)
    : '0.000';
  container.innerHTML = `
    <div class="stat-card" style="background:linear-gradient(135deg,#00b894,#00cec9);color:#fff">
      <h3 style="color:#fff">📚 知识库统计</h3>
      <div style="display:flex;justify-content:space-between;align-items:center;margin:8px 0">
        <div>
          <div style="font-size:32px;font-weight:bold">${hitRate}%</div>
          <div style="font-size:12px;opacity:.9">命中率</div>
        </div>
        <div style="text-align:right;font-size:12px">
          <div>✅ 命中 <b>${KB_HITS}</b> 次</div>
          <div>❌ 未中 <b>${KB_MISSES}</b> 次</div>
          <div>📦 共 <b>${KB_DATA.length}</b> 条知识</div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,.3);height:8px;border-radius:4px;overflow:hidden;margin-top:6px">
        <div style="background:#fff;height:100%;width:${hitRate}%;transition:width .5s"></div>
      </div>
      <div style="font-size:11px;margin-top:4px;opacity:.9">平均相似度: <b>${avgScore}</b> · 阈值: 0.10</div>
    </div>
    <div class="stat-card">
      <h3>📈 命中率趋势</h3>
      <div style="display:flex;gap:6px;margin-bottom:10px">
        <button class="trend-btn active" data-days="7" onclick="renderKBTrend(7)" style="flex:1;padding:8px;background:#4a90e2;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px">📅 近 7 天</button>
        <button class="trend-btn" data-days="30" onclick="renderKBTrend(30)" style="flex:1;padding:8px;background:#e5e7eb;color:#374151;border:none;border-radius:8px;cursor:pointer;font-size:13px">📅 近 30 天</button>
      </div>
      <div id="kbTrendChart">${renderKBTrend(7, true)}</div>
    </div>
    
    <!-- ⭐ 新增 3 个功能按钮 -->
    <div class="stat-card">
      <h3>🛠️ 高级功能</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <button onclick="aiOrganizeMissedQuestions()" style="
          padding:14px 8px;background:linear-gradient(135deg,#4a90e2,#357abd);
          color:#fff;border:none;border-radius:10px;cursor:pointer;
          font-size:12px;font-weight:bold;line-height:1.4;
        ">
          🤖<br>AI 整理<br><span style="font-size:10px;opacity:.8">未命中问题</span>
        </button>
        <button onclick="exportPDFReport()" style="
          padding:14px 8px;background:linear-gradient(135deg,#a29bfe,#6c5ce7);
          color:#fff;border:none;border-radius:10px;cursor:pointer;
          font-size:12px;font-weight:bold;line-height:1.4;
        ">
          📊<br>PDF 报告<br><span style="font-size:10px;opacity:.8">打印/导出</span>
        </button>
        <button onclick="startKBGame()" style="
          padding:14px 8px;background:linear-gradient(135deg,#fdcb6e,#e17055);
          color:#fff;border:none;border-radius:10px;cursor:pointer;
          font-size:12px;font-weight:bold;line-height:1.4;
        ">
          🏆<br>答题游戏<br><span style="font-size:10px;opacity:.8">10 题挑战</span>
        </button>
      </div>
    </div>
    
    <div class="stat-card">
      <h3>✏️ 编辑知识库</h3>
      <p style="font-size:12px;color:#888">每行一条知识，共 <b id="kbLineCount">${KB_DATA.length}</b> 条</p>
      <textarea id="kbEditor" style="width:100%;height:180px;padding:8px;border:1px solid #d1d5db;border-radius:8px;font-family:monospace;font-size:13px;margin-top:8px;resize:vertical">${KB_DATA.join('\n')}</textarea>
      <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
        <button class="difficulty-badge" style="background:#00b894" onclick="saveKBEditor()">💾 保存</button>
        <button class="difficulty-badge" style="background:#4a90e2" onclick="addKBLines()">➕ 加 5 行</button>
        <button class="difficulty-badge" style="background:#a29bfe" onclick="exportKB()">📤 导出</button>
        <button class="difficulty-badge" style="background:#ff7675" onclick="importKB()">📥 导入</button>
        <button class="difficulty-badge" style="background:#6b7280" onclick="resetKB()">🔄 恢复默认</button>
        <button class="difficulty-badge" style="background:#d63031" onclick="clearKBStats()">📊 清零统计</button>
      </div>
    </div>
    <div class="stat-card">
    
    <!-- ⭐ 在编辑知识库之后、查询日志之前插入 -->
    <div id="rudeWordManagerContainer">
      ${renderRudeWordsManager()}
    </div>
      <h3>📜 最近查询（点击 ⬇️ 可重问）</h3>
      <p style="font-size:11px;color:#888">💡 点击问题可自动填入聊天框</p>
      <div id="kbLogList" style="max-height:350px;overflow-y:auto;font-size:12px">${renderKBLogs()}</div>
    </div>`;
}

function saveKBEditor() {
  const text = document.getElementById('kbEditor').value;
  const lines = text.split('\n').map(s => s.trim()).filter(s => s);
  if (lines.length === 0) { alert('❌ 知识库不能为空！'); return; }
  KB_DATA = lines;
  saveKB();
  document.getElementById('kbLineCount').textContent = KB_DATA.length;
  alert(`✅ 已保存 ${lines.length} 条知识！`);
  renderKBEditor();
}

function addKBLines() {
  const ta = document.getElementById('kbEditor');
  ta.value += '\n\n\n\n\n';
  ta.focus();
}

function exportKB() {
  const text = KB_DATA.join('\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `知识库_${new Date().toISOString().slice(0,10)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function importKB() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.txt';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const lines = ev.target.result.split('\n').map(s => s.trim()).filter(s => s);
      if (lines.length === 0) { alert('❌ 文件为空'); return; }
      if (confirm(`将导入 ${lines.length} 条知识，是否替换当前知识库？`)) {
        KB_DATA = lines;
        saveKB();
        renderKBEditor();
        alert('✅ 导入成功！');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function resetKB() {
  if (!confirm('确定要恢复默认知识库吗？')) return;
  KB_DATA = [...DEFAULT_KB];
  saveKB();
  renderKBEditor();
  alert(`🔄 已恢复默认，共 ${KB_DATA.length} 条`);
}

function clearKBStats() {
  if (!confirm('确定要清零命中率统计吗？')) return;
  KB_HITS = 0;
  KB_MISSES = 0;
  KB_LOGS = [];
  try { localStorage.removeItem('mathPark_kb_stats'); } catch(e) {}
  renderKBEditor();
}

// ⭐ 页面加载时自动初始化
initKB();


/* ============================================
   🤖 AI 自动整理未命中问题
   ============================================ */
async function aiOrganizeMissedQuestions() {
  const missed = KB_LOGS.filter(l => !l.hit).slice(0, 20);
  if (missed.length === 0) {
    alert('🎉 太好了！最近没有未命中问题！');
    return;
  }
  
  if (!confirm(`发现 ${missed.length} 个未命中问题。\n\nAI 将帮你：\n1. 分析这些问题的共同点\n2. 推荐需要新增的知识\n3. 自动生成知识条目（你可以编辑后再保存）\n\n是否继续？`)) {
    return;
  }
  
  // 显示加载状态
  const container = document.getElementById('kbEditorContainer');
  const loading = document.createElement('div');
  loading.id = 'aiLoadingBox';
  loading.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,.5);
    display:flex;align-items:center;justify-content:center;
    z-index:9999;flex-direction:column;color:#fff;
  `;
  loading.innerHTML = `
    <div style="font-size:50px;animation:float 2s infinite">🤖</div>
    <div style="margin-top:20px;font-size:18px">AI 正在分析未命中问题...</div>
    <div style="margin-top:10px;font-size:14px;opacity:.8">这可能需要 5-10 秒</div>
  `;
  document.body.appendChild(loading);
  
  try {
    // 构造 prompt
    const questions = missed.map((m, i) => `${i+1}. ${m.q}`).join('\n');
    const prompt = `你是小学数学知识整理助手。我有一个数学知识库，最近有这些"未命中"的问题（知识库里找不到答案）：

${questions}

请帮我：
1. 分析这些问题的共同主题（如：加减法、几何、单位换算等）
2. 推荐 5-10 条应该新增到知识库的内容
3. 每条用一句话回答，简洁明了（20-50字），适合小学生理解
4. 直接输出知识条目，每行一条，不要编号，不要其他解释

格式示例：
凑十法看大数拆小数
9 加 5 等于 14 因为 9+1=10 再加 4
...`;

    // 调用 Worker
    const response = await fetch("https://chat-ai-proxy.gankenrin.workers.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: prompt })
    });
    
    const data = await response.json();
    const aiText = data.text || '';
    
    // 解析 AI 返回的知识
    const newEntries = aiText
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 5 && s.length < 200)
      .map(s => s.replace(/^[\d\.\-\*•、\s]+/, '').trim())  // 去掉编号
      .filter(s => s);
    
    if (newEntries.length === 0) {
      alert('❌ AI 没有返回有效内容，请重试');
      return;
    }
    
    // 显示结果让用户编辑
    showAIOrganizeResult(newEntries, missed);
    
  } catch (err) {
    console.error('AI 整理失败：', err);
    alert('❌ AI 整理失败：' + err.message);
  } finally {
    document.getElementById('aiLoadingBox')?.remove();
  }
}

// 显示 AI 整理结果
function showAIOrganizeResult(newEntries, missedQuestions) {
  // 创建弹窗
  const modal = document.createElement('div');
  modal.id = 'aiOrganizeModal';
  modal.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,.6);
    display:flex;align-items:center;justify-content:center;
    z-index:9999;padding:20px;
  `;
  
  const card = document.createElement('div');
  card.style.cssText = `
    background:#fff;border-radius:16px;padding:20px;
    max-width:500px;width:100%;max-height:80vh;
    overflow-y:auto;animation:pop .4s;
  `;
  
  card.innerHTML = `
    <div style="text-align:center;margin-bottom:16px">
      <div style="font-size:40px">🤖</div>
      <h2 style="color:#6c5ce7;margin:8px 0">AI 整理结果</h2>
      <p style="color:#888;font-size:13px">
        基于 ${missedQuestions.length} 个未命中问题，AI 推荐了 ${newEntries.length} 条新知识
      </p>
    </div>
    
    <div style="background:#f0f9ff;border-left:4px solid #4a90e2;padding:10px;border-radius:6px;margin-bottom:12px">
      <div style="font-size:12px;color:#666">💡 你可以编辑后再保存</div>
    </div>
    
    <div style="margin-bottom:16px">
      <div style="font-size:13px;color:#666;margin-bottom:6px">📋 未命中问题预览：</div>
      <div style="max-height:100px;overflow-y:auto;background:#fafafa;padding:8px;border-radius:6px;font-size:12px">
        ${missedQuestions.slice(0, 5).map(m => `• ${m.q}`).join('<br>')}
        ${missedQuestions.length > 5 ? `<br>...还有 ${missedQuestions.length - 5} 个` : ''}
      </div>
    </div>
    
    <div style="margin-bottom:16px">
      <div style="font-size:13px;color:#666;margin-bottom:6px">✨ AI 推荐的新知识：</div>
      <textarea id="aiNewEntries" style="
        width:100%;height:200px;padding:10px;
        border:2px solid #4a90e2;border-radius:8px;
        font-family:inherit;font-size:14px;line-height:1.6;
        resize:vertical;
      ">${newEntries.join('\n')}</textarea>
      <div style="font-size:11px;color:#888;margin-top:4px">
        提示：每行一条，可以增删改
      </div>
    </div>
    
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">
      <button id="aiAddAll" style="
        flex:1;min-width:120px;padding:12px;
        background:linear-gradient(135deg,#00b894,#00cec9);
        color:#fff;border:none;border-radius:8px;
        font-size:14px;font-weight:bold;cursor:pointer;
      ">✅ 全部加入</button>
      <button id="aiAddSelected" style="
        flex:1;min-width:120px;padding:12px;
        background:linear-gradient(135deg,#4a90e2,#357abd);
        color:#fff;border:none;border-radius:8px;
        font-size:14px;font-weight:bold;cursor:pointer;
      ">📝 只加勾选的</button>
      <button id="aiCancel" style="
        flex:1;min-width:120px;padding:12px;background:#6b7280;
        color:#fff;border:none;border-radius:8px;
        font-size:14px;font-weight:bold;cursor:pointer;
      ">❌ 取消</button>
    </div>
  `;
  
  modal.appendChild(card);
  document.body.appendChild(modal);
  
  // 事件绑定
  document.getElementById('aiCancel').onclick = () => modal.remove();
  
  document.getElementById('aiAddAll').onclick = () => {
    const lines = document.getElementById('aiNewEntries').value
      .split('\n').map(s => s.trim()).filter(s => s);
    if (lines.length === 0) {
      alert('❌ 内容不能为空');
      return;
    }
    KB_DATA.push(...lines);
    saveKB();
    modal.remove();
    alert(`🎉 成功添加 ${lines.length} 条新知识！\n当前共 ${KB_DATA.length} 条`);
    renderKBEditor();
  };
  
  document.getElementById('aiAddSelected').onclick = () => {
    // 显示勾选模式
    showSelectableEntries(newEntries, modal);
  };
  
  // 点击背景关闭
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
}

// 勾选模式
function showSelectableEntries(entries, parentModal) {
  const card = parentModal.querySelector('div');
  const listHTML = entries.map((e, i) => `
    <label style="
      display:flex;align-items:flex-start;gap:8px;
      padding:8px;margin:4px 0;background:#f9fafb;
      border-radius:6px;cursor:pointer;
      transition:background .15s;
    " onmouseover="this.style.background='#e8f5e9'" 
       onmouseout="this.style.background='#f9fafb'">
      <input type="checkbox" checked data-idx="${i}" 
        style="margin-top:4px;cursor:pointer">
      <span style="flex:1;font-size:13px;line-height:1.5">${e}</span>
    </label>
  `).join('');
  
  card.innerHTML = `
    <h2 style="color:#6c5ce7;text-align:center">📝 选择要添加的知识</h2>
    <div style="max-height:50vh;overflow-y:auto;margin:16px 0">
      ${listHTML}
    </div>
    <div style="display:flex;gap:8px">
      <button id="aiConfirm" style="
        flex:1;padding:12px;background:#00b894;color:#fff;
        border:none;border-radius:8px;font-weight:bold;cursor:pointer
      ">✅ 确认添加</button>
      <button id="aiBack" style="
        flex:1;padding:12px;background:#6b7280;color:#fff;
        border:none;border-radius:8px;font-weight:bold;cursor:pointer
      ">↩️ 返回</button>
    </div>
  `;
  
  document.getElementById('aiConfirm').onclick = () => {
    const checked = card.querySelectorAll('input[type=checkbox]:checked');
    const toAdd = Array.from(checked).map(cb => entries[parseInt(cb.dataset.idx)]);
    if (toAdd.length === 0) {
      alert('⚠️ 请至少勾选一条');
      return;
    }
    KB_DATA.push(...toAdd);
    saveKB();
    parentModal.remove();
    alert(`🎉 成功添加 ${toAdd.length} 条！\n当前共 ${KB_DATA.length} 条`);
    renderKBEditor();
  };
  
  document.getElementById('aiBack').onclick = () => {
    showAIOrganizeResult(entries, KB_LOGS.filter(l => !l.hit).slice(0, 20));
    parentModal.remove();
  };
}

/* ============================================
   📊 导出 PDF 报告
   ============================================ */
function exportPDFReport() {
  const total = KB_HITS + KB_MISSES;
  const hitRate = total > 0 ? (KB_HITS / total * 100).toFixed(1) : 0;
  const today = new Date();
  
  // 按日期统计（最近 30 天）
  const dailyStats = {};
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    dailyStats[key] = { date: key, hits: 0, total: 0 };
  }
  KB_LOGS.forEach(log => {
    if (dailyStats[log.date]) {
      dailyStats[log.date].total++;
      if (log.hit) dailyStats[log.date].hits++;
    }
  });
  
  // Top 5 高频问题
  const questionCount = {};
  KB_LOGS.forEach(log => {
    questionCount[log.q] = (questionCount[log.q] || 0) + 1;
  });
  const topQuestions = Object.entries(questionCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  
  // Top 5 未命中问题
  const missedQuestions = KB_LOGS
    .filter(l => !l.hit)
    .reduce((acc, l) => {
      acc[l.q] = (acc[l.q] || 0) + 1;
      return acc;
    }, {});
  const topMissed = Object.entries(missedQuestions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  
  // 生成 HTML 报告
  const reportHTML = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>数学知识库报告 - ${today.toLocaleDateString('zh-CN')}</title>
<style>
  @page { size: A4; margin: 20mm; }
  * { box-sizing: border-box; }
  body { 
    font-family: "Microsoft YaHei", sans-serif; 
    padding: 20px; color: #2d3436; line-height: 1.6;
    max-width: 800px; margin: 0 auto;
  }
  h1 { color: #6c5ce7; text-align: center; border-bottom: 3px solid #6c5ce7; padding-bottom: 12px; }
  h2 { color: #00b894; margin-top: 30px; border-left: 4px solid #00b894; padding-left: 12px; }
  .header-info { text-align: center; color: #888; margin-bottom: 30px; }
  .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 20px 0; }
  .stat-card { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; padding: 16px; border-radius: 8px; text-align: center; }
  .stat-card .num { font-size: 32px; font-weight: bold; }
  .stat-card .label { font-size: 12px; opacity: .9; margin-top: 4px; }
  table { width: 100%; border-collapse: collapse; margin: 16px 0; }
  th { background: #6c5ce7; color: #fff; padding: 10px; text-align: left; }
  td { padding: 8px 10px; border-bottom: 1px solid #e0e0e0; }
  tr:nth-child(even) { background: #f9fafb; }
  .missed { color: #d63031; }
  .hit { color: #00b894; }
  .chart { display: flex; align-items: flex-end; gap: 3px; height: 100px; margin: 20px 0; padding: 10px; background: #fafafa; border-radius: 6px; }
  .bar { flex: 1; background: linear-gradient(180deg, #a29bfe, #6c5ce7); border-radius: 3px 3px 0 0; position: relative; min-width: 8px; }
  .bar .label { position: absolute; bottom: -18px; left: 50%; transform: translateX(-50%); font-size: 8px; color: #888; }
  .bar .num { position: absolute; top: -16px; left: 50%; transform: translateX(-50%); font-size: 9px; font-weight: bold; }
  .summary { background: #fff8e1; border-left: 4px solid #fdcb6e; padding: 12px; border-radius: 6px; margin: 16px 0; }
  .footer { text-align: center; color: #888; font-size: 12px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; }
</style>
</head>
<body>
  <h1>📚 数学知识库分析报告</h1>
  <div class="header-info">
    生成时间：${today.toLocaleString('zh-CN')}<br>
    报告周期：最近 30 天
  </div>
  
  <h2>📊 总体数据</h2>
  <div class="stat-grid">
    <div class="stat-card">
      <div class="num">${hitRate}%</div>
      <div class="label">命中率</div>
    </div>
    <div class="stat-card" style="background:linear-gradient(135deg,#00b894,#00cec9)">
      <div class="num">${KB_HITS}</div>
      <div class="label">命中次数</div>
    </div>
    <div class="stat-card" style="background:linear-gradient(135deg,#ff7675,#d63031)">
      <div class="num">${KB_MISSES}</div>
      <div class="label">未命中次数</div>
    </div>
    <div class="stat-card" style="background:linear-gradient(135deg,#fdcb6e,#e17055)">
      <div class="num">${KB_DATA.length}</div>
      <div class="label">知识库条数</div>
    </div>
  </div>
  
  <h2>📈 近 30 天趋势</h2>
  <div class="chart">
    ${Object.values(dailyStats).map(d => {
      const h = d.total > 0 ? Math.max(8, (d.total / Math.max(1, ...Object.values(dailyStats).map(x => x.total))) * 80) : 0;
      const date = new Date(d.date);
      return `<div class="bar" style="height:${h}px" title="${d.date}: ${d.hits}/${d.total}">
        ${d.total > 0 ? `<span class="num">${d.total}</span>` : ''}
        <span class="label">${date.getMonth()+1}/${date.getDate()}</span>
      </div>`;
    }).join('')}
  </div>
  
  <h2>🔥 最常问的问题（TOP 5）</h2>
  <table>
    <thead><tr><th>排名</th><th>问题</th><th>次数</th><th>状态</th></tr></thead>
    <tbody>
      ${topQuestions.length === 0 ? '<tr><td colspan="4" style="text-align:center;color:#888">暂无数据</td></tr>' :
        topQuestions.map(([q, c], i) => {
          const log = KB_LOGS.find(l => l.q === q);
          const status = log && log.hit ? '<span class="hit">✅ 命中</span>' : '<span class="missed">❌ 未中</span>';
          return `<tr><td>${i+1}</td><td>${q}</td><td>${c}</td><td>${status}</td></tr>`;
        }).join('')}
    </tbody>
  </table>
  
  <h2>⚠️ 最常未命中的问题（TOP 5）</h2>
  <table>
    <thead><tr><th>排名</th><th>问题</th><th>次数</th><th>建议</th></tr></thead>
    <tbody>
      ${topMissed.length === 0 ? '<tr><td colspan="4" style="text-align:center;color:#888">🎉 没有未命中记录</td></tr>' :
        topMissed.map(([q, c], i) => 
          `<tr><td>${i+1}</td><td>${q}</td><td><b class="missed">${c}</b></td><td style="font-size:12px;color:#888">添加到知识库</td></tr>`
        ).join('')}
    </tbody>
  </table>
  
  <h2>💡 智能建议</h2>
  <div class="summary">
    ${generateReportAdvice(hitRate, topMissed, total)}
  </div>
  
  <div class="footer">
    📚 数学乐园 · 知识库分析系统<br>
    本报告由系统自动生成
  </div>
</body>
</html>`;
  
  // 打开新窗口
  const printWindow = window.open('', '_blank');
  printWindow.document.write(reportHTML);
  printWindow.document.close();
  
  // 等待加载完成后提示打印
  printWindow.onload = () => {
    setTimeout(() => {
      if (confirm('报告已生成！\n\n点击"确定"打开打印对话框（可保存为 PDF）\n点击"取消"只看 HTML 报告')) {
        printWindow.print();
      }
    }, 300);
  };
}

function generateReportAdvice(hitRate, topMissed, total) {
  const advices = [];
  
  if (total < 10) {
    advices.push('📊 数据量较少，建议多使用几天后再生成报告');
  } else if (hitRate >= 80) {
    advices.push('🎉 太棒了！知识库命中率达到 ' + hitRate + '%，效果非常好！');
    advices.push('💡 可以考虑扩充知识库，回答更多复杂问题');
  } else if (hitRate >= 60) {
    advices.push('👍 命中率良好（' + hitRate + '%），知识库基本满足需求');
    advices.push('💡 可针对未命中问题补充知识');
  } else if (hitRate >= 40) {
    advices.push('⚠️ 命中率一般（' + hitRate + '%），建议扩充知识库');
  } else {
    advices.push('🚨 命中率偏低（' + hitRate + '%），急需扩充知识库！');
  }
  
  if (topMissed.length > 0) {
    advices.push('📌 TOP 未命中问题需要重点关注，可使用"🤖 AI 自动整理"功能快速补充');
  }
  
  if (KB_DATA.length < 30) {
    advices.push('💡 知识库条数较少（' + KB_DATA.length + ' 条），建议扩充到 50+ 条');
  }
  
  return advices.map(a => `<div style="margin:6px 0">${a}</div>`).join('');
}

/* ============================================
   🏆 知识库答题游戏
   ============================================ */
let gameState = {
  active: false,
  questions: [],
  currentIdx: 0,
  correctCount: 0,
  startTime: 0,
  totalTime: 0
};

function startKBGame() {
  // 至少要 4 条知识才能玩
  if (KB_DATA.length < 4) {
    alert('❌ 知识库至少需要 4 条知识才能玩游戏！\n当前只有 ' + KB_DATA.length + ' 条');
    return;
  }
  
  // 随机抽取 10 条知识（如果知识库少于 10 条就全用）
  const count = Math.min(10, KB_DATA.length);
  const shuffled = [...KB_DATA].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);
  
  // 为每条知识生成选择题
  const questions = selected.map(correct => {
    // 3 个错误选项
    const others = KB_DATA
      .filter(k => k !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    // 打乱顺序
    const options = [correct, ...others].sort(() => Math.random() - 0.5);
    
    // 截断过长的文本
    const displayText = correct.length > 60 
      ? correct.substring(0, 60) + '...'
      : correct;
    
    return {
      question: displayText,
      options,
      correctIndex: options.indexOf(correct),
      fullAnswer: correct
    };
  });
  
  gameState = {
    active: true,
    questions,
    currentIdx: 0,
    correctCount: 0,
    startTime: Date.now(),
    totalTime: 0
  };
  
  showGameQuestion();
}

function showGameQuestion() {
  const { questions, currentIdx } = gameState;
  const q = questions[currentIdx];
  const progress = currentIdx + 1;
  const total = questions.length;
  
  const modal = document.createElement('div');
  modal.id = 'kbGameModal';
  modal.style.cssText = `
    position:fixed;inset:0;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
    z-index:9999;display:flex;align-items:center;justify-content:center;
    padding:20px;
  `;
  
  const card = document.createElement('div');
  card.style.cssText = `
    background:#fff;border-radius:20px;padding:24px;
    max-width:500px;width:100%;max-height:90vh;
    overflow-y:auto;animation:pop .4s;
    box-shadow:0 20px 60px rgba(0,0,0,.3);
  `;
  
  // ⭐ 显示完整答案作为题目（挖空模式）
  const words = q.fullAnswer.split(/([，。；！？])/);
  let displayQ = '';
  let correctAnswer = '';
  let blankPosition = 0;
  
  // 找一个有意义的挖空位置
  if (q.fullAnswer.length > 15) {
    const cutPos = Math.floor(q.fullAnswer.length * 0.4);
    const before = q.fullAnswer.substring(0, cutPos);
    const after = q.fullAnswer.substring(cutPos);
    correctAnswer = q.fullAnswer.substring(cutPos, cutPos + 4);
    displayQ = `${before}<span style="
      display:inline-block;border-bottom:3px solid #d63031;
      color:#d63031;font-weight:bold;padding:0 8px;min-width:60px;
      text-align:center;
    " data-pos="${cutPos}">____</span>${after}`;
  } else {
    displayQ = q.fullAnswer;
  }
  
  card.innerHTML = `
    <div style="text-align:center;margin-bottom:20px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <button id="gameQuit" style="
          background:#ff7675;color:#fff;border:none;
          padding:6px 12px;border-radius:6px;cursor:pointer;font-size:12px
        ">❌ 退出</button>
        <div style="font-size:13px;color:#888">
          🏆 第 <b style="color:#d63031;font-size:18px">${progress}</b> / ${total} 题
        </div>
        <div style="font-size:13px;color:#888">
          ✅ <b style="color:#00b894">${gameState.correctCount}</b> 对
        </div>
      </div>
      
      <div style="background:#f9fafb;height:6px;border-radius:3px;overflow:hidden;margin-bottom:20px">
        <div style="background:linear-gradient(90deg,#00b894,#00cec9);height:100%;width:${progress/total*100}%;transition:width .3s"></div>
      </div>
      
      <div style="font-size:12px;color:#888;margin-bottom:8px">📖 这条知识是：</div>
      <div style="
        font-size:15px;line-height:1.7;
        background:#fff8e1;padding:14px;border-radius:10px;
        color:#2d3436;text-align:left;
      ">${displayQ}</div>
    </div>
    
    <div style="margin-bottom:16px">
      <div style="font-size:13px;color:#666;margin-bottom:8px">
        ${correctAnswer ? '👇 从下面选项中选出空缺的词：' : '👇 这条知识是关于什么的？'}
      </div>
      <div id="gameOptions" style="display:grid;gap:8px">
        ${q.options.map((opt, i) => {
          const displayOpt = opt.length > 30 ? opt.substring(0, 30) + '...' : opt;
          return `
            <button class="game-option" data-idx="${i}" style="
              padding:12px;background:#f9fafb;border:2px solid #e5e7eb;
              border-radius:10px;cursor:pointer;font-size:14px;
              text-align:left;transition:all .15s;color:#2d3436;
              font-family:inherit;line-height:1.5;
            " onmouseover="if(!this.classList.contains('selected'))this.style.background='#f0f9ff'"
               onmouseout="if(!this.classList.contains('selected'))this.style.background='#f9fafb'">
              <span style="
                display:inline-block;width:24px;height:24px;
                background:#6c5ce7;color:#fff;border-radius:50%;
                text-align:center;line-height:24px;margin-right:8px;
                font-size:12px;font-weight:bold;
              ">${'ABCD'[i]}</span>
              ${displayOpt}
            </button>
          `;
        }).join('')}
      </div>
    </div>
    
    <div id="gameFeedback" style="display:none;padding:12px;border-radius:8px;margin-bottom:12px"></div>
    
    <button id="gameNext" style="
      width:100%;padding:12px;
      background:linear-gradient(135deg,#00b894,#00cec9);
      color:#fff;border:none;border-radius:10px;
      font-size:15px;font-weight:bold;cursor:pointer;
      display:none;
    ">下一题 ➡️</button>
  `;
  
  modal.appendChild(card);
  document.body.removeChild(document.getElementById('kbGameModal') || document.createElement('div'));
  document.body.appendChild(modal);
  
  // 退出按钮
  document.getElementById('gameQuit').onclick = () => {
    if (confirm('确定退出游戏吗？进度将不保存。')) {
      modal.remove();
      gameState.active = false;
    }
  };
  
  // 选项点击
  card.querySelectorAll('.game-option').forEach(btn => {
    btn.onclick = () => {
      if (btn.classList.contains('selected')) return;
      
      // 标记所有按钮为已选
      card.querySelectorAll('.game-option').forEach(b => b.classList.add('selected'));
      
      const selectedIdx = parseInt(btn.dataset.idx);
      const isCorrect = selectedIdx === q.correctIndex;
      
      // 视觉反馈
      if (isCorrect) {
        btn.style.background = '#00b894';
        btn.style.color = '#fff';
        btn.style.borderColor = '#00b894';
        gameState.correctCount++;
        beep(880, 0.1);
      } else {
        btn.style.background = '#ff7675';
        btn.style.color = '#fff';
        btn.style.borderColor = '#ff7675';
        // 显示正确答案
        card.querySelectorAll('.game-option')[q.correctIndex].style.background = '#00b894';
        card.querySelectorAll('.game-option')[q.correctIndex].style.color = '#fff';
        beep(220, 0.2);
      }
      
      // 显示反馈
      const feedback = document.getElementById('gameFeedback');
      feedback.style.display = 'block';
      feedback.style.background = isCorrect ? '#e8f8f5' : '#fff5f5';
      feedback.style.color = isCorrect ? '#006657' : '#991b1b';
      feedback.innerHTML = isCorrect 
        ? '🎉 <b>答对了！</b> 这条知识你记住了！' 
        : `😅 <b>答错了</b><br>正确答案：${q.options[q.correctIndex].substring(0, 50)}${q.options[q.correctIndex].length > 50 ? '...' : ''}`;
      
      // 显示下一题按钮
      document.getElementById('gameNext').style.display = 'block';
    };
  });
  
  // 下一题
  document.getElementById('gameNext').onclick = () => {
    gameState.currentIdx++;
    modal.remove();
    if (gameState.currentIdx >= gameState.questions.length) {
      finishKBGame();
    } else {
      showGameQuestion();
    }
  };
}

function finishKBGame() {
  const { correctCount, questions, startTime } = gameState;
  const total = questions.length;
  const timeSpent = Math.floor((Date.now() - startTime) / 1000);
  const accuracy = (correctCount / total * 100).toFixed(0);
  
  let stars, emoji, title;
  if (accuracy >= 90) {
    stars = 3; emoji = '🏆'; title = '完美！';
  } else if (accuracy >= 70) {
    stars = 2; emoji = '🎉'; title = '太棒了！';
  } else if (accuracy >= 50) {
    stars = 1; emoji = '😊'; title = '不错哦！';
  } else {
    stars = 0; emoji = '💪'; title = '继续努力！';
  }
  
  // 保存成绩
  try {
    const games = JSON.parse(localStorage.getItem('kb_game_history') || '[]');
    games.push({
      date: new Date().toISOString(),
      total,
      correct: correctCount,
      time: timeSpent,
      accuracy: parseFloat(accuracy)
    });
    localStorage.setItem('kb_game_history', JSON.stringify(games.slice(-20)));  // 保留最近 20 次
  } catch(e) {}
  
  // 显示结果
  const modal = document.createElement('div');
  modal.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,.6);
    z-index:9999;display:flex;align-items:center;justify-content:center;
    padding:20px;
  `;
  
  modal.innerHTML = `
    <div style="
      background:#fff;border-radius:20px;padding:30px;
      max-width:400px;width:100%;text-align:center;
      animation:pop .5s;
    ">
      <div style="font-size:60px;margin-bottom:10px">${emoji}</div>
      <h2 style="color:#6c5ce7;margin:0 0 8px">${title}</h2>
      <div style="font-size:30px;color:#fdcb6e;margin:10px 0">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
      
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:20px 0">
        <div style="background:#e8f8f5;padding:12px;border-radius:8px">
          <div style="font-size:24px;font-weight:bold;color:#00b894">${correctCount}/${total}</div>
          <div style="font-size:11px;color:#666">正确</div>
        </div>
        <div style="background:#fff8e1;padding:12px;border-radius:8px">
          <div style="font-size:24px;font-weight:bold;color:#fdcb6e">${accuracy}%</div>
          <div style="font-size:11px;color:#666">正确率</div>
        </div>
        <div style="background:#e3f2fd;padding:12px;border-radius:8px">
          <div style="font-size:24px;font-weight:bold;color:#4a90e2">${timeSpent}s</div>
          <div style="font-size:11px;color:#666">用时</div>
        </div>
      </div>
      
      <div style="display:flex;gap:8px;margin-top:20px">
        <button id="gameAgain" style="
          flex:1;padding:12px;background:linear-gradient(135deg,#00b894,#00cec9);
          color:#fff;border:none;border-radius:10px;font-weight:bold;cursor:pointer
        ">🔁 再来一次</button>
        <button id="gameBack" style="
          flex:1;padding:12px;background:linear-gradient(135deg,#6c5ce7,#4834d4);
          color:#fff;border:none;border-radius:10px;font-weight:bold;cursor:pointer
        ">🏠 返回</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  document.getElementById('gameAgain').onclick = () => {
    modal.remove();
    startKBGame();
  };
  
  document.getElementById('gameBack').onclick = () => {
    modal.remove();
    gameState.active = false;
  };
  
  // 撒花效果
  if (stars >= 2 && typeof confettiBurst === 'function') {
    confettiBurst();
  }
}


// 计算表达式（带步骤）
function tryCalculateRaw(text) {
  if (!isMathExpression(text)) return null;
  
  try {
    // 1. 标准化表达式
    const expr = text
      .replace(/×/g, '*')   // 中文 ×
      .replace(/÷/g, '/')   // 中文 ÷
      .replace(/[—–]/g, '-')  // 长破折号
      .replace(/\s+/g, '')   // 去除空格
      .trim();
    
    // 2. 安全性检查（只允许数字和运算符）
    if (!/^[\d\+\-\*\/\(\)\.]+$/.test(expr)) return null;
    
    // 3. 计算结果
    const result = Function('"use strict"; return (' + expr + ')')();
    
    // 4. 检查结果有效性
    if (typeof result !== 'number' || !isFinite(result)) return null;
    
    // 5. 生成计算步骤
    const steps = generateSteps(expr);
    
    return {
      result: formatNumber(result),
      steps,
      original: text,
      expression: expr
    };
  } catch (e) {
    console.warn('计算失败:', e);
    return null;
  }
}


/* ============================================
   🧮 四则运算计算器（完整智能版）
   ============================================ */

// 判断是否是数学表达式（先转中文再判断）
function isMathExpression(text) {
  if (!text || typeof text !== 'string') return false;
  text = text.trim();
  if (!text) return false;
  
  // ⭐ 关键：先尝试转换中文，看转换后是不是数学表达式
  // ⭐ 关键：先尝试中文转换
  let converted;
    try {
    converted = chineseNumToInt(text);
  } catch(e) {
    return false;
  }
  
  // 转换后必须是纯数学表达式
  converted = converted.trim();
  
  // 匹配：数字 + 运算符 + 数字 + ...
  // 支持：+ - * / ( ) . 空格
  // 不允许：字母、中文
  //if (/[a-zA-Z\u4e00-\u9fa5]/.test(text)) return false;
  if (!/^[\d\+\-\*\/\(\)\.]+$/.test(converted)) return false;
  // 必须包含至少一个运算符
  //if (!/[\+\-\*\/]/.test(text)) return false;
  if (!/[\+\-\*\/]/.test(converted)) return false;
  // 必须是数字开头
  if (!/^\s*[\-\(]?\s*\d/.test(text)) return false;
  
  return true;
}

// 格式化数字（去掉无意义的 0）
function formatNumber(num) {
  if (typeof num !== 'number' || !isFinite(num)) return 'NaN';
  // 整数
  if (Number.isInteger(num)) return num.toString();
  // 小数（保留 4 位）
  return parseFloat(num.toFixed(4)).toString();
}

// 生成计算步骤（按运算顺序）
function generateSteps(expr) {
  const steps = [];
  
  // ⭐ 简化版步骤：按运算符优先级展开
  // 第一步：找出所有乘除
  let current = expr;
  let step = 1;
  
  // 处理括号
  while (current.includes('(')) {
    const match = current.match(/\(([^()]+)\)/);
    if (!match) break;
    
    const inner = match[1];
    try {
      //const innerResult = Function('"use strict"; return (' + inner + ')')();
      const innerResult = Function('"use strict"; return (' + match[1] + ')')();
      current = current.replace(match[0], formatNumber(innerResult));
      steps.push(`第 ${step} 步：算括号 ${match[0]} = ${formatNumber(innerResult)}`);
      step++;
    } catch(e) {
      break;
    }
  }
  
  // 处理乘除
  let mulDivRegex = /(-?\d+(?:\.\d+)?)\s*([\*\/])\s*(-?\d+(?:\.\d+)?)/;
  while (mulDivRegex.test(current)) {
    const match = current.match(mulDivRegex);
    if (!match) break;
    
    const a = parseFloat(match[1]);
    const op = match[2];
    const b = parseFloat(match[3]);
    const r = op === '*' ? a * b : a / b;
    
    current = current.replace(match[0], formatNumber(r));
    //steps.push(`第 ${step} 步：${match[0]} = ${formatNumber(r)}`);
    steps.push(`第 ${step} 步：${match[0]} 等于 ${formatNumber(r)}`);
    step++;
  }
  
  // 处理加减
  let addSubRegex = /(-?\d+(?:\.\d+)?)\s*([\+\-])\s*(-?\d+(?:\.\d+)?)/;
  while (addSubRegex.test(current) && current.match(/[\+\-]/g)?.length > 1) {
    const match = current.match(addSubRegex);
    if (!match) break;
    
    const a = parseFloat(match[1]);
    const op = match[2];
    const b = parseFloat(match[3]);
    const r = op === '+' ? a + b : a - b;
    
    current = current.replace(match[0], formatNumber(r));
    steps.push(`第 ${step} 步：${match[0]} = ${formatNumber(r)}`);
    step++;
  }
  
  return steps;
}

// ⭐ 基础版（纯数字）
function tryCalculateRaw(text) {
  if (!isMathExpression(text)) return null;
  
  try {
    // ⭐ 关键：先转中文（如果是中文表达式）
    let expr = chineseNumToInt(text);
    
    // 标准化
    expr = expr
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/[—–]/g, '-')
      .replace(/\s+/g, '')
      .trim();
    
    if (!/^[\d\+\-\*\/\(\)\.]+$/.test(expr)) return null;
    
    const result = Function('"use strict"; return (' + expr + ')')();
    
    if (typeof result !== 'number' || !isFinite(result)) return null;
    
    const steps = generateSteps(expr);
    
    return {
      result: formatNumber(result),
      steps,
      original: text,
      expression: expr
    };
  } catch (e) {
    console.warn('计算失败:', e);
    return null;
  }
}


/* ============================================
   🀄 中文数字转换
   ============================================ */

function chineseNumToInt(text) {

  if (!text) return '';
  
  // ⭐ 关键修复：全角字符转半角
  /*
  text = text
    .replace(/（/g, '(')   // （ → (
    .replace(/）/g, ')')   // ） → )
    .replace(/，/g, ',')   // ， → ,
    .replace(/；/g, ';')   // ； → ;
    .replace(/：/g, ':')   // ： → :
    .replace(/！/g, '!')   // ！ → !
    .replace(/？/g, '?');  // ？ → ?
  */
  
  //let result = text;
  // ⭐ 关键修复 1：全角转半角（包括括号、标点）
  let result = text
    .replace(/[\uFF01-\uFF5E]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0))
    //;
    // ⭐ 扩展：支持更多全角字符
    .replace(/【/g, '[')
    .replace(/】/g, ']')
    .replace(/『/g, '[')
    .replace(/』/g, ']')
    .replace(/「/g, '[')
    .replace(/」/g, ']')
    .replace(/《/g, '<')
    .replace(/》/g, '>')
    .replace(/\s+/g, '');
  
  // ⭐ 关键修复：去掉等号和问号
  result = result.replace(/=/g, '');     // 英文 =
  result = result.replace(/\?/g, '');    // 英文 ?
  result = result.replace(/等于/g, '');  // 中文"等于"
  result = result.replace(/？/g, '');    // 全角 ？
  result = result.replace(/是/g, '');    // 中文"是"
  result = result.replace(/几/g, '');    // 中文"几"
  result = result.replace(/多少/g, '');  // 中文"多少"
  
  // ⭐ 修复 2：方括号、花括号转圆括号
  result = result.replace(/\[/g, '(');
  result = result.replace(/\]/g, ')');
  result = result.replace(/\{/g, '(');
  result = result.replace(/\}/g, ')');
  
  // ⭐ 修复 3：去除空白
  result = result.replace(/\s+/g, '');
  
  // ⭐ 关键修复 2：剩余的全角空格、半角空格等都去掉
  result = result.replace(/\s+/g, '');
  
  // 1. 处理运算符（先处理长的，避免被短的截胡）
  result = result.replace(/乘以/g, '*');
  result = result.replace(/除以/g, '/');
  result = result.replace(/加上/g, '+');  // 加上 → +
  result = result.replace(/减去/g, '-');  // 减去 → -
  result = result.replace(/乘/g, '*');
  result = result.replace(/除/g, '/');
  result = result.replace(/加/g, '+');
  result = result.replace(/减/g, '-');
  result = result.replace(/等于/g, '=');
  result = result.replace(/[×✕]/g, '*');
  result = result.replace(/[÷]/g, '/');
  result = result.replace(/[—–]/g, '-');
  result = result.replace(/[×÷]/g, m => m === '×' ? '*' : '/');
  result = result.replace(/➕/g, '+');  // 加上 → +
  result = result.replace(/➖/g, '-');  // 减去 → -
  result = result.replace(/✖️/g, '*');
  result = result.replace(/✖/g, '*');
  result = result.replace(/➗/g, '/');
  
  
  // 2. 处理"十"开头的两位数（十二 → 12）
  result = result.replace(/十([一二三四五六七八九])/g, '1$1');
  
  // 3. 处理百位
  result = result.replace(/([一二三四五六七八九])百/g, '$100');
  result = result.replace(/百/g, '100');
  
  // 4. 处理 X十 形式（二十 → 20）
  result = result.replace(/([一二三四五六七八九])十/g, '$10');
  
  // 5. 处理单独的"十"
  result = result.replace(/十/g, '10');
  
  const map = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4,
    '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10
  };
  
  
  for (const [cn, num] of Object.entries(map)) {
    result = result.replace(new RegExp(cn, 'g'), num);
  }
  
  return result;
}

// ⭐ 完整版中文数字解析（支持 1-999）

function parseChineseNumber(text) {
  // 处理 "十X" → 1X
  text = text.replace(/十([一二三四五六七八九])/g, (m, d) => '1' + d);
  // 处理 "十" → 10
  text = text.replace(/十/g, '10');
  // 处理 "X十" → X0
  text = text.replace(/([一二三四五六七八九])十/g, '$10');
  // 处理 "百"
  text = text.replace(/([一二三四五六七八九])百/g, '$100');
  text = text.replace(/百/g, '100');
  
  const map = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4,
    '五': 5, '六': 6, '七': 7, '八': 8, '九': 9
  };
  for (const [cn, num] of Object.entries(map)) {
    text = text.replace(new RegExp(cn, 'g'), num);
  }
  
  return text;
}


/* ============================================
   ⭐ 智能版 tryCalculate（支持中文 对外接口）
   ============================================ */
function tryCalculate(text) {

  // 直接计算（内部已含中文转换）
  return tryCalculateRaw(text);
}

// ⭐ 完整版中文数字解析（支持 1-999）
function parseChineseNumber(text) {
  // 处理 "十X" → 1X (如 十二 → 12)
  text = text.replace(/十([一二三四五六七八九])/g, (m, d) => '1' + d);
  // 处理 "十" → 10
  text = text.replace(/十/g, '10');
  // 处理 "X十" → X0 (如 二十 → 20)
  text = text.replace(/([一二三四五六七八九])十/g, '$10');
  // 处理 "百"（如 三百 → 300）
  text = text.replace(/([一二三四五六七八九])百/g, '$100');
  text = text.replace(/百/g, '100');
  
  // 单个数字
  const map = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4,
    '五': 5, '六': 6, '七': 7, '八': 8, '九': 9
  };
  for (const [cn, num] of Object.entries(map)) {
    text = text.replace(new RegExp(cn, 'g'), num);
  }
  
  return text;
}

// ⭐ 放在文件最末尾（覆盖前面的版本）
function isMathExpression(text) {
  text = text.trim();
  
  // ⭐ 关键修复：先尝试转换中文
  const converted = chineseNumToInt(text);
  
  // 如果转换后是纯数学表达式 → 是
  if (/^[\d\+\-\*\/\(\)\.]+$/.test(converted.trim())) {
    return true;
  }
  // ⭐ 修复：允许 [ ] { } 三种括号
  if (!/^[\d\+\-\*\/\(\)\[\]\{\}\.]+$/.test(converted.trim())) return false;
  // ⭐ 修复：允许 = ? 等
  if (!/^[\d\+\-\*\/\(\)\.\=\?]+$/.test(converted.trim())) return false;
  
  // 否则按原版逻辑判断（不转换）
  if (/[a-zA-Z]/.test(text)) return false;  // 字母不行
  if (!/[\+\-\*\/]/.test(text)) return false;  // 必须有运算符
  if (!/^\s*[\-\(]?\s*\d/.test(text)) return false;  // 数字开头
  return true;
}

/* ============================================
   🌟 礼貌检测 & 教育引导（完整模块）
   ============================================ */

// =============== 1. 先定义词库 ===============
const RUDE_WORDS = [
  '笨蛋', '蠢', '傻', '废物', '垃圾', '滚', '去死', '弱智',
  'stupid', 'idiot', 'fool', 'dumb', 'shit', 'fuck','操',
  '傻逼', '智障', '脑残', '2b', 'sb', 'tmd', 'nmd',
  '蠢货', '呆子', '二百五', '250','八嘎','巴嘎','阿呆',
];

// =============== 2. 再加载自定义词 ===============
// ⭐ 必须放在 RUDE_WORDS 定义之后
function loadCustomRudeness() {
  try {
    const custom = localStorage.getItem('custom_rude_words');
    if (custom) {
      const words = JSON.parse(custom);
      if (Array.isArray(words)) {
        // ⭐ 避免重复添加（页面刷新时不会重复）
        for (const w of words) {
          if (!RUDE_WORDS.includes(w)) {
            RUDE_WORDS.push(w);
          }
        }
      }
    }
  } catch(e) {
    console.warn('加载自定义词库失败:', e);
  }
}

// ⭐ 立即执行（紧跟 RUDE_WORDS 定义）
loadCustomRudeness();

// =============== 3. 定义回复模板 ===============
const POLITE_REPLIES = {
  '笨蛋': [
    '🤗 别生气啦！我虽然不是人，但我会一直陪着你学习哦~',
    '😊 骂人是不好的习惯哦，我们来做个好朋友吧！',
    '💪 我知道你现在可能心情不好，要不我们做道题冷静一下？',
    '🌈 每个人都会犯错，重要的是改正。我们一起加油吧！'
  ],
  '蠢': [
    '🧠 学习本来就是一个从不会到会的过程，加油！',
    '✨ 没有人生来就聪明，都是慢慢学出来的~',
    '🌱 我陪你慢慢来，一道题一道题搞定！'
  ],
  '废物': [
    '💝 你不是废物！每个人都有自己的闪光点哦~',
    '🌟 说这种话会让你心情更差，不如做道题开心一下？',
    '🤗 不要这样说自己，你很棒的！'
  ],
  '滚': [
    '😢 我会一直在这里等你的，不会走~',
    '💕 不管你说什么，我都会陪着你学习哦~',
    '🎈 我们换个话题吧，要不要挑战一道有趣的题？'
  ],
  'default': [
    '😊 我们用友善的方式交流好不好？我会尽力帮你的~',
    '💖 我知道你可能不开心，但骂人不能解决问题哦~',
    '🌟 不管怎样，我都愿意陪你一起学习，加油！',
    '🎯 把精力放在学习上吧，你一定能变得更棒！'
  ]
};

// =============== 4. 分类函数 ===============
function categorize(word) {
  if (['笨蛋', '蠢', '傻', '傻逼', '智障', '脑残', '蠢货', '呆子', '二百五', '250','八嘎','巴嘎','阿呆', 'sb', '2b', 'stupid', 'idiot', 'fool', 'dumb'].includes(word)) {
    return '笨蛋';
  }
  if (['废物', '垃圾'].includes(word)) return '废物';
  if (['滚', '去死', 'shit', 'fuck'].includes(word)) return '滚';
  return 'default';
}

// =============== 5. 礼貌检测主函数 ===============
function checkPolite(text) {
  if (!text) return null;
  
  const lowerText = text.toLowerCase().trim();
  
  for (const word of RUDE_WORDS) {
    if (lowerText.includes(word.toLowerCase())) {
      const category = categorize(word);
      const replies = POLITE_REPLIES[category] || POLITE_REPLIES['default'];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      console.log(`🌟 检测到不礼貌词: "${word}" → 回复: ${reply.substring(0, 30)}...`);
      return reply;
    }
  }
  
  return null;
}

// =============== 6. 高级版（带情绪检测） ===============
function checkPoliteAdvanced(text) {
  const basicReply = checkPolite(text);
  if (basicReply) return basicReply;
  
  const emotionWords = {
    '生气': '😤',
    '不开心': '😢',
    '难过': '😢',
    '讨厌': '😣',
    '烦': '😩',
    '哭': '😢'
  };
  
  for (const [word, emoji] of Object.entries(emotionWords)) {
    if (text.includes(word)) {
      return `${emoji} 我感受到你${word}了。愿意和我说说为什么吗？我会认真听的~`;
    }
  }
  
  return null;
}

// =============== 7. 自定义词管理函数 ===============
// 添加自定义词
function addCustomRudeWord(word) {
  if (!word || !word.trim()) {
    alert('❌ 词不能为空');
    return false;
  }
  
  word = word.trim();
  
  if (RUDE_WORDS.includes(word)) {
    alert(`"${word}" 已经在词库里了`);
    return false;
  }
  
  RUDE_WORDS.push(word);
  
  // 保存到 localStorage
  saveCustomRudeness();
  return true;
}

// 保存自定义词到 localStorage
function saveCustomRudeness() {
  // 只保存"自定义"的那部分（不含默认的）
  // 简单做法：保存所有非默认词
  const defaultWords = [
    '笨蛋', '蠢', '傻', '废物', '垃圾', '滚', '去死', '弱智',
    'stupid', 'idiot', 'fool', 'dumb', 'shit', 'fuck','操',
    '傻逼', '智障', '脑残', '2b', 'sb', 'tmd', 'nmd',
    '蠢货', '呆子', '二百五', '250','八嘎','巴嘎','阿呆',
  ];
  
  const customWords = RUDE_WORDS.filter(w => !defaultWords.includes(w));
  
  try {
    localStorage.setItem('custom_rude_words', JSON.stringify(customWords));
  } catch(e) {
    console.warn('保存失败:', e);
  }
}

// 删除自定义词
function removeCustomRudeWord(word) {
  const index = RUDE_WORDS.indexOf(word);
  if (index > -1) {
    RUDE_WORDS.splice(index, 1);
    saveCustomRudeness();
    return true;
  }
  return false;
}

/* ============================================
   🛡️ 礼貌词管理 UI
   ============================================ */

// ⭐ 渲染礼貌词管理卡片
function renderRudeWordsManager() {
  const defaultWords = [
    '笨蛋','蠢','傻','废物','垃圾','滚','去死','弱智',
    'stupid','idiot','fool','dumb','shit','fuck','操',
    '傻逼','智障','脑残','2b','sb','tmd','nmd',
    '蠢货','呆子','二百五','250','八嘎','巴嘎','阿呆',
  ];
  
  return `
    <div class="stat-card">
      <h3>🛡️ 礼貌词管理</h3>
      <p style="font-size:12px;color:#888">
        检测到不礼貌词时，AI 会自动用友善语言回复<br>
        当前词库: <b>${RUDE_WORDS.length}</b> 个
        （默认 ${defaultWords.length} + 自定义 ${RUDE_WORDS.length - defaultWords.length}）
      </p>
      
      <!-- 词库列表 -->
      <div style="margin:8px 0">
        <div id="rudeWordList" style="
          max-height:150px;overflow-y:auto;background:#fafafa;
          padding:8px;border-radius:6px;font-size:12px;line-height:2;
        ">
          ${RUDE_WORDS.map(w => {
            const isDefault = defaultWords.includes(w);
            const bgColor = isDefault ? '#f0f0f0' : '#fff3cd';
            const textColor = isDefault ? '#666' : '#d63031';
            const deleteBtn = isDefault ? '' : 
              `<span style="
                color:#ff7675;cursor:pointer;margin-left:4px;
                font-weight:bold;
              " onclick="removeRudeWord('${w}')" title="删除">✕</span>`;
            return `<span style="
              display:inline-block;background:${bgColor};
              color:${textColor};
              padding:3px 8px;border-radius:10px;margin:2px;font-size:11px;
            ">${w}${deleteBtn}</span>`;
          }).join('')}
        </div>
      </div>
      
      <!-- 添加输入框 -->
      <div style="display:flex;gap:6px;margin-top:8px">
        <input type="text" id="newRudeWord" placeholder="输入要添加的词..." 
          style="flex:1;padding:8px;border:1px solid #d1d5db;border-radius:6px;font-size:13px"
          onkeydown="if(event.key==='Enter') handleAddRudeWord()">
        <button onclick="handleAddRudeWord()" style="
          padding:8px 16px;background:#d63031;color:#fff;
          border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold
        ">➕ 添加</button>
      </div>
      
      <div style="font-size:11px;color:#888;margin-top:6px">
        💡 提示：默认词不能删除，只能添加自定义词（黄色显示）
      </div>
    </div>
  `;
}

// 处理添加按钮
function handleAddRudeWord() {
  const input = document.getElementById('newRudeWord');
  if (!input) return;
  
  const word = input.value.trim();
  if (!word) {
    alert('请输入要添加的词');
    return;
  }
  
  if (addCustomRudeWord(word)) {
    input.value = '';
    refreshRudeWordsManager();  // 只刷新这部分，不刷新整个 KB 编辑器
    alert(`✅ 已添加 "${word}"`);
  } else {
    alert(`"${word}" 已经在词库里了`);
  }
}

// 删除自定义词
function removeRudeWord(word) {
  if (confirm(`确定要删除 "${word}" 吗？`)) {
    if (removeCustomRudeWord(word)) {
      refreshRudeWordsManager();
    } else {
      alert('删除失败');
    }
  }
}

// ⭐ 智能刷新（只刷礼貌词部分，不破坏 KB 编辑器）
function refreshRudeWordsManager() {
  const container = document.getElementById('rudeWordManagerContainer');
  if (container) {
    container.innerHTML = renderRudeWordsManager();
  }
}


/* ============================================
   🧮 智能算式提取（强化版）
   ============================================ */

/**
 * 从用户输入中提取数学算式
 */
function extractMathExpression(text) {
  if (!text || typeof text !== 'string') return null;
  
  // ⭐ 第 1 步：全角转半角
  let result = text.replace(/[\uFF01-\uFF5E]/g, ch => 
    String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
  );
  
  // ⭐ 第 2 步：去空白
  result = result.replace(/\s+/g, '');
  
  // ⭐ 第 3 步：去掉 = ? 和中文"等于"
  //result = result.replace(/等于/g, ''); // 为了显示高亮
  //result = result.replace(/=/g, '');    // ★bug:如果是这样的代码，那 1+1=2 会变成 1+12
  result = result.replace(/\?/g, '');
  result = result.replace(/？/g, '');
  
  // ⭐ 第 4 步：核心正则 - 找所有可能的算式
  // 用 /g 标志找所有匹配
  const matches = result.match(/[\d\+\-\*\/\(\)\.]+/g) || [];

  // 过滤：必须包含数字 + 运算符
  const validMatches = matches.filter(m => 
    /\d/.test(m) && /[\+\-\*\/]/.test(m)
  );
  
  // ⭐ 选最长的那个（一般是用户想要的算式）
  if (validMatches.length > 0) {
    const longest = validMatches.sort((a, b) => b.length - a.length)[0];
    return longest;
  }
  
  
  
  // ⭐ 第 5 步：尝试中文转换
  const converted = chineseNumToInt(result);
  
  // ⭐ 第 4 步：中文转换（这里才删"等于"）
  //let converted = result.replace(/等于/g, '');
  //converted = converted.replace(/[=？\?]/g, '');
  //converted = chineseNumToInt(converted);
  
  const convertedMatches = converted.match(/[\d\+\-\*\/\(\)\.]+/g) || [];
  const validConverted = convertedMatches.filter(m => 
    /\d/.test(m) && /[\+\-\*\/]/.test(m)
  );
  
  if (validConverted.length > 0) {
    return validConverted.sort((a, b) => b.length - a.length)[0];
  }
  
  return null;
}

/**
 * 智能 tryCalculate - 先提取算式再计算
 */
function smartCalculate(text) {
  if (!text) return null;
  
  // 1. 先尝试原始文本直接计算
  let result = tryCalculate(text);
  if (result) {
    result.extractedExpr = result.expression || text;
    return result;
  }
  
  // 2. 提取算式
  const expr = extractMathExpression(text);
  if (!expr) return null;
  
  // 3. 用提取的算式计算
  result = tryCalculate(expr);
  if (result) {
    result.extractedFrom = text;
    result.extractedExpr = expr;
    return result;
  }
  
  return null;
}


/* ============================================
   🟡 高亮"等于"二字
   ============================================ */

function highlightEquals(text) {
  if (!text) return text;
  // ⭐ 同时高亮"等于"和"="
  return text
    .replace(/等于/g, '<span style="background:#fff3cd;color:#d63031;font-weight:bold;padding:0px 2px;border-radius:3px;#fdcb6e">等于</span>')
    //.replace(/=/g, '<span style="background:#fff3cd;color:#d63031;font-weight:bold;padding:0 4px;border-radius:4px">＝</span>');
}

