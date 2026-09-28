requireLogin();
setupNavbarAuth();

const user = getCurrentUser();

const testsCount = document.getElementById("testsCount");

const bestScore = document.getElementById("bestScore");

const avgAccuracy = document.getElementById("avgAccuracy");

const questionsSolved = document.getElementById("questionsSolved");

const historyBody = document.getElementById("historyBody");

const emptyHistory = document.getElementById("emptyHistory");

const historyTableContainer = document.getElementById("historyTableContainer");

const historyKey = "testlab_history_" + user.email;

const history = JSON.parse(localStorage.getItem(historyKey) || "[]");

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = seconds % 60;

  if (minutes === 0) {
    return remainingSeconds + "s";
  }

  return minutes + "m " + remainingSeconds + "s";
}

function loadStats() {
  const totalTests = history.length;

  testsCount.textContent = totalTests;

  if (totalTests === 0) {
    bestScore.textContent = "0/20";

    avgAccuracy.textContent = "0%";

    questionsSolved.textContent = "0";

    return;
  }

  let highestScore = 0;
  let totalAccuracy = 0;
  let totalQuestions = 0;

  history.forEach(function (test) {
    if (test.score > highestScore) {
      highestScore = test.score;
    }

    totalAccuracy += Number(test.accuracy);

    totalQuestions += Number(test.total);
  });

  const averageAccuracy = Math.round(totalAccuracy / totalTests);

  bestScore.textContent = highestScore + "/20";

  avgAccuracy.textContent = averageAccuracy + "%";

  questionsSolved.textContent = totalQuestions;
}

function loadHistory() {
  if (history.length === 0) {
    emptyHistory.style.display = "block";

    historyTableContainer.style.display = "none";

    return;
  }

  emptyHistory.style.display = "none";

  historyTableContainer.style.display = "block";

  historyBody.innerHTML = "";

  history.forEach(function (test) {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");

    dateCell.textContent = formatDate(test.date);

    const categoryCell = document.createElement("td");

    categoryCell.textContent = test.category;

    const difficultyCell = document.createElement("td");

    difficultyCell.textContent = test.difficulty;

    const scoreCell = document.createElement("td");

    scoreCell.textContent = test.score + "/" + test.total;

    const accuracyCell = document.createElement("td");

    accuracyCell.textContent = test.accuracy + "%";

    const timeCell = document.createElement("td");

    timeCell.textContent = formatTime(test.timeTaken);

    row.appendChild(dateCell);
    row.appendChild(categoryCell);
    row.appendChild(difficultyCell);
    row.appendChild(scoreCell);
    row.appendChild(accuracyCell);
    row.appendChild(timeCell);

    historyBody.appendChild(row);
  });
}

loadStats();
loadHistory();
