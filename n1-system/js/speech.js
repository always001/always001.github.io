window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;

function initRecognition() {
  if (!window.SpeechRecognition) {
    alert("このブラウザは音声認識に対応していません。");
    return;
  }
  recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    const input = document.getElementById("answer");
    input.value = text;
  };

  recognition.onerror = (event) => {
    console.error("Recognition error:", event.error);
  };
}

function startRecognition() {
  if (!recognition) initRecognition();
  recognition.start();
}
