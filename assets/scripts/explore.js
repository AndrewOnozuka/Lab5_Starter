// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // intialize
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const inputTxt = document.getElementById("text-to-speak");
  const img = document.querySelector("img");

  // loading and updating voices
  let voices = [];
  populateVoiceList();
  synth.onvoiceschanged =(e) => {
    populateVoiceList();
  }

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = voices[i].name;
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      voiceSelect.appendChild(option);
    }
  }

  // button
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.value;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
  });

  // check speaking
  setInterval(checkSpeaking, 100);
  function checkSpeaking() {
    if (synth.speaking) {
      img.src = "assets/images/smiling-open.png";
    } else {
      img.src = "assets/images/smiling.png";
    };
  }
}