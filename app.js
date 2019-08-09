const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  // Sounds
  const sounds = document.querySelectorAll(".sound-picker button");

  // Time display
  const timeDisplay = document.querySelector(".time-display");

  // Get the length of the outline
  const outlineLength = outline.getTotalLength();

  // Duration
  let fakeDuration = 600;

  // Timer animation
  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // Play sounds
  play.addEventListener("click", () => {
    checkPlay(song);
  });

  // Function to stop and play sounds and change icons.
  const checkPlay = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };
};

app();
