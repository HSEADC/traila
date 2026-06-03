import { initTest, chooseAnswer, goToStage } from "./tests.js";

import iconTree from "../images/icons/Q_Icon_Tree.svg";
import iconForest from "../images/icons/Q_Icon_Forest.svg";
import iconBranch from "../images/icons/Q_Icon_Branch.svg";
import iconSound from "../images/icons/Q_Icon_Sound.svg";

import iconTreeVar from "../images/icons/Q_Icon_TreeVar.svg";
import iconWhiteMushroom from "../images/icons/Q_Icon_WhiteMushroom.svg";
import iconBody from "../images/icons/Q_Icon_Body.svg";

import iconAutumn from "../images/icons/Q_Icon_Autumn.svg";
import iconBear from "../images/icons/Q_Icon_Bear.svg";
import iconDampness from "../images/icons/Q_Icon_Dampness.svg";
import iconFlower from "../images/icons/Q_Icon_Flower.svg";

import iconWind from "../images/icons/Q_Icon_Wind.svg";

import iconSneakers from "../images/icons/Q_Icon_Sneakers.svg";
import iconHand from "../images/icons/Q_Icon_Hand.svg";
import iconRunningMan from "../images/icons/Q_Icon_RunningMan.svg";

const stages = [
  {
    question: "Тропа разделилась на две части. Что поможет понять направление?",
    answers: [
      {
        icon: iconTree,
        alt: "Иконка дерева",
        title: "Широкая тропа",
        description:
          "Широкие участки маршрута могут появляться из-за частого движения людей или особенностей местности",
        count: 0,
      },
      {
        icon: iconForest,
        alt: "Иконка леса",
        title: "Самые густые деревья",
        description:
          "В разных участках леса плотность деревьев и растительности может сильно меняться. Иногда тропы проходят через более тенистые места",
        count: 0,
      },
      {
        icon: iconBranch,
        alt: "Иконка ветки",
        title: "Следы и состояние тропы",
        description:
          "На лесных маршрутах люди часто замечают следы обуви, примятую траву, состояние поверхности",
        count: 1,
      },
      {
        icon: iconSound,
        alt: "Иконка звука",
        title: "Уровень шума",
        description:
          "В лесу звуки могут отражаться между деревьями и меняться из-за ветра, рельефа. На маршрутах шум окружающей среды ощущается по-разному",
        count: 0,
      },
    ],
  },

  {
    question: "Ты заметил старую маркировку на дереве. Что это может означать?",
    answers: [
      {
        icon: iconTreeVar,
        alt: "Иконка дерева",
        title: "Здесь мог проходить маршрут",
        description:
          "На маршрутах иногда встречаются старые указатели, краска или следы прошлых троп",
        count: 1,
      },
      {
        icon: iconWhiteMushroom,
        alt: "Иконка гриба",
        title: "Здесь растут грибы",
        description:
          "Во время прогулок люди иногда оставляют метки рядом с интересными находками. На деревьях могут встречаться самые разные обозначения",
        count: 0,
      },
      {
        icon: iconBranch,
        alt: "Иконка ветки",
        title: "Это случайная царапина",
        description:
          "На коре деревьев появляются следы из-за ветра, животных, особенностей лесной среды",
        count: 0,
      },
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Здесь часто отдыхают люди",
        description:
          "Во время прогулок люди иногда оставляют заметные места, которые помогают найти нужные тропы",
        count: 0,
      },
    ],
  },

  {
    question:
      "На тропе стало меньше следов и примятой травы. Что это может подсказать?",
    answers: [
      {
        icon: iconAutumn,
        alt: "Иконка дождевой тучи",
        title: "Здесь недавно прошёл дождь",
        description:
          "После дождя поверхность троп и растительность могут выглядеть иначе. Влажность и ветер постепенно меняют состояние лесных участков",
        count: 0,
      },
      {
        icon: iconBear,
        alt: "Иконка медведя",
        title: "Рядом находятся животные",
        description:
          "Следы животных могут появляться на самых разных участках леса, тропинок. Их бывает сложно заметить среди травы, листьев.",
        count: 0,
      },
      {
        icon: iconDampness,
        alt: "Иконка капли воды",
        title: "Тропа ведёт к воде",
        description:
          "Возле воды лесная среда часто выглядит более влажной, густой. На таких участках растительность может меняться быстрее",
        count: 0,
      },
      {
        icon: iconFlower,
        alt: "Иконка цветка",
        title: "Маршрут стал менее используемым",
        description:
          "На лесных тропах поверхность постепенно меняется в зависимости от движения людей",
        count: 1,
      },
    ],
  },

  {
    question: "Тропа стала зарастать травой и ветками. Что это может означать?",
    answers: [
      {
        icon: iconWhiteMushroom,
        alt: "Иконка гриба",
        title: "Здесь собирают грибы",
        description:
          "Во время прогулок люди могут оставлять разные следы присутствия на маршруте. В лесу часто встречаются участки с сломанными ветками",
        count: 0,
      },
      {
        icon: iconForest,
        alt: "Иконка леса",
        title: "Здесь начинается короткий путь",
        description:
          "В лесу иногда появляются дополнительные проходы и направления движения. Такие участки могут выглядеть менее заметными",
        count: 0,
      },
      {
        icon: iconWind,
        alt: "Иконка ветра",
        title: "Здесь недавно был ветер",
        description:
          "После ветра на тропах могут появляться листья, мелкие ветки. Состояние маршрута в лесу меняется под влиянием среды",
        count: 0,
      },
      {
        icon: iconBranch,
        alt: "Иконка ветки",
        title: "Тропой пользуются реже",
        description:
          "На редко используемых маршрутах ветки, листья и растения постепенно перекрывают проход",
        count: 1,
      },
    ],
  },

  {
    question:
      "Ты долго идёшь по тропе и перестал замечать знакомые ориентиры. Что лучше сделать?",
    answers: [
      {
        icon: iconSneakers,
        alt: "Иконка кроссовка",
        title: "Продолжать идти как обычно",
        description:
          "Во время длинных прогулок внимание к окружающей среде постепенно снижается. На маршруте становится сложнее замечать изменения",
        count: 0,
      },
      {
        icon: iconHand,
        alt: "Иконка ладошки человека",
        title: "Остановиться и осмотреть маршрут вокруг",
        description:
          "Во время остановки детали тропы и окружающей среды становятся заметнее. На маршрутах люди часто обращают внимание на ориентиры",
        count: 1,
      },
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Свернуть в сторону",
        description:
          "Иногда кажется, что рядом может находиться более удобное направление движения. В незнакомом лесу дополнительные тропы могут теряться",
        count: 0,
      },
      {
        icon: iconRunningMan,
        alt: "Иконка бегущего человека",
        title: "Идти быстрее",
        description:
          "На длинных участках люди иногда ускоряют шаг, чтобы быстрее закончить маршрут",
        count: 0,
      },
    ],
  },
];

const config = {
  storageKey: "RouteResult",
  resultPage: "./result_Route.html",
};
const questionElement = document.querySelector(".A_QuestionTitle");

if (questionElement) {
  initTest(stages);
  chooseAnswer(stages, config);
  goToStage(stages);
}
