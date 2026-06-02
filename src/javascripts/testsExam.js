// let currentStage = 0;
// let isAnswered = false;
// let userAnswers = [];

// function initExamTest(stages) {
//   const question = document.querySelector(".A_Question");
//   const answerCards = document.querySelectorAll(".M_Test-ExamQuestion");
//   const answerIcons = document.querySelectorAll(".A_Test-ExamQuestionIcon");
//   const answerTitles = document.querySelectorAll(".A_Test-ExamAnswerTitle");
//   const answerDescriptions = document.querySelectorAll(
//     ".A_Test-ExamAnswerDescription",
//   );
//   const progressSteps = document.querySelectorAll(".A_ProgressStep");

//   if (
//     !question ||
//     !answerCards.length ||
//     !answerIcons.length ||
//     !answerTitles.length ||
//     !answerDescriptions.length
//   ) {
//     return;
//   }

//   const currentData = stages[currentStage];

//   question.innerText = currentData.question;

//   for (let i = 0; i < answerCards.length; i++) {
//     answerIcons[i].src = currentData.answers[i].icon;
//     answerIcons[i].alt = currentData.answers[i].alt;

//     answerTitles[i].innerText = currentData.answers[i].title;
//     answerDescriptions[i].innerText = currentData.answers[i].description;

//     answerCards[i].classList.remove("is-selected");
//   }

//   if (userAnswers[currentStage] !== undefined) {
//     answerCards[userAnswers[currentStage]].classList.add("is-selected");
//     isAnswered = true;
//   } else {
//     isAnswered = false;
//   }

//   updateProgress(progressSteps);
// }

// function chooseExamAnswer(stages, config) {
//   const answerCards = document.querySelectorAll(".M_Test-ExamQuestion");

//   if (!answerCards.length) return;

//   answerCards.forEach((card, index) => {
//     card.addEventListener("click", () => {
//       if (isAnswered) return;

//       isAnswered = true;
//       userAnswers[currentStage] = index;

//       card.classList.add("is-selected");

//       setTimeout(() => {
//         updateExamStage(stages, config);
//       }, 1000);
//     });
//   });
// }

// function updateExamStage(stages, config) {
//   if (currentStage + 1 < stages.length) {
//     currentStage++;
//     initExamTest(stages);
//   } else {
//     showExamResult(stages, config);
//   }
// }

// function updateProgress(progressSteps) {
//   progressSteps.forEach((step, index) => {
//     step.classList.remove("is-active", "is-completed");

//     if (index < currentStage) {
//       step.classList.add("is-completed");
//     } else if (index === currentStage) {
//       step.classList.add("is-active");
//     }
//   });
// }

// function goToExamStage(stages) {
//   const progressSteps = document.querySelectorAll(".A_ProgressStep");

//   if (!progressSteps.length) return;

//   progressSteps.forEach((step, index) => {
//     step.addEventListener("click", () => {
//       currentStage = index;
//       initExamTest(stages);
//     });
//   });
// }

// function calculateExamResult(stages) {
//   let resultCount = 0;

//   for (let i = 0; i < userAnswers.length; i++) {
//     const selectedAnswerIndex = userAnswers[i];

//     if (selectedAnswerIndex !== undefined) {
//       resultCount += Number(stages[i].answers[selectedAnswerIndex].count);
//     }
//   }

//   return resultCount;
// }

// function showExamResult(stages, config) {
//   const resultCount = calculateExamResult(stages);

//   if (config?.storageKey) {
//     localStorage.setItem(config.storageKey, resultCount);
//   }

//   if (config?.resultPage) {
//     window.location.href = config.resultPage;
//   }
// }

// export { initExamTest, chooseExamAnswer, goToExamStage };
