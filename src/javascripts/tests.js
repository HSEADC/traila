// let currentStage = 0;
// let isAnswered = false;
// let userAnswers = [];

// function initTest(stages) {
//   const question = document.querySelector(".A_Question");
//   const answerCards = document.querySelectorAll(".M_AnswerCard");
//   const answerImages = document.querySelectorAll(".A_AnswerImage");
//   const answerIcons = document.querySelectorAll(
//     ".M_TagIcon-Test .A_TagIcon-Image",
//   );
//   const progressSteps = document.querySelectorAll(".A_ProgressStep");

//   if (
//     !question ||
//     !answerCards.length ||
//     !answerImages.length ||
//     !answerIcons.length
//   ) {
//     return;
//   }

//   const currentData = stages[currentStage];

//   question.innerText = currentData.question;

//   for (let i = 0; i < answerCards.length; i++) {
//     answerImages[i].src = currentData.answers[i].image;
//     answerImages[i].alt = currentData.answers[i].alt;

//     answerIcons[i].src = currentData.answers[i].icon;
//     answerIcons[i].alt = currentData.answers[i].alt;

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

// function chooseAnswer(stages, config) {
//   const answerCards = document.querySelectorAll(".M_AnswerCard");

//   if (!answerCards.length) return;

//   answerCards.forEach((card, index) => {
//     card.addEventListener("click", () => {
//       if (isAnswered) return;

//       isAnswered = true;
//       userAnswers[currentStage] = index;

//       card.classList.add("is-selected");

//       setTimeout(() => {
//         updateStage(stages, config);
//       }, 1000);
//     });
//   });
// }

// function updateStage(stages, config) {
//   if (currentStage + 1 < stages.length) {
//     currentStage++;
//     initTest(stages);
//   } else {
//     showResult(stages, config);
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

// function goToStage(stages) {
//   const progressSteps = document.querySelectorAll(".A_ProgressStep");

//   if (!progressSteps.length) return;

//   progressSteps.forEach((step, index) => {
//     step.addEventListener("click", () => {
//       currentStage = index;
//       initTest(stages);
//     });
//   });
// }

// function calculateResult(stages) {
//   let resultCount = 0;

//   for (let i = 0; i < userAnswers.length; i++) {
//     const selectedAnswerIndex = userAnswers[i];

//     if (selectedAnswerIndex !== undefined) {
//       resultCount += Number(stages[i].answers[selectedAnswerIndex].count);
//     }
//   }

//   return resultCount;
// }

// function showResult(stages, config) {
//   const resultCount = calculateResult(stages);

//   if (config?.storageKey) {
//     localStorage.setItem(config.storageKey, resultCount);
//   }

//   if (config?.resultPage) {
//     window.location.href = config.resultPage;
//   }
// }

// export { initTest, chooseAnswer, goToStage };
