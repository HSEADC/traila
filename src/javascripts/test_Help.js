import { initTest, chooseAnswer, goToStage } from "./tests.js";

import iconRunningMan from "../images/icons/Q_Icon_RunningMan.svg";
import iconSlush from "../images/icons/Q_Icon_Slush.svg";
import iconDampness from "../images/icons/Q_Icon_Dampness.svg";
import iconFlowerSheets from "../images/icons/Q_Icon_FlowerSheets.svg";

import iconHand from "../images/icons/Q_Icon_Hand.svg";
import iconGrass from "../images/icons/Q_Icon_Grass.svg";
import iconChanterelle from "../images/icons/Q_Icon_Chanterelle.svg";

import iconBerryVar from "../images/icons/Q_Icon_BerryVar.svg";
import iconBody from "../images/icons/Q_Icon_Body.svg";

import iconLeg from "../images/icons/Q_Icon_Leg.svg";

import iconSneakers from "../images/icons/Q_Icon_Sneakers.svg";

const stages = [
  {
    question:
      "Во время прогулки ты случайно поцарапал руку о ветку. Что лучше сделать?",
    answers: [
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Продолжить идти без внимания",
        description:
          "Во время движения люди могут по-разному воспринимать усталость, мелкие неудобства и состояние кожи после контакта с лесом",
        count: 0,
      },
      {
        icon: iconSlush,
        alt: "Иконка грязи",
        title: "Опустить руку в лужу",
        description:
          "В лесу после дождя часто встречаются влажные участки, лужи и мягкая почва",
        count: 0,
      },
      {
        icon: iconDampness,
        alt: "Иконка капли воды",
        title: "Промыть и закрыть царапину",
        description:
          "На лесных маршрутах поверхность растений, веток и земли может быть влажной или пыльной",
        count: 1,
      },
      {
        icon: iconFlowerSheets,
        alt: "Иконка четырех лепестков",
        title: "Натереть место листьями",
        description:
          "Во время прогулок люди иногда используют подручные предметы, растения, которые нашли в лесу",
        count: 0,
      },
    ],
  },

  {
    question:
      "Ты почувствовал сильную усталость во время долгого маршрута. Что полезнее сделать?",
    answers: [
      {
        icon: iconHand,
        alt: "Иконка ладошки руки",
        title: "Сделать остановку, оценить состояние",
        description:
          "Во время длительных прогулок восприятие маршрута и окружающей среды может постепенно меняться",
        count: 1,
      },
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Идти быстрее до конца маршрута",
        description:
          "На длинных участках люди иногда стараются быстрее закончить путь. Темп движения и внимание к окружающей среде могут меняться со временем",
        count: 0,
      },
      {
        icon: iconGrass,
        alt: "Иконка травы",
        title: "Свернуть с тропы и лечь в траву",
        description:
          "Лесные участки могут отличаться по рельефу, влажности и густоте растений. В незнакомых местах ориентиры становятся менее заметными",
        count: 0,
      },
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Игнорировать усталость",
        description:
          "Во время прогулок ощущения могут меняться постепенно. На маршрутах люди не всегда сразу замечают изменения самочувствия",
        count: 0,
      },
    ],
  },

  {
    question:
      "У твоего знакомого начала кружиться голова во время прогулки. Что лучше сделать?",
    answers: [
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Продолжить маршрут как обычно",
        description:
          "Во время прогулок люди могут по-разному реагировать на нагрузку, температуру и длительное движение по тропам",
        count: 0,
      },
      {
        icon: iconBerryVar,
        alt: "Иконка двух ягод",
        title: "Дать попробовать неизвестные ягоды",
        description:
          "В лесной среде встречаются самые разные растения и плоды. Их внешний вид может отличаться в зависимости от сезона и условий среды",
        count: 0,
      },
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Отправить человека идти одного",
        description:
          "На маршрутах условия могут меняться из-за рельефа, освещения, особенностей лесной среды",
        count: 0,
      },
      {
        icon: iconHand,
        alt: "Иконка ладошки человека",
        title: "Помочь остановиться и немного отдохнуть",
        description:
          "Во время движения по лесу самочувствие может зависеть от темпа, погоды, длительности маршрута. Иногда состояние меняется постепенно",
        count: 1,
      },
    ],
  },

  {
    question:
      "Ты заметил небольшую мозоль на ноге во время прогулки. Что лучше сделать?",
    answers: [
      {
        icon: iconHand,
        alt: "Иконка ладошки человека",
        title: "Обратить внимание и защитить место",
        description:
          "Во время долгого движения обувь и поверхность тропы могут ощущаться иначе. На разных участках нагрузка на ноги меняется",
        count: 1,
      },
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Продолжать идти без остановки",
        description:
          "Во время маршрутов состояние ног может постепенно меняться из-за влажности, поверхности троп, длины прогулки",
        count: 0,
      },
      {
        icon: iconLeg,
        alt: "Иконка ноги",
        title: "Снять обувь и идти босиком",
        description:
          "Поверхность лесных троп может быть разной: влажной, каменистой, мягкой или покрытой ветками и корнями",
        count: 0,
      },
      {
        icon: iconDampness,
        alt: "Иконка капли воды",
        title: "Намочить обувь в ручье",
        description:
          "В лесу встречаются ручьи, влажные участки и лужи. После контакта с водой ощущения во время движения могут меняться",
        count: 0,
      },
    ],
  },

  {
    question:
      "Во время прогулки кто-то рядом споткнулся и ударился ногой. Что полезнее сделать сначала?",
    answers: [
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Сразу поднимать и вести дальше",
        description:
          "После неожиданного движения или падения ощущения и состояние человека могут меняться постепенно",
        count: 0,
      },
      {
        icon: iconHand,
        alt: "Иконка ладошки руки",
        title: "Спокойно оценить состояние человека",
        description:
          "На лесных тропах поверхность может быть неровной из-за корней, камней или влажной земли. Люди по-разному реагируют на падения и усталость",
        count: 1,
      },
      {
        icon: iconSneakers,
        alt: "Иконка кроссовка",
        title: "Продолжить маршрут без остановки",
        description:
          "Во время прогулок внимание к маршруту и окружающей среде может снижаться из-за темпа или усталости",
        count: 0,
      },
      {
        icon: iconBody,
        alt: "Иконка тела человека",
        title: "Оставить человека одного отдохнуть",
        description:
          "На лесных маршрутах ориентиры и состояние троп могут отличаться все зависит от участка и окружающей среды",
        count: 0,
      },
    ],
  },
];

const config = {
  storageKey: "HelpResult",
  resultPage: "./result_Help.html",
};
const questionElement = document.querySelector(".A_QuestionTitle");

if (questionElement) {
  initTest(stages);
  chooseAnswer(stages, config);
  goToStage(stages);
}
