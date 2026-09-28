requireLogin();
setupNavbarAuth();

const questions = JSON.parse(
  sessionStorage.getItem("testlab_questions") || "[]",
);

const answers = JSON.parse(sessionStorage.getItem("testlab_answers") || "[]");

const container = document.getElementById("reviewContainer");

if (!questions.length) {
  window.location.href = "practice.html";
}

questions.forEach(function (question, index) {
  const selectedAnswer = answers[index];

  const card = document.createElement("div");

  card.className = "review-card";

  let statusHTML = "";

  if (selectedAnswer === null) {
    statusHTML = '<span class="status skipped">Skipped</span>';
  } else if (selectedAnswer === question.answer) {
    statusHTML = '<span class="status correct">Correct</span>';
  } else {
    statusHTML = '<span class="status wrong">Wrong</span>';
  }

  let optionsHTML = "";

  question.options.forEach(function (option, optionIndex) {
    let className = "review-option";

    let label = "";

    if (optionIndex === question.answer) {
      className += " correct-option";

      label = "Correct Answer";
    }

    if (optionIndex === selectedAnswer && optionIndex !== question.answer) {
      className += " wrong-option";

      label = "Your Answer";
    }

    if (optionIndex === selectedAnswer) {
      className += " selected-review";
    }

    const letter = String.fromCharCode(65 + optionIndex);

    optionsHTML +=
      '<div class="' +
      className +
      '">' +
      '<span class="option-letter">' +
      letter +
      "</span>" +
      "<span>" +
      option +
      "</span>" +
      "<small>" +
      label +
      "</small>" +
      "</div>";
  });

  card.innerHTML =
    '<div class="review-question-top">' +
    "<span>" +
    "Question " +
    (index + 1) +
    "</span>" +
    statusHTML +
    "</div>" +
    "<h2>" +
    question.question +
    "</h2>" +
    '<div class="review-options">' +
    optionsHTML +
    "</div>" +
    '<div class="explanation">' +
    "<strong>Explanation:</strong> " +
    question.explanation +
    "</div>";

  container.appendChild(card);
});
