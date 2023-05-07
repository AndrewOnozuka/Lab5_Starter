// expose.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  // initialize
  let imgs = document.querySelectorAll("img");
  let img = imgs[0];
  let icon = imgs[1];
  let audio = document.querySelector("audio");

  // horn select & elements
  let horn = document.getElementById("horn-select");
  horn.addEventListener("input", function() {
    switch(horn.value) {
      case "select":
        img.src = "assets/images/no-image.png";
        audio.src = "";
        break;
      case "air-horn":
        img.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        img.src = "assets/images/car-horn.svg"
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        img.src = "assets/images/party-horn.svg"
        audio.src = "assets/audio/party-horn.mp3";
        break;
    }
  })

  // volume control
  let volControls = document.getElementById("volume-controls");
  volControls.addEventListener("change", function(e) {
    let vol = e.target.value;
    if (vol == 0) {
      icon.src = "assets/icons/volume-level-0.svg";
      icon.alt = "Volume level 0";
    } else if (vol < 33) {
      icon.src = "assets/icons/volume-level-1.svg";
      icon.alt = "Volume level 1";
    } else if (vol < 67) {
      icon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      icon.src = "assets/icons/volume-level-3.svg";
      icon.alt = "Volume level 3";
    }
    audio.volume = vol/vol.max;
  });

  // button
  const jsConfetti = new JSConfetti();
  let button = document.querySelector("button");
  button.addEventListener("click", function() {
    audio.play();
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}