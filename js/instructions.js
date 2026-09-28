requireLogin();
setupNavbarAuth();

const config = JSON.parse(sessionStorage.getItem("testlab_config") || "null");

const testSummary = document.getElementById("testSummary");
const timeDisplay = document.getElementById("timeDisplay");
const questionTime = document.getElementById("questionTime");
const startBtn = document.getElementById("startBtn");

if (!config) {
  window.location.href = "practice.html";
} else {
  testSummary.innerHTML =
    "<strong>" +
    config.category +
    "</strong> · " +
    config.difficulty +
    " Difficulty";

  timeDisplay.textContent = config.totalMinutes + " min";

  questionTime.textContent = formatTime(config.secondsPerQuestion);
}

function formatTime(seconds) {
  seconds = Number(seconds);

  if (seconds < 60) {
    return Math.round(seconds) + " sec";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);

  if (remainingSeconds === 0) {
    return minutes + " min";
  }

  return minutes + " min " + remainingSeconds + " sec";
}

startBtn.addEventListener("click", function () {
  sessionStorage.removeItem("testlab_result");
  sessionStorage.removeItem("testlab_answers");
  sessionStorage.removeItem("testlab_questions");

  window.location.href = "quiz.html";
});
