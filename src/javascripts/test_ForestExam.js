import { initTest, chooseAnswer, goToStage } from "./tests.js";

import iconRunningMan from "../images/icons/Q_Icon_RunningMan.svg";
import iconHand from "../images/icons/Q_Icon_Hand.svg";
import iconSound from "../images/icons/Q_Icon_Sound.svg";
import iconSneakers from "../images/icons/Q_Icon_Sneakers.svg";

import iconTree from "../images/icons/Q_Icon_Tree.svg";
import iconWhiteMushroom from "../images/icons/Q_Icon_WhiteMushroom.svg";
import iconSun from "../images/icons/Q_Icon_Sun.svg";
import iconWind from "../images/icons/Q_Icon_Wind.svg";

import iconBody from "../images/icons/Q_Icon_Body.svg";
import iconForest from "../images/icons/Q_Icon_Forest.svg";
import iconWhiteMushroomVar from "../images/icons/Q_Icon_WhiteMushroomVar.svg";

import iconCompass from "../images/icons/Q_Icon_Compass.svg";
import iconEar from "../images/icons/Q_Icon_Ear.svg";
import iconKnife from "../images/icons/Q_Icon_Knife.svg";
import iconCamera from "../images/icons/Q_Icon_Camera.svg";

import iconDog from "../images/icons/Q_Icon_Dog.svg";
import iconDirt from "../images/icons/Q_Icon_Dirt.svg";
import iconBear from "../images/icons/Q_Icon_Bear.svg";

const stages = [
  {
    question: "Ты потерял тропу в лесу. Что делать первым?",
    answers: [
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Продолжить идти",
        description:
          "Иногда кажется, что тропа снова появится. В лесу направление может меняться из-за рельефа и густой растительности",
        count: 0,
      },
      {
        icon: iconHand,
        alt: "Иконка ладошки человека",
        title: "Остановиться и осмотреться",
        description:
          "Небольшая пауза помогает лучше заметить окружающую местность, изменения вокруг",
        count: 1,
      },
      {
        icon: iconSound,
        alt: "Иконка звука",
        title: "Позвать на помощь",
        description:
          "Голос или сигнал иногда помогают привлечь внимание, если поблизости есть люди",
        count: 0,
      },
      {
        icon: iconSneakers,
        alt: "Иконка кроссовка",
        title: "Идти быстрее",
        description:
          "В напряжённой ситуации люди часто начинают двигаться быстрее и менее внимательно",
        count: 0,
      },
    ],
  },

  {
    question: "Что может помочь сориентироваться в лесу?",
    answers: [
      {
        icon: iconTree,
        alt: "Иконка дерева",
        title: "Цвет коры деревьев",
        description:
          "Кора может выглядеть по-разному из-за влажности, возраста дерева, условий среды",
        count: 0,
      },
      {
        icon: iconWhiteMushroom,
        alt: "Иконка гриба",
        title: "Рост грибов",
        description:
          "Грибы появляются там, где есть подходящая влажность и определенные особенности почвы",
        count: 0,
      },
      {
        icon: iconSun,
        alt: "Иконка солнца",
        title: "Солнце и мох",
        description:
          "Солнце меняет положение в течение дня, а мох чаще встречается во влажных местах",
        count: 1,
      },
      {
        icon: iconWind,
        alt: "Иконка ветра",
        title: "Направление ветра",
        description:
          "Направление ветра может меняться в зависимости от погоды, особенностей местности",
        count: 0,
      },
    ],
  },

  {
    question: "Ты заметил незнакомый гриб. Что делать дальше?",
    answers: [
      {
        icon: iconWhiteMushroom,
        alt: "Иконка гриба",
        title: "Попробовать кусочек",
        description:
          "Иногда люди думают, что небольшая проба поможет понять, съедобен гриб или нет",
        count: 0,
      },
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Взять с собой для проверки",
        description:
          "Некоторые находки берут с собой, чтобы позже сравнить их с фотографиями или описаниями",
        count: 0,
      },
      {
        icon: iconForest,
        alt: "Иконка леса",
        title: "Оставить в лесу",
        description:
          "В природе встречается много похожих видов грибов, которые сложно различить без опыта",
        count: 1,
      },
      {
        icon: iconWhiteMushroomVar,
        alt: "Иконка гриба в лесу",
        title: "Понюхать гриб",
        description:
          "Некоторые грибы имеют выраженный запах, который иногда используют для сравнения",
        count: 0,
      },
    ],
  },

  {
    question: "Что помогает не потеряться в лесу?",
    answers: [
      {
        icon: iconCompass,
        alt: "Иконка компаса",
        title: "Компас или карта",
        description:
          "Даже знакомые маршруты могут выглядеть иначе в разную погоду или время года",
        count: 1,
      },
      {
        icon: iconEar,
        alt: "Иконка уха",
        title: "Портативная колонка",
        description:
          "Колонка позволяет слушать музыку во время прогулки. Её иногда берут на отдых на природе",
        count: 0,
      },
      {
        icon: iconKnife,
        alt: "Иконка ножа",
        title: "Большой нож",
        description:
          "Нож может использоваться как универсальный инструмент в походах, лагерях",
        count: 0,
      },
      {
        icon: iconCamera,
        alt: "Иконка фотоаппарата",
        title: "Фотоаппарат",
        description:
          "Фотоаппарат помогает замечать детали маршрута, растений и лесных находок",
        count: 0,
      },
    ],
  },

  {
    question: "Какие следы могут рассказать о жизни леса?",
    answers: [
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Следы людей",
        description:
          "Следы обуви часто остаются на мягкой земле, песке или влажных участках троп",
        count: 0,
      },
      {
        icon: iconDog,
        alt: "Иконка собаки",
        title: "Следы собак",
        description:
          "Следы домашних животных нередко встречаются рядом с популярными маршрутами и лесными дорожками",
        count: 0,
      },
      {
        icon: iconDirt,
        alt: "Иконка грязи",
        title: "Неровности почвы",
        description:
          "Неровности появляются из-за корней, дождя, влажности или движения по тропе. В лесу поверхность земли может быстро меняться",
        count: 0,
      },
      {
        icon: iconBear,
        alt: "Иконка медведя",
        title: "Следы животных",
        description:
          "Следы животных могут отличаться по форме, глубине и расположению на поверхности земли",
        count: 1,
      },
    ],
  },
];

const config = {
  storageKey: "forestExamTestResult",
  resultPage: "./result_ForestExam.html",
};
const questionElement = document.querySelector(".A_QuestionTitle");

if (questionElement) {
  initTest(stages);
  chooseAnswer(stages, config);
  goToStage(stages);
}
