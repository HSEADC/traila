import { initTest, chooseAnswer, goToStage } from "./tests.js";

import iconLamp from "../images/icons/Q_Icon_Lamp.svg";
import iconVase from "../images/icons/Q_Icon_Vase.svg";
import iconFirstAidKit from "../images/icons/Q_Icon_FirstAidKit.svg";
import iconCandle from "../images/icons/Q_Icon_Candle.svg";

import iconNotebook from "../images/icons/Q_Icon_Notebook.svg";
import iconAlbum from "../images/icons/Q_Icon_Album.svg";
import iconCamera from "../images/icons/Q_Icon_Camera.svg";
import iconTime from "../images/icons/Q_Icon_Time.svg";

import iconFolder from "../images/icons/Q_Icon_Folder.svg";
import iconStand from "../images/icons/Q_Icon_Stand.svg";
import iconSneakers from "../images/icons/Q_Icon_Sneakers.svg";
import iconWhistle from "../images/icons/Q_Icon_Whistle.svg";

import iconPlaid from "../images/icons/Q_Icon_Plaid.svg";
import iconSound from "../images/icons/Q_Icon_Sound.svg";
import iconTshirt from "../images/icons/Q_Icon_T-shirt.svg";
import iconBody from "../images/icons/Q_Icon_Body.svg";

import iconBackpack from "../images/icons/Q_Icon_Backpack.svg";
import iconBag from "../images/icons/Q_Icon_Bag.svg";
import iconPillow from "../images/icons/Q_Icon_Pillow.svg";

const stages = [
  {
    question: "Что может быть полезно во время долгой прогулки по лесу?",
    answers: [
      {
        icon: iconLamp,
        alt: "Иконка лампы",
        title: "Настольная лампа",
        description:
          "Разные вещи по-разному ощущаются во время прогулок и длительного движения",
        count: 0,
      },
      {
        icon: iconVase,
        alt: "Иконка вазы",
        title: "Большая стеклянная ваза",
        description:
          "Некоторые предметы могут использоваться для отдыха, интерьера или атмосферы",
        count: 0,
      },
      {
        icon: iconFirstAidKit,
        alt: "Иконка первой помощи",
        title: "Небольшая аптечка",
        description:
          "Иногда во время прогулок люди сталкиваются с царапинами, мозолями или усталостью. На маршруте условия могут быстро меняться",
        count: 1,
      },
      {
        icon: iconCandle,
        alt: "Иконка свечи",
        title: "Декоративная свеча",
        description:
          "Некоторые аксессуары используют для отдыха или оформления пространства. Во время прогулок окружающая среда ощущается иначе",
        count: 0,
      },
    ],
  },

  {
    question: "Что может пригодиться для наблюдений за природой?",
    answers: [
      {
        icon: iconNotebook,
        alt: "Иконка блокнота",
        title: "Небольшой блокнот",
        description:
          "Во время прогулок некоторые записывают маршруты, наблюдения или интересные детали лесной среды",
        count: 1,
      },
      {
        icon: iconAlbum,
        alt: "Иконка альбома для рисования",
        title: "Большой альбом для рисунков",
        description:
          "Некоторые вещи используют для творчества, хранения материалов или работы дома",
        count: 0,
      },
      {
        icon: iconCamera,
        alt: "Иконка фотоаппарата",
        title: "Декоративная фоторамка",
        description:
          "Люди иногда берут с собой разные личные предметы и аксессуары. Переноски очень удобны в природной среде",
        count: 0,
      },
      {
        icon: iconTime,
        alt: "Иконка часов",
        title: "Настольные часы",
        description:
          "Во время прогулок используют разные устройства и аксессуары. На маршрутах внимание часто переключается на движение, ориентиры",
        count: 0,
      },
    ],
  },

  {
    question: "Что может пригодиться на незнакомом лесном маршруте?",
    answers: [
      {
        icon: iconFolder,
        alt: "Иконка папки",
        title: "Папка с бумагами",
        description:
          "Некоторые вещи удобнее использовать в помещении или на рабочем месте. Во время движения формат предметов ощущаются иначе",
        count: 0,
      },
      {
        icon: iconStand,
        alt: "Иконка горшка",
        title: "Декоративная подставка",
        description:
          "Во время прогулок люди обычно выбирают вещи с учётом движения, ограниченного пространства",
        count: 0,
      },
      {
        icon: iconSneakers,
        alt: "Иконка кроссовок",
        title: "Лёгкие тканевые кеды",
        description:
          "Разная обувь ощущается по-разному в зависимости от поверхности, влажности, длины маршрута",
        count: 0,
      },
      {
        icon: iconWhistle,
        alt: "Иконка свистка",
        title: "Свисток",
        description:
          "Во время прогулок люди используют разные предметы для удобства, взаимодействия с окружающей средой",
        count: 1,
      },
    ],
  },

  {
    question: "Что полезно иметь при себе во время прохладной погоды в лесу?",
    answers: [
      {
        icon: iconPlaid,
        alt: "Иконка пледа",
        title: "Тонкий плед для отдыха",
        description:
          "Некоторые вещи люди берут для остановок, пикников или отдыха на природе, тонкий плед может очень помочь",
        count: 0,
      },
      {
        icon: iconSound,
        alt: "Иконка звука",
        title: "Музыкальная колонка",
        description:
          "Во время отдыха на природе люди иногда берут с собой разные устройства и аксессуары",
        count: 0,
      },
      {
        icon: iconTshirt,
        alt: "Иконка футболки",
        title: "Лёгкая хлопковая накидка",
        description:
          "Во время прогулок люди используют разную одежду, аксессуары, все зависисит от времени года, влажности и длительности маршрута",
        count: 0,
      },
      {
        icon: iconBody,
        alt: "Иконка человека",
        title: "Лёгкая дополнительная кофта",
        description:
          "В лесной среде температура, влажность и ветер могут меняться в течение прогулки. Во время движения ощущения часто отличаются",
        count: 1,
      },
    ],
  },

  {
    question: "Что может быть полезно для более удобного движения по тропе?",
    answers: [
      {
        icon: iconStand,
        alt: "Иконка горшка",
        title: "Жёсткий пластиковый контейнер",
        description:
          "Некоторые объёмные предметы могут ощущаться по-разному во время движения по тропам, участкам с неровной поверхностью",
        count: 0,
      },
      {
        icon: iconBackpack,
        alt: "Иконка рюкзака",
        title: "Небольшой рюкзак",
        description:
          "Во время прогулок люди распределяют вещи по-разному, все зависит от маршрута, поверхности и длительности движения",
        count: 1,
      },
      {
        icon: iconBag,
        alt: "Иконка сумки",
        title: "Большая сумка для покупок",
        description:
          "Во время прогулок формат переноски вещей может ощущаться иначе из-за движения, ширины троп и особенностей маршрута",
        count: 0,
      },
      {
        icon: iconPillow,
        alt: "Иконка подушки",
        title: "Напольная подушка",
        description:
          "Некоторые мягкие предметы используют для отдыха или остановок. Во время движения объём вещей может ощущаться сильнее",
        count: 0,
      },
    ],
  },
];

const config = {
  storageKey: "WhatToTakeResult",
  resultPage: "./result_WhatToTake.html",
};
const questionElement = document.querySelector(".A_QuestionTitle");

if (questionElement) {
  initTest(stages);
  chooseAnswer(stages, config);
  goToStage(stages);
}
