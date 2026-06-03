import { initTest, chooseAnswer, goToStage } from "./tests.js";

import iconGrass from "../images/icons/Q_Icon_Grass.svg";
import iconMountain from "../images/icons/Q_Icon_Mountain.svg";
import iconDampness from "../images/icons/Q_Icon_Dampness.svg";
import iconTreeVar from "../images/icons/Q_Icon_TreeVar.svg";

import iconWind from "../images/icons/Q_Icon_Wind.svg";
import iconSun from "../images/icons/Q_Icon_Sun.svg";
import iconBranch from "../images/icons/Q_Icon_Branch.svg";

import iconChampignonVar from "../images/icons/Q_Icon_ChampignonVar.svg";
import iconWhiteMushroom from "../images/icons/Q_Icon_WhiteMushroom.svg";
import iconWhiteMushroomVar from "../images/icons/Q_Icon_WhiteMushroomVar.svg";
import iconHoneyFungusVar from "../images/icons/Q_Icon_HoneyFungusVar.svg";

import iconBody from "../images/icons/Q_Icon_Body.svg";
import iconBirchBoletusVar from "../images/icons/Q_Icon_BirchBoletusVar.svg";
import iconChanterelleVar from "../images/icons/Q_Icon_ChanterelleVar.svg";
import iconBirchBoletus from "../images/icons/Q_Icon_BirchBoletus.svg";

import iconTree from "../images/icons/Q_Icon_Tree.svg";

const stages = [
  {
    question: "Где в лесу чаще можно заметить грибы?",
    answers: [
      {
        icon: iconGrass,
        alt: "Иконка травы",
        title: "На сухих открытых полянах",
        description:
          "Открытые участки леса могут выглядеть светлее и теплее в течение дня. Поверхность земли на таких местах отличаются от тенистых участков",
        count: 0,
      },
      {
        icon: iconMountain,
        alt: "Иконка горы",
        title: "На каменистых тропах",
        description:
          "Камни, корни и плотная поверхность часто встречаются на маршрутах. После дождя или сухой погоды такие участки могут выглядеть по-разному",
        count: 0,
      },
      {
        icon: iconDampness,
        alt: "Иконка капли воды",
        title: "Во влажных тенистых местах",
        description:
          "В разных частях леса условия среды отличаются по влажности, количеству света и состоянию почвы",
        count: 1,
      },
      {
        icon: iconTreeVar,
        alt: "Иконка дерева",
        title: "Рядом с древесиной",
        description:
          "Ветки, пни и древесные остатки встречаются во многих частях леса. Их состояние и внешний вид меняются со временем и погодой",
        count: 0,
      },
    ],
  },

  {
    question: "Что может повлиять на появление грибов после дождя?",
    answers: [
      {
        icon: iconDampness,
        alt: "Иконка капли воды",
        title: "Влажность почвы",
        description:
          "После дождя поверхность леса меняется неравномерно. Почва, листья, мох могут удерживать влагу по-разному",
        count: 1,
      },
      {
        icon: iconWind,
        alt: "Иконка ветра",
        title: "Направление ветра",
        description:
          "Движение воздуха в лесу может ощущаться по-разному в зависимости от густоты деревьев и особенностей маршрута",
        count: 0,
      },
      {
        icon: iconSun,
        alt: "Иконка солнца",
        title: "Количество солнечного света",
        description:
          "Освещённость лесных участков меняется в течение дня и зависит от деревьев, облаков, рельефа местности",
        count: 0,
      },
      {
        icon: iconBranch,
        alt: "Иконка ветки",
        title: "Форма тропы",
        description:
          "Тропы могут быть прямыми, извилистыми или почти незаметными. Их внешний вид часто связан с рельефом и движением людей",
        count: 0,
      },
    ],
  },

  {
    question: "Ты увидел несколько похожих грибов рядом. Что важно учитывать?",
    answers: [
      {
        icon: iconChampignonVar,
        alt: "Иконка шампиньонов",
        title: "Они точно одного вида",
        description:
          "Похожие формы и цвета могут встречаться у самых разных лесных находок. Внешний вид иногда меняется из-за среды и возраста",
        count: 0,
      },
      {
        icon: iconWhiteMushroom,
        alt: "Иконка белого гриба",
        title: "Размер может отличаться у похожих грибов",
        description:
          "Во время прогулок лесные находки могут выглядеть по-разному, все зависит от влажности, освещения и состояния окружающей среды",
        count: 0,
      },
      {
        icon: iconWhiteMushroomVar,
        alt: "Иконка гриба",
        title: "Все грибы рядом безопасны",
        description:
          "На одной поляне или рядом с тропой могут встречаться самые разные растения, грибы",
        count: 0,
      },
      {
        icon: iconHoneyFungusVar,
        alt: "Иконка опенка",
        title: "У разных видов могут быть одни признаки",
        description:
          "Во время наблюдений люди часто замечают совпадения формы, цвета или текстуры у разных объектов лесной среды",
        count: 1,
      },
    ],
  },

  {
    question: "Что лучше сделать с незнакомым грибом во время прогулки?",
    answers: [
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Взять с собой без проверки",
        description:
          "Во время прогулок люди иногда рассматривают лесные находки внимательнее уже после маршрута",
        count: 0,
      },
      {
        icon: iconBirchBoletusVar,
        alt: "Иконка трех грибов",
        title: "Попробовать маленький кусочек",
        description:
          "Иногда кажется, что небольшая проба может помочь узнать свойства гриба. Многие лесные находки могут выглядеть похожими друг на друга",
        count: 0,
      },
      {
        icon: iconChanterelleVar,
        alt: "Иконка лисички",
        title: "Определить только по запаху",
        description:
          "Запахи в лесной среде могут ощущаться сильнее или слабее, все зависит от влажности, температуры и окружающей среды",
        count: 0,
      },
      {
        icon: iconBirchBoletus,
        alt: "Иконка подберезовика",
        title: "Оставить на месте",
        description:
          "Незнакомые грибы часто становятся частью наблюдений за лесной средой. Во время прогулки можно заметить форму, цвет и место",
        count: 1,
      },
    ],
  },

  {
    question: "Что помогает внимательнее наблюдать за грибной средой?",
    answers: [
      {
        icon: iconGrass,
        alt: "Иконка травы",
        title: "Идти быстрее по тропе",
        description:
          "Во время движения внимание человека может переключаться между маршрутом, поверхностью тропы и окружающей средой",
        count: 0,
      },
      {
        icon: iconDampness,
        alt: "Иконка капли воды",
        title: "Замечать почву, мох и влажные участки",
        description:
          "Лесная среда состоит из множества деталей: поверхности земли, листьев, древесины, мха и изменений после погоды",
        count: 1,
      },
      {
        icon: iconTree,
        alt: "Иконка дерева",
        title: "Смотреть только на деревья",
        description:
          "Разные части леса могут по-разному влиять на восприятие пространства, света, окружающей среды",
        count: 0,
      },
      {
        icon: iconWhiteMushroom,
        alt: "Иконка гриба",
        title: "Замечать только крупные грибы",
        description:
          "Во время прогулок внимание часто привлекают более заметные объекты, хотя небольшие детали тоже могут менять восприятие маршрута",
        count: 0,
      },
    ],
  },
];

const config = {
  storageKey: "ObservationResult",
  resultPage: "./result_Observation.html",
};
const questionElement = document.querySelector(".A_QuestionTitle");

if (questionElement) {
  initTest(stages);
  chooseAnswer(stages, config);
  goToStage(stages);
}
