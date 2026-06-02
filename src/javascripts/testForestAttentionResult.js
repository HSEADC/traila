// console.log("FOREST ATTENTION RESULT PAGE LOADED");
// console.log(
//   "saved result =",
//   localStorage.getItem("forestAttentionTestResult"),
// );

// import result0 from "../images/tests/M_ProgressCircle_0.png";
// import result20 from "../images/tests/M_ProgressCircle_20.png";
// import result40 from "../images/tests/M_ProgressCircle_40.png";
// import result60 from "../images/tests/M_ProgressCircle_60.png";
// import result80 from "../images/tests/M_ProgressCircle_80.png";
// import result100 from "../images/tests/M_ProgressCircle_100.png";

// const results = {
//   0: {
//     percent: "0%",
//     header: "Стоит быть внимательнее",
//     paragraph:
//       "Пока ты часто выбираешь рискованные действия. Перед походом в лес полезно повторить базовые правила безопасности.",
//     image: result0,
//   },
//   1: {
//     percent: "20%",
//     header: "Начало есть",
//     paragraph:
//       "Ты уже знаешь отдельные полезные правила, но в важных ситуациях пока легко ошибиться.",
//     image: result20,
//   },
//   2: {
//     percent: "40%",
//     header: "Есть понимание",
//     paragraph:
//       "Ты начинаешь ориентироваться в безопасном поведении в лесу, но часть решений пока остаётся неточной.",
//     image: result40,
//   },
//   3: {
//     percent: "60%",
//     header: "Неплохой результат",
//     paragraph:
//       "Ты уже понимаешь, как действовать в лесу, но некоторые ситуации стоит разобрать ещё раз.",
//     image: result60,
//   },
//   4: {
//     percent: "80%",
//     header: "Очень хороший результат",
//     paragraph:
//       "Ты хорошо ориентируешься в правилах поведения в лесу и обычно выбираешь безопасные решения.",
//     image: result80,
//   },
//   5: {
//     percent: "100%",
//     header: "Отличный результат",
//     paragraph:
//       "Ты отлично разбираешься в лесной безопасности и внимателен к важным признакам на маршруте.",
//     image: result100,
//   },
// };

// const resultCount =
//   Number(localStorage.getItem("forestAttentionTestResult")) || 0;

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
