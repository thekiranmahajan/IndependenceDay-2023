const celebrateBtn = document.getElementById("celebrateBtn");
const canvas = document.querySelector(".main");
const vandeMataram = document.getElementById("myAudio");
const jsConfetti = new JSConfetti(canvas);

celebrateBtn.addEventListener("click", () => {
  jsConfetti
    .addConfetti({
      emojis: ["🇮🇳", "🧡", "🤍", "💚", "🪷", "🌸"],
    })
    .then(() => jsConfetti.addConfetti());
});

let isPlaying = false;

celebrateBtn.addEventListener("click", () => {
  //   vandeMataram.play();
  if (isPlaying) {
    vandeMataram.pause();
  } else {
    vandeMataram.play();
  }
  isPlaying = !isPlaying;
});

vandeMataram.addEventListener("ended", () => {
  isPlaying = false;
});
