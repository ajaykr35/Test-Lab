requireLogin();
setupNavbarAuth();

const result = JSON.parse(sessionStorage.getItem("testlab_result") || "null");

if (!result) {
  window.location.href = "practice.html";
}

const resultCategory = document.getElementById("resultCategory");

const score = document.getElementById("score");

const correct = document.getElementById("correct");

const wrong = document.getElementById("wrong");

const skipped = document.getElementById("skipped");

const accuracy = document.getElementById("accuracy");

const totalTimeResult = document.getElementById("totalTimeResult");

const timeUsed = document.getElementById("timeUsed");

resultCategory.textContent =
  result.category + " · " + result.difficulty + " Difficulty";

score.textContent = result.score;

correct.textContent = result.correct;

wrong.textContent = result.wrong;

skipped.textContent = result.skipped;

accuracy.textContent = result.accuracy + "%";

totalTimeResult.textContent = result.totalMinutes + " min";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = seconds % 60;

  return minutes + "m " + remainingSeconds + "s";
}

timeUsed.textContent = formatTime(result.timeTaken);
