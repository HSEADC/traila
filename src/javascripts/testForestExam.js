// console.clear();
// import { initExamTest, chooseExamAnswer, goToExamStage } from "./testsExam.js";

// import iconBody from "../images/icons/Q_Icon_Body.svg";
// import iconHand from "../images/icons/Q_Icon_Hand.svg";
// import iconEar from "../images/icons/Q_Icon_Ear.svg";
// import iconRunningMan from "../images/icons/Q_Icon_RunningMan.svg";

// import iconTree from "../images/icons/Q_Icon_Tree.svg";
// import iconWhiteMushroom from "../images/icons/Q_Icon_WhiteMushroom.svg";
// import iconSun from "../images/icons/Q_Icon_Sun.svg";
// import iconWind from "../images/icons/Q_Icon_Wind.svg";

// import iconWhiteMushroomVar from "../images/icons/Q_Icon_WhiteMushroomVar.svg";
// import iconForest from "../images/icons/Q_Icon_Forest.svg";
// import iconChampignonVar from "../images/icons/Q_Icon_ChampignonVar.svg";

// import iconCompass from "../images/icons/Q_Icon_Compass.svg";
// import iconSound from "../images/icons/Q_Icon_Sound.svg";
// import iconKnife from "../images/icons/Q_Icon_Knife.svg";
// import iconCamera from "../images/icons/Q_Icon_Camera.svg";

// import iconDog from "../images/icons/Q_Icon_Dog.svg";
// import iconDirt from "../images/icons/Q_Icon_Dirt.svg";
// import iconBear from "../images/icons/Q_Icon_Bear.svg";

// const stages = [
//   {
//     question: "Ты потерял тропу в лесу. Что делать первым?",
//     answers: [
//       {
//         icon: iconBody,
//         alt: "Иконка человека",
//         title: "Продолжить идти",
//         description:
//           "Иногда кажется, что если продолжать двигаться, тропа снова появится. В лесу направление может меняться из-за неровностей рельефа.",
//         count: 0,
//       },
//       {
//         icon: iconHand,
//         alt: "Иконка руки",
//         title: "Остановиться и осмотреться",
//         description:
//           "Иногда полезно сделать паузу и внимательно оглядеться вокруг. Так можно заметить ориентиры, следы тропы или особенности местности.",
//         count: 1,
//       },
//       {
//         icon: iconEar,
//         alt: "Иконка уха",
//         title: "Позвать на помощь",
//         description:
//           "Можно попробовать подать голос или сигнал, если рядом есть люди. Такой способ иногда используют, чтобы привлечь внимание.",
//         count: 0,
//       },
//       {
//         icon: iconRunningMan,
//         alt: "Иконка бегущего человека",
//         title: "Идти быстрее",
//         description:
//           "В напряжённой ситуации люди нередко начинают двигаться быстрее. При этом важно следить за направлением и окружающей местностью.",
//         count: 0,
//       },
//     ],
//   },

//   {
//     question: "Как определить стороны света в лесу?",
//     answers: [
//       {
//         icon: iconTree,
//         alt: "Иконка дерева",
//         title: "Цвет коры деревьев",
//         description:
//           "Иногда можно заметить, что кора на деревьях выглядит по-разному с разных сторон.",
//         count: 0,
//       },
//       {
//         icon: iconWhiteMushroom,
//         alt: "Иконка гриба",
//         title: "Рост грибов",
//         description:
//           "Грибы появляются там, где есть подходящая влажность и почва. Их расположение зависит от условий среды и особенностей леса",
//         count: 0,
//       },
//       {
//         icon: iconSun,
//         alt: "Иконка солнца",
//         title: "Солнце и мох",
//         description:
//           "Солнце может помочь понять направление в течение дня. Мох чаще растёт там, где больше влаги и тени.",
//         count: 1,
//       },
//       {
//         icon: iconWind,
//         alt: "Иконка ветра",
//         title: "Направление ветра",
//         description:
//           "Ветер ощущается по движению листвы и веток. Его направление может меняться в течение дня.",
//         count: 0,
//       },
//     ],
//   },

//   {
//     question: "Ты нашёл красивый гриб, но не уверен в нём",
//     answers: [
//       {
//         icon: iconWhiteMushroomVar,
//         alt: "Иконка гриба в траве",
//         title: "Попробовать кусочек",
//         description:
//           "Иногда люди думают, что небольшая проба поможет определить гриб. Такой способ иногда упоминается в разговорах грибников.",
//         count: 0,
//       },
//       {
//         icon: iconBody,
//         alt: "Иконка человека",
//         title: "Взять с собой для проверки",
//         description:
//           "Гриб можно аккуратно взять, чтобы позже сравнить его с описанием или фотографиями. Так делают, когда хотят подробнее изучить находку",
//         count: 0,
//       },
//       {
//         icon: iconForest,
//         alt: "Иконка леса",
//         title: "Оставить в лесу",
//         description:
//           "Многие предпочитают не трогать гриб, если не уверены в его виде. В лесу часто встречаются похожие друг на друга грибы.",
//         count: 1,
//       },
//       {
//         icon: iconChampignonVar,
//         alt: "Иконка двух грибов",
//         title: "Понюхать гриб",
//         description:
//           "Некоторые виды грибов имеют характерный запах. Этот признак иногда используют при попытке определить гриб.",
//         count: 0,
//       },
//     ],
//   },

//   {
//     question: "Что полезно взять на прогулку в лес?",
//     answers: [
//       {
//         icon: iconCompass,
//         alt: "Иконка компаса",
//         title: "Компас или карта",
//         description:
//           "Компас и карта помогают понимать направление движения. Их часто используют на маршрутах и прогулках в лесу.",
//         count: 1,
//       },
//       {
//         icon: iconSound,
//         alt: "Иконка звука",
//         title: "Портативная колонка",
//         description:
//           "Колонка позволяет слушать музыку во время прогулки. Её иногда берут с собой на отдых на природе.",
//         count: 0,
//       },
//       {
//         icon: iconKnife,
//         alt: "Иконка ножа",
//         title: "Большой нож",
//         description:
//           "Нож может использоваться как универсальный инструмент. Его иногда берут с собой в походы или на природу.",
//         count: 0,
//       },
//       {
//         icon: iconCamera,
//         alt: "Иконка фотоаппарата",
//         title: "Фотоаппарат",
//         description:
//           "Фотоаппарат позволяет запечатлеть интересные места и находки. Многие берут его с собой на прогулки.",
//         count: 0,
//       },
//     ],
//   },

//   {
//     question: "Ты заметил много следов копыт на тропе",
//     answers: [
//       {
//         icon: iconBody,
//         alt: "Иконка человека",
//         title: "Следы людей",
//         description:
//           "Следы людей обычно оставляют отпечаток подошвы обуви. Их можно заметить на мягкой земле или песке.",
//         count: 0,
//       },
//       {
//         icon: iconDog,
//         alt: "Иконка собаки",
//         title: "Следы собак",
//         description:
//           "Следы собак похожи на отпечатки лап с когтями. Они часто встречаются на лесных тропах.",
//         count: 0,
//       },
//       {
//         icon: iconDirt,
//         alt: "Иконка грязи",
//         title: "Неровности почвы",
//         description:
//           "Иногда на тропе остаются просто вмятины или неровности. Они могут появляться из-за дождя, ветра или движения животных.",
//         count: 0,
//       },
//       {
//         icon: iconBear,
//         alt: "Иконка медведя",
//         title: "Следы животных",
//         description:
//           "Следы животных могут отличаться по форме и размеру. По ним иногда пытаются определить, кто проходил по тропе.",
//         count: 1,
//       },
//     ],
//   },
// ];

// const config = {
//   storageKey: "forestExamTestResult",
//   resultPage: "/STRATA/pages/interactive/results_test_exam.html",
// };

// const questionElement = document.querySelector(".A_Question");

// if (questionElement) {
//   initExamTest(stages);
//   chooseExamAnswer(stages, config);
//   goToExamStage(stages);
// }
