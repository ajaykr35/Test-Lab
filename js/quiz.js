document.addEventListener("DOMContentLoaded", function () {
  if (typeof requireLogin === "function") {
    if (!requireLogin()) {
      return;
    }
  }

  if (typeof setupNavbarAuth === "function") {
    setupNavbarAuth();
  }

  const config = JSON.parse(sessionStorage.getItem("testlab_config") || "null");

  if (!config) {
    window.location.href = "practice.html";

    return;
  }

  if (typeof questionBank === "undefined" || !Array.isArray(questionBank)) {
    document.getElementById("questionText").textContent =
      "Question bank could not be loaded.";

    return;
  }

  let questions = [];

  let currentIndex = 0;

  let selectedAnswers = [];

  let timerInterval = null;

  let secondsLeft = 0;

  let startedAt = Date.now();

  let testFinished = false;

  const categoryTitle = document.getElementById("categoryTitle");

  const progressText = document.getElementById("progressText");

  const questionNumber = document.getElementById("questionNumber");

  const answeredText = document.getElementById("answeredText");

  const questionProgress = document.getElementById("questionProgress");

  const answeredProgress = document.getElementById("answeredProgress");

  const timer = document.getElementById("timer");

  const questionCategory = document.getElementById("questionCategory");

  const questionText = document.getElementById("questionText");

  const optionsContainer = document.getElementById("optionsContainer");

  const nextBtn = document.getElementById("nextBtn");

  const submitBtn = document.getElementById("submitBtn");

  function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      const temp = copy[i];

      copy[i] = copy[randomIndex];

      copy[randomIndex] = temp;
    }

    return copy;
  }

  function getQuestions() {
    if (config.category === "Mixed Test") {
      const categories = [
        "Aptitude",
        "Reasoning",
        "Verbal Ability",
        "CS Fundamentals",
      ];

      let mixedQuestions = [];

      categories.forEach(function (category) {
        let categoryQuestions = questionBank.filter(function (question) {
          return question.category === category;
        });

        if (config.difficulty !== "Mixed") {
          const filtered = categoryQuestions.filter(function (question) {
            return question.difficulty === config.difficulty;
          });

          if (filtered.length >= 5) {
            categoryQuestions = filtered;
          }
        }

        mixedQuestions.push(...shuffle(categoryQuestions).slice(0, 5));
      });

      return shuffle(mixedQuestions).slice(0, 20);
    }

    let categoryQuestions = questionBank.filter(function (question) {
      return question.category === config.category;
    });

    if (config.difficulty !== "Mixed") {
      const filtered = categoryQuestions.filter(function (question) {
        return question.difficulty === config.difficulty;
      });

      if (filtered.length >= 20) {
        categoryQuestions = filtered;
      }
    }

    return shuffle(categoryQuestions).slice(0, 20);
  }

  function getAnsweredCount() {
    return selectedAnswers.filter(function (answer) {
      return answer !== null;
    }).length;
  }

  function updateProgress() {
    const questionPercent = ((currentIndex + 1) / questions.length) * 70;

    questionProgress.style.width = questionPercent + "%";

    const answeredCount = getAnsweredCount();

    const answeredPercent = (answeredCount / questions.length) * 30;

    answeredProgress.style.width = answeredPercent + "%";

    answeredText.textContent = answeredCount + " answered";
  }

  function updateTimer() {
    timer.textContent = Math.max(0, Math.ceil(secondsLeft));

    timer.classList.toggle("timer-warning", secondsLeft <= 10);
  }

  function startTimer() {
    clearInterval(timerInterval);

    secondsLeft = Number(config.secondsPerQuestion);

    updateTimer();

    timerInterval = setInterval(function () {
      secondsLeft--;

      updateTimer();

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);

        moveToNextQuestion();
      }
    }, 1000);
  }

  function renderQuestion() {
    clearInterval(timerInterval);

    if (!questions.length) {
      questionText.textContent = "No questions available.";

      return;
    }

    const question = questions[currentIndex];

    questionNumber.textContent =
      "Question " + (currentIndex + 1) + " of " + questions.length;

    questionCategory.textContent = question.category;

    questionText.textContent = question.question;

    updateProgress();

    optionsContainer.innerHTML = "";

    question.options.forEach(function (option, index) {
      const optionButton = document.createElement("button");

      optionButton.type = "button";

      optionButton.className = "option";

      if (selectedAnswers[currentIndex] === index) {
        optionButton.classList.add("selected");
      }

      const letter = String.fromCharCode(65 + index);

      const letterSpan = document.createElement("span");

      letterSpan.className = "option-letter";

      letterSpan.textContent = letter;

      const textSpan = document.createElement("span");

      textSpan.textContent = option;

      optionButton.appendChild(letterSpan);

      optionButton.appendChild(textSpan);

      optionButton.addEventListener("click", function () {
        selectAnswer(index);
      });

      optionsContainer.appendChild(optionButton);
    });

    if (currentIndex === questions.length - 1) {
      nextBtn.textContent = "Finish Test";
    } else {
      nextBtn.textContent = "Next →";
    }

    startTimer();
  }

  function selectAnswer(index) {
    selectedAnswers[currentIndex] = index;

    const options = document.querySelectorAll(".option");

    options.forEach(function (option, optionIndex) {
      option.classList.toggle("selected", optionIndex === index);
    });

    updateProgress();
  }

  function moveToNextQuestion() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;

      renderQuestion();
    } else {
      finishTest();
    }
  }

  function finishTest() {
    if (testFinished) {
      return;
    }

    testFinished = true;

    clearInterval(timerInterval);

    let correct = 0;

    let wrong = 0;

    let skipped = 0;

    questions.forEach(function (question, index) {
      const selected = selectedAnswers[index];

      if (selected === null) {
        skipped++;
      } else if (selected === question.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    const timeTaken = Math.round((Date.now() - startedAt) / 1000);

    const accuracy = Math.round((correct / questions.length) * 100);

    const result = {
      category: config.category,

      difficulty: config.difficulty,

      score: correct,

      total: questions.length,

      correct: correct,

      wrong: wrong,

      skipped: skipped,

      accuracy: accuracy,

      totalMinutes: config.totalMinutes,

      timeTaken: timeTaken,

      date: new Date().toISOString(),
    };

    sessionStorage.setItem("testlab_result", JSON.stringify(result));

    sessionStorage.setItem("testlab_answers", JSON.stringify(selectedAnswers));

    sessionStorage.setItem("testlab_questions", JSON.stringify(questions));

    const user = typeof getCurrentUser === "function" ? getCurrentUser() : null;

    if (user) {
      const historyKey = "testlab_history_" + user.email;

      const history = JSON.parse(localStorage.getItem(historyKey) || "[]");

      history.unshift(result);

      localStorage.setItem(historyKey, JSON.stringify(history));
    }

    window.location.href = "result.html";
  }

  nextBtn.addEventListener("click", function () {
    moveToNextQuestion();
  });

  submitBtn.addEventListener("click", function () {
    const confirmed = confirm("Are you sure you want to submit the test?");

    if (confirmed) {
      finishTest();
    }
  });

  window.addEventListener("beforeunload", function (event) {
    if (!testFinished) {
      event.preventDefault();

      event.returnValue = "";
    }
  });

  questions = getQuestions();

  if (questions.length < 20) {
    questions = shuffle(questionBank).slice(0, 20);
  }

  selectedAnswers = new Array(questions.length).fill(null);

  categoryTitle.textContent = config.category;

  progressText.textContent = config.totalMinutes + " min test";

  renderQuestion();
});
