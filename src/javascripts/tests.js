let currentStage = 0;
let userAnswers = [];

function initTest(stages) {
  const question = document.querySelector(".A_QuestionTitle");
  const answerCards = document.querySelectorAll(".M_AnswerCard");
  const answerIcons = document.querySelectorAll(".Q_AnswerIcon");
  const answerTitles = document.querySelectorAll(".A_AnswerTitle");
  const answerDescriptions = document.querySelectorAll(".A_AnswerDescription");
  const progressSteps = document.querySelectorAll(".A_ProgressStep");

  if (!question || !answerCards.length) return;

  const currentData = stages[currentStage];

  question.innerText = currentData.question;

  answerCards.forEach((card, index) => {
    const answer = currentData.answers[index];

    card.dataset.index = index;
    card.classList.remove("is-selected");

    answerIcons[index].src = answer.icon;
    answerIcons[index].alt = answer.alt;
    answerTitles[index].innerText = answer.title;
    answerDescriptions[index].innerText = answer.description;

    if (userAnswers[currentStage] === index) {
      card.classList.add("is-selected");
    }
  });

  updateProgress(progressSteps);
}

function chooseAnswer(stages, config) {
  const answerCards = document.querySelectorAll(".M_AnswerCard");

  if (!answerCards.length) return;

  answerCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      answerCards.forEach((item) => {
        item.classList.remove("is-selected");
      });

      card.classList.add("is-selected");
      userAnswers[currentStage] = index;

      setTimeout(() => {
        updateStage(stages, config);
      }, 1200);
    });
  });
}

function updateStage(stages, config) {
  if (currentStage + 1 < stages.length) {
    currentStage++;
    initTest(stages);
  } else {
    showResult(stages, config);
  }
}

function goToStage(stages) {
  const progressSteps = document.querySelectorAll(".A_ProgressStep");

  if (!progressSteps.length) return;

  progressSteps.forEach((step, index) => {
    step.addEventListener("click", () => {
      currentStage = index;
      initTest(stages);
    });
  });
}

function updateProgress(progressSteps) {
  progressSteps.forEach((step, index) => {
    step.classList.remove("is-active", "is-completed");

    if (index < currentStage) {
      step.classList.add("is-completed");
    }

    if (index === currentStage) {
      step.classList.add("is-active");
    }
  });
}

function calculateResult(stages) {
  let resultCount = 0;

  userAnswers.forEach((answerIndex, stageIndex) => {
    if (answerIndex !== undefined) {
      resultCount += Number(stages[stageIndex].answers[answerIndex].count);
    }
  });

  return resultCount;
}

function showResult(stages, config) {
  const resultCount = calculateResult(stages);

  if (config.storageKey) {
    localStorage.setItem(config.storageKey, resultCount);
  }

  if (config.resultPage) {
    window.location.href = config.resultPage;
  }
}

export { initTest, chooseAnswer, goToStage };
