// console.log("FOREST RESULT PAGE LOADED");
// console.log("saved result =", localStorage.getItem("forestExamTestResult"));

// import result0 from "../images/tests/M_ProgressCircle_0.png";
// import result20 from "../images/tests/M_ProgressCircle_20.png";
// import result40 from "../images/tests/M_ProgressCircle_40.png";
// import result60 from "../images/tests/M_ProgressCircle_60.png";
// import result80 from "../images/tests/M_ProgressCircle_80.png";
// import result100 from "../images/tests/M_ProgressCircle_100.png";

// const results = {
//   0: {
//     percent: "0%",
//     header: "Опасный уровень",
//     paragraph:
//       "Пока ты принимаешь решения, которые могут привести к ещё большей потере ориентации. Лучше изучить базовые правила поведения в лесу.",
//     image: result0,
//   },
//   1: {
//     percent: "20%",
//     header: "Слабый результат",
//     paragraph:
//       "Ты иногда выбираешь правильные действия, но пока легко ошибиться в стрессовой ситуации.",
//     image: result20,
//   },
//   2: {
//     percent: "40%",
//     header: "Есть понимание",
//     paragraph:
//       "Ты уже начинаешь ориентироваться в ситуации, но не всегда выбираешь безопасные решения.",
//     image: result40,
//   },
//   3: {
//     percent: "60%",
//     header: "Неплохой результат",
//     paragraph:
//       "Ты в целом понимаешь, как действовать в лесу, но стоит закрепить навыки.",
//     image: result60,
//   },
//   4: {
//     percent: "80%",
//     header: "Очень хороший результат",
//     paragraph:
//       "Ты уверенно ориентируешься в лесу и принимаешь правильные решения в большинстве ситуаций.",
//     image: result80,
//   },
//   5: {
//     percent: "100%",
//     header: "Шикарный результат",
//     paragraph:
//       "Ты отлично знаешь, как действовать в лесу. С таким уровнем ты точно не растеряешься.",
//     image: result100,
//   },
// };

// const resultCount = Number(localStorage.getItem("forestExamTestResult")) || 0;

// const resultData = results[resultCount];

// const resultImage = document.querySelector(".A_ResultDiagramImage");
// const resultPercent = document.querySelector(".A_ResultDiagramText");
// const resultHeader = document.querySelector(".A_ResultHeader");
// const resultParagraph = document.querySelector(".A_ResultParagraph");

// if (resultImage && resultData) {
//   resultImage.src = resultData.image;
//   resultImage.alt = `Диаграмма результата: ${resultData.percent}`;
// }

// if (resultPercent && resultData) {
//   resultPercent.innerText = resultData.percent;
// }

// if (resultHeader && resultData) {
//   resultHeader.innerText = resultData.header;
// }

// if (resultParagraph && resultData) {
//   resultParagraph.innerText = resultData.paragraph;
// }
