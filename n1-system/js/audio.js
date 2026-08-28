// 使用 Web Speech API 的日语朗读
// speakJP(text) 在 dictation.js 中直接调用

function speakJP(text, onend) {
  if (!("speechSynthesis" in window)) {
    console.warn("speechSynthesis 不支持");
    if (onend) onend();
    return;
  }

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";

  utter.onend = () => {
    if (onend) onend();
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}
