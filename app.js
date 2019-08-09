const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  // Sounds
  const sounds = document.querySelectorAll(".sound-picker button");

  // Time display
  const timeDisplay = document.querySelector(".time-display");
  const timeSelect = document.querySelectorAll(".time-select button");

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

  // Select sound duration
  timeSelect.forEach(option => {
    option.addEventListener("click", function() {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
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

  // Circle animation
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    // Progress Bar animation
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    // Text animation (Countdown)
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
  };
};

app();
