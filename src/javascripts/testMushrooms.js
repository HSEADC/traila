// console.clear();
// import { initTest, chooseAnswer, goToStage } from "./tests.js";

// // ВОПРОС 1
// import q1Left from "../images/tests/A_q1Left.png";
// import q1Right from "../images/tests/A_q1Right.png";
// import q1IconLeft from "../images/icons/Q_Icon_WhiteMushroomVar.svg";
// import q1IconRight from "../images/icons/Q_Icon_WhiteMushroom.svg";

// // ВОПРОС 2
// import q2Left from "../images/tests/A_q2Left.png";
// import q2Right from "../images/tests/A_q2Right.png";
// import q2IconLeft from "../images/icons/Q_Icon_Chanterelle.svg";
// import q2IconRight from "../images/icons/Q_Icon_ChampignonVar.svg";

// // ВОПРОС 3
// import q3Left from "../images/tests/A_q3Left.png";
// import q3Right from "../images/tests/A_q3Right.png";
// import q3IconLeft from "../images/icons/Q_Icon_HoneyFungus.svg";
// import q3IconRight from "../images/icons/Q_Icon_HoneyFungusVar.svg";

// // ВОПРОС 4
// import q4Left from "../images/tests/A_q4Left.png";
// import q4Right from "../images/tests/A_q4Right.png";
// import q4IconLeft from "../images/icons/Q_Icon_Champignon.svg";
// import q4IconRight from "../images/icons/Q_Icon_ChampignonVar.svg";

// // ВОПРОС 5
// import q5Left from "../images/tests/A_q5Left.png";
// import q5Right from "../images/tests/A_q5Right.png";
// import q5IconLeft from "../images/icons/Q_Icon_Birch_BoletusVar.svg";
// import q5IconRight from "../images/icons/Q_Icon_Birch_Boletus.svg";

// const stages = [
//   {
//     question: "Найди съедобный белый гриб среди двух",
//     answers: [
//       {
//         image: q1Right,
//         alt: "Белый гриб, вариант 1",
//         icon: q1IconLeft,
//         count: 1,
//       },
//       {
//         image: q1Left,
//         alt: "Белый гриб, вариант 2",
//         icon: q1IconRight,
//         count: 0,
//       },
//     ],
//   },
//   {
//     question: "Найди настоящую съедобную лисичку",
//     answers: [
//       {
//         image: q2Left,
//         alt: "Лисичка, вариант 1",
//         icon: q2IconLeft,
//         count: 0,
//       },
//       {
//         image: q2Right,
//         alt: "Лисичка, вариант 2",
//         icon: q2IconRight,
//         count: 1,
//       },
//     ],
//   },
//   {
//     question: "Найди настоящий съедобный опёнок",
//     answers: [
//       {
//         image: q3Left,
//         alt: "Опёнок, вариант 1",
//         icon: q3IconLeft,
//         count: 0,
//       },
//       {
//         image: q3Right,
//         alt: "Опёнок, вариант 2",
//         icon: q3IconRight,
//         count: 1,
//       },
//     ],
//   },
//   {
//     question: "Найди съедобный шампиньон среди грибов",
//     answers: [
//       {
//         image: q4Left,
//         alt: "Шампиньон, вариант 1",
//         icon: q4IconLeft,
//         count: 1,
//       },
//       {
//         image: q4Right,
//         alt: "Шампиньон, вариант 2",
//         icon: q4IconRight,
//         count: 0,
//       },
//     ],
//   },
//   {
//     question: "Найди настоящий съедобный подберёзовик",
//     answers: [
//       {
//         image: q5Left,
//         alt: "Подберёзовик, вариант 1",
//         icon: q5IconLeft,
//         count: 0,
//       },
//       {
//         image: q5Right,
//         alt: "Подберёзовик, вариант 2",
//         icon: q5IconRight,
//         count: 1,
//       },
//     ],
//   },
// ];

// const config = {
//   storageKey: "mushroomTestResult",
//   resultPage: "/STRATA/pages/interactive/results_test_mushrooms.html",
// };

// const questionElement = document.querySelector(".A_Question");

// if (questionElement) {
//   initTest(stages);
//   chooseAnswer(stages, config);
//   goToStage(stages);
// }
