// console.log("RESULT PAGE JS LOADED");
// console.log("saved result =", localStorage.getItem("mushroomTestResult"));

// import result0 from "../images/tests/M_ProgressCircle_0.png";
// import result20 from "../images/tests/M_ProgressCircle_20.png";
// import result40 from "../images/tests/M_ProgressCircle_40.png";
// import result60 from "../images/tests/M_ProgressCircle_60.png";
// import result80 from "../images/tests/M_ProgressCircle_80.png";
// import result100 from "../images/tests/M_ProgressCircle_100.png";

// const results = {
//   0: {
//     percent: "0%",
//     header: "Стоит попробовать ещё раз",
//     paragraph: "Попробуй прочитать наши материалы и пройти тест заново.",
//     image: result0,
//   },
//   1: {
//     percent: "20%",
//     header: "Начало положено",
//     paragraph:
//       "У тебя уже есть первый правильный ответ, но пока легко ошибиться.",
//     image: result20,
//   },
//   2: {
//     percent: "40%",
//     header: "Уже лучше",
//     paragraph: "Ты знаешь часть грибов, но нужно ещё потренироваться.",
//     image: result40,
//   },
//   3: {
//     percent: "60%",
//     header: "Неплохой результат",
//     paragraph: "Ты уже различаешь некоторые грибы, но стоит быть внимательнее.",
//     image: result60,
//   },
//   4: {
//     percent: "80%",
//     header: "Очень хороший результат",
//     paragraph: "Ты хорошо разбираешься в грибах, осталась совсем чуть-чуть.",
//     image: result80,
//   },
//   5: {
//     percent: "100%",
//     header: "Шикарный результат",
//     paragraph: "Ты отлично разбираешься в грибах и знаешь правила леса.",
//     image: result100,
//   },
// };

// const resultCount = Number(localStorage.getItem("mushroomTestResult")) || 0;
// const resultData = results[resultCount];

// const resultImage = document.querySelector(".A_ResultDiagramImage");
// const resultPercent = document.querySelector(".A_ResultDiagramText");
// const resultHeader = document.querySelector(".A_ResultHeader");
// const resultParagraph = document.querySelector(".A_ResultParagraph");

// if (resultImage) {
//   resultImage.src = resultData.image;
//   resultImage.alt = `Диаграмма результата: ${resultData.percent}`;
// }

// if (resultPercent) {
//   resultPercent.innerText = resultData.percent;
// }

// if (resultHeader) {
//   resultHeader.innerText = resultData.header;
// }

// if (resultParagraph) {
//   resultParagraph.innerText = resultData.paragraph;
// }
