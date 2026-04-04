const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const difficultyList = document.querySelector("#difficulty-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const hitsEl = document.querySelector("#hits");
const accuracyEl = document.querySelector("#accuracy");
const hitsOver = document.querySelector("#hits-over");
const accuracyOver = document.querySelector("#accuracy-over");
const hearts = document.querySelectorAll(".heart");
const restartBtns = document.querySelectorAll(".restart");
const fullscreenBtn = document.querySelector("#fullscreen");
const minimizeBtn = document.querySelector("#minimize");

let time = 0;
let unlimited = false;
let difficulty = 0;
let playing = false;
let hits = 0;
let missed = 0;
let lives = 3;
let interval;
let countdownInterval;
let activeIntervals = [];

// Only show the first screen initially
screens.forEach((screen, index) => {
  if (index === 0) {
    screen.classList.add("active");
  } else {
    screen.classList.remove("active");
  }
});

startBtn.addEventListener("click", () => {
  goToNextScreen(0);
});

// Add click event for time buttons
timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    unlimited = e.target.getAttribute("data-unlimited") === "true";
    goToNextScreen(1);
  }
});

// Add click event for difficulty buttons
difficultyList.addEventListener("click", (e) => {
  if (e.target.classList.contains("difficulty-btn")) {
    difficulty = parseInt(e.target.getAttribute("data-difficulty"));
    startCountdownAndGame(); // Call the function to start the countdown immediately
  }
});

// Function to transition to the next screen
function goToNextScreen(currentScreenIndex) {
  screens[currentScreenIndex].classList.remove("active");
  if (screens[currentScreenIndex + 1]) {
    screens[currentScreenIndex + 1].classList.add("active");
  }
}

// Fullscreen functionality
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    minimizeBtn.textContent = "MINIMIZE"; // Change button text to "MINIMIZE" when in fullscreen
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      minimizeBtn.textContent = "FULL SCREEN"; // Change button text to "FULL SCREEN" when exiting fullscreen
    }
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    fullscreenBtn.textContent = "MINIMIZE";
  } else {
    fullscreenBtn.textContent = "FULL SCREEN";
  }
});

function startCountdownAndGame() {
  goToNextScreen(2); // Go to the next screen (game screen)
  startCountdown();
}

function startCountdown() {
  let countdown = 3; // Set the initial countdown value
  const countdownElement = document.getElementById("countdown");
  countdownElement.style.display = "block"; // Show the countdown element
  countdownElement.innerHTML = countdown; // Initial display of countdown

  countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.innerHTML = countdown; // Update countdown element

    if (countdown === 0) {
      clearInterval(countdownInterval);
      countdownElement.style.display = "none"; // Hide the countdown element
      startGame(); // Start the game after countdown ends
    }
  }, 1000);
}

function startGame() {
  playing = true;
  hits = 0;
  missed = 0;
  lives = 3;
  resetStats();
  interval = setInterval(decreaseTime, 1000);
  createRandomCircle();
}

function decreaseTime() {
  if (!unlimited && time === 0) {
    finishGame();
    return;
  }

  if (!unlimited) {
    time--;
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  setTime(formattedTime);

  if (time <= 5) {
    timeEl.style.color = "#FF000D";
  } else {
    timeEl.style.color = "#00FF00";
  }
}

function setTime(time) {
  timeEl.innerHTML = time;
}

function createRandomCircle() {
  if (!playing) return;

  const existingCircle = document.querySelector(".circle");
  if (existingCircle) {
    existingCircle.remove();
    clearInterval(existingCircle.shrinkInterval);
  }

  const circle = document.createElement("div");
  const size = getRandomNumber(50, 80);
  const colors = [
    "#FFFF00",
    "#FFFF33",
    "#F2EA02",
    "#E6FB04",
    "#FF0000",
    "#FD1C03",
    "#FF3300",
    "#FF6600",
    "#00FF00",
    "#00FF33",
    "#00FF66",
    "#33FF00",
    "#00FFFF",
    "#099FFF",
    "#0062FF",
    "#0033FF",
    "#FF00FF",
    "#FF00CC",
    "#FF0099",
    "#CC00FF",
    "#9D00FF",
    "#6E0DD0",
    "#9900FF"
  ];
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  board.appendChild(circle);

  circle.addEventListener("click", (e) => {
    hits++;
    e.target.remove();
    clearInterval(circle.shrinkInterval);
    calculateAccuracy();
    updateStats();
    createRandomCircle();
  });

  let shrinkTime;
  if (difficulty === 0) shrinkTime = 95;
  else if (difficulty === 1) shrinkTime = 80;
  else shrinkTime = 60;

  circle.shrinkInterval = setInterval(() => {
    const opacity = parseFloat(
      window.getComputedStyle(circle).getPropertyValue("opacity")
    );
    if (opacity <= 0) {
      clearInterval(circle.shrinkInterval);
      circle.remove();
      if (playing) {
        missed++;
        calculateAccuracy();
        updateStats();
        createRandomCircle();
      }
    } else {
      circle.style.opacity = Math.max(opacity - 0.07, 0);
      const newSize = Math.max(parseInt(circle.style.width) - 1, 0);
      circle.style.width = `${newSize}px`;
      circle.style.height = `${newSize}px`;
    }
  }, shrinkTime);
  activeIntervals.push(circle.shrinkInterval);
}

board.addEventListener("click", (e) => {
  if (!e.target.classList.contains("circle") && playing) {
    missed++;
    calculateAccuracy();
    updateStats();
  }
});

function calculateAccuracy() {
  const total = hits + missed;
  const accuracy = total === 0 ? 100 : (hits / total) * 100;
  accuracyEl.innerHTML = `${accuracy.toFixed(2)}%`;
  updateAccuracyColor(accuracyEl, accuracy);
}

function updateAccuracyColor(element, accuracy) {
  if (accuracy < 65) element.style.color = "#FF000D";
  else if (accuracy < 80) element.style.color = "#FF5B00";
  else element.style.color = "#00FF00";
}

function updateStats() {
  hitsEl.innerHTML = hits;
  const accuracy = parseFloat(accuracyEl.innerHTML);
  updateAccuracyColor(accuracyOver, accuracy);
}

function resetStats() {
  setTime("00:00");
  hitsEl.innerHTML = "0";
  accuracyEl.innerHTML = "100%";
  accuracyOver.innerHTML = "100%";
  hitsEl.style.color = "#00FF00";
  accuracyEl.style.color = "#00FF00";
  accuracyOver.style.color = "#00FF00";
}

function finishGame() {
  playing = false;
  clearInterval(interval);
  board.innerHTML = "";
  goToNextScreen(screens.length - 2);
  hitsOver.innerHTML = hits;
  accuracyOver.innerHTML = accuracyEl.innerHTML;
}

function resetcountdown() {
  clearInterval(countdownInterval); // Stop the countdown interval
  time = initialTime; // Reset the time variable to its initial value
  startCountdown(); // Start the countdown again
}

function resetBoard() {
  board.innerHTML = "";
}

restartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Corrected 'restartbtn' to 'btn'
    screens.forEach((screen, index) => {
      if (index === 0) {
        screen.classList.add("active");
      } else {
        screen.classList.remove("active");
      }
    });
    clearInterval(interval);
    clearInterval(countdownInterval);
    activeIntervals.forEach(clearInterval);
    activeIntervals = [];
    time = 0;
    hits = 0;
    missed = 0;
    lives = 3;
    resetStats();
    resetcountdown();
    resetBoard();
    playing = false;
  });
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function refreshPage() {
  location.reload();
}