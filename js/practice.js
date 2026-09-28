requireLogin();
setupNavbarAuth();

const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const totalTime = document.getElementById("totalTime");

const previewTotal = document.getElementById("previewTotal");
const previewPer = document.getElementById("previewPer");

const exampleTotal = document.getElementById("exampleTotal");
const examplePer = document.getElementById("examplePer");

const continueBtn = document.getElementById("continueBtn");

function calculateTime() {
  const minutes = Number(totalTime.value);
  const seconds = (minutes * 60) / 20;

  previewTotal.textContent = minutes + " min";
  previewPer.textContent = formatTime(seconds);

  exampleTotal.textContent = minutes + " min";
  examplePer.textContent = formatTime(seconds);
}

function formatTime(seconds) {
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

totalTime.addEventListener("change", calculateTime);

continueBtn.addEventListener("click", function () {
  const config = {
    category: category.value,
    difficulty: difficulty.value,
    questions: 20,
    totalMinutes: Number(totalTime.value),
    secondsPerQuestion: (Number(totalTime.value) * 60) / 20,
  };

  sessionStorage.setItem("testlab_config", JSON.stringify(config));

  window.location.href = "instructions.html";
});

calculateTime();
