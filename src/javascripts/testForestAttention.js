// console.clear();
// import { initExamTest, chooseExamAnswer, goToExamStage } from "./testsExam.js";

// import iconBerry from "../images/icons/Q_Icon_Berry.svg";
// import iconBerries from "../images/icons/Q_Icon_Berries.svg";
// import iconBerryVar from "../images/icons/Q_Icon_BerryVar.svg";
// import iconCamera from "../images/icons/Q_Icon_Camera.svg";

// import iconTree from "../images/icons/Q_Icon_Tree.svg";
// import iconTreeVar from "../images/icons/Q_Icon_TreeVar.svg";
// import iconForest from "../images/icons/Q_Icon_Forest.svg";
// import iconBranch from "../images/icons/Q_Icon_Branch.svg";

// import iconWhiteMushroomVar from "../images/icons/Q_Icon_WhiteMushroomVar.svg";
// import iconSheets from "../images/icons/Q_Icon_Sheets.svg";
// import iconDampness from "../images/icons/Q_Icon_Dampness.svg";
// import iconDirectionVar from "../images/icons/Q_Icon_DirectionVar.svg";

// import iconGrass from "../images/icons/Q_Icon_Grass.svg";
// import iconRunningMan from "../images/icons/Q_Icon_RunningMan.svg";
// import iconSunrise from "../images/icons/Q_Icon_Sunrise.svg";

// import iconHoneyFungusVar from "../images/icons/Q_Icon_HoneyFungusVar.svg";
// import iconKnife from "../images/icons/Q_Icon_Knife.svg";
// import iconBoletus from "../images/icons/Q_Icon_Birch_Boletus.svg";
// import iconBoletusVar from "../images/icons/Q_Icon_Birch_BoletusVar.svg";

// const stages = [
//   {
//     question: "Ты увидел в лесу незнакомые яркие ягоды. Что сделать?",
//     answers: [
//       {
//         icon: iconBerry,
//         alt: "Иконка ягоды",
//         title: "Попробовать одну ягоду",
//         description:
//           "Иногда кажется, что небольшой кусочек поможет понять вкус ягоды. Такой способ иногда упоминают в разговорах о лесных находках.",
//         count: 0,
//       },
//       {
//         icon: iconBerries,
//         alt: "Иконка ягод",
//         title: "Сорвать несколько домой",
//         description:
//           "Иногда ягоды берут с собой, чтобы позже рассмотреть их внимательнее. Так делают, когда хотят узнать название растения.",
//         count: 0,
//       },
//       {
//         icon: iconBerryVar,
//         alt: "Иконка ягоды",
//         title: "Не трогать ягоды",
//         description:
//           "В лесу встречается много ягод разных видов. Некоторые из них могут быть похожи друг на друга.",
//         count: 1,
//       },
//       {
//         icon: iconCamera,
//         alt: "Иконка фотоаппарата",
//         title: "Сфотографировать и попробовать позже",
//         description:
//           "Сфотографировать растение полезно, но пробовать незнакомые ягоды всё равно нельзя.",
//         count: 0,
//       },
//     ],
//   },

//   {
//     question: "На тропе лежит большое поваленное дерево. Как лучше пройти?",
//     answers: [
//       {
//         icon: iconTree,
//         alt: "Иконка дерева",
//         title: "Обойти дерево по тропе",
//         description:
//           "Иногда поваленные деревья появляются прямо на маршруте. Путешественники стараются продолжать движение по тропе.",
//         count: 1,
//       },
//       {
//         icon: iconTreeVar,
//         alt: "Иконка дерева",
//         title: "Перелезть прямо через ствол",
//         description:
//           "Иногда люди просто перелезают через препятствие на тропе. Так можно быстро продолжить путь дальше.",
//         count: 0,
//       },
//       {
//         icon: iconForest,
//         alt: "Иконка леса",
//         title: "Свернуть в лес и искать новую тропу",
//         description:
//           "Иногда кажется, что рядом может быть другой удобный путь. В лесу нередко встречаются разные направления движения.",
//         count: 0,
//       },
//       {
//         icon: iconBranch,
//         alt: "Иконка ветки",
//         title: "Пройти под ветками",
//         description:
//           "Иногда ветви поваленного дерева лежат достаточно низко. Люди пытаются пройти под ними, не сходя с места.",
//         count: 0,
//       },
//     ],
//   },

//   {
//     question: "Ты заметил муравейник рядом с тропой. Что это может подсказать?",
//     answers: [
//       {
//         icon: iconWhiteMushroomVar,
//         alt: "Иконка белого гриба",
//         title: "Где растут грибы",
//         description:
//           "Иногда люди обращают внимание на разные признаки леса. Некоторые пытаются связать их с местами роста грибов.",
//         count: 0,
//       },
//       {
//         icon: iconSheets,
//         alt: "Иконка листьев",
//         title: "Где проходит старая тропа",
//         description:
//           "Иногда муравейники встречаются рядом с дорожками или тропами. Их можно заметить вдоль лесных маршрутов.",
//         count: 0,
//       },
//       {
//         icon: iconDampness,
//         alt: "Иконка капли воды",
//         title: "Где больше влаги",
//         description:
//           "Некоторые животные выбирают места с подходящими условиями среды. Это может зависеть от почвы, света и влажности.",
//         count: 0,
//       },
//       {
//         icon: iconDirectionVar,
//         alt: "Иконка направления",
//         title: "Где южная сторона",
//         description:
//           "Муравейники нередко строятся с более тёплой и освещённой стороны, поэтому иногда их используют как подсказку для определения юга.",
//         count: 1,
//       },
//     ],
//   },

//   {
//     question: "Начало темнеть, а до выхода из леса далеко. Что лучше сделать?",
//     answers: [
//       {
//         icon: iconGrass,
//         alt: "Иконка травы",
//         title: "Вернуться по знакомой тропе",
//         description:
//           "Иногда удобнее использовать уже знакомый маршрут. По знакомым местам легче ориентироваться.",
//         count: 1,
//       },
//       {
//         icon: iconRunningMan,
//         alt: "Иконка бегущего человека",
//         title: "Продолжать идти быстрее",
//         description:
//           "Иногда люди ускоряют шаг, когда начинает темнеть. Так кажется, что можно быстрее выйти из леса.",
//         count: 0,
//       },
//       {
//         icon: iconForest,
//         alt: "Иконка леса",
//         title: "Искать короткий путь через лес",
//         description:
//           "Иногда кажется, что рядом может быть более короткая дорога. Люди пробуют идти напрямую через лес.",
//         count: 0,
//       },
//       {
//         icon: iconSunrise,
//         alt: "Иконка восходящего солнца",
//         title: "Ждать пока станет светлее",
//         description:
//           "Иногда люди делают паузу и остаются на месте. Такой вариант тоже иногда рассматривают в лесу.",
//         count: 0,
//       },
//     ],
//   },

//   {
//     question: "Ты нашёл красивую поляну с грибами. Что важно сделать?",
//     answers: [
//       {
//         icon: iconHoneyFungusVar,
//         alt: "Иконка грибов",
//         title: "Собрать все грибы",
//         description:
//           "Иногда кажется, что лучше собрать всё сразу. Так люди стараются не упустить находку.",
//         count: 0,
//       },
//       {
//         icon: iconKnife,
//         alt: "Иконка ножа",
//         title: "Аккуратно срезать грибы",
//         description:
//           "Грибы часто собирают ножом или аккуратно рукой. Так стараются сохранить место, где они растут.",
//         count: 1,
//       },
//       {
//         icon: iconBoletus,
//         alt: "Иконка трех грибов",
//         title: "Сломать старые грибы",
//         description:
//           "Некоторые считают, что старые грибы лучше убрать. Иногда их просто ломают на месте.",
//         count: 0,
//       },
//       {
//         icon: iconBoletusVar,
//         alt: "Иконка гриба",
//         title: "Вырывать грибы с корнем",
//         description:
//           "Иногда грибы просто вытягивают из земли. Такой способ тоже встречается у грибников.",
//         count: 0,
//       },
//     ],
//   },
// ];

// const config = {
//   storageKey: "forestAttentionTestResult",
//   resultPage: "/STRATA/pages/interactive/results_test_exam_attention.html",
// };

// const questionElement = document.querySelector(".A_Question");

// if (questionElement) {
//   initExamTest(stages);
//   chooseExamAnswer(stages, config);
//   goToExamStage(stages);
// }
