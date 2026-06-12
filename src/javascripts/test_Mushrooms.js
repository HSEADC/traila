import iconWhiteMushroom from "../images/icons/Q_Icon_WhiteMushroom.svg";
import iconWhiteMushroomVar from "../images/icons/Q_Icon_WhiteMushroomVar.svg";

import iconChanterelle from "../images/icons/Q_Icon_Chanterelle.svg";
import iconChanterelleVar from "../images/icons/Q_Icon_ChanterelleVar.svg";

import iconHoneyFungusVar from "../images/icons/Q_Icon_HoneyFungusVar.svg";
import iconHoneyFungus from "../images/icons/Q_Icon_HoneyFungus.svg";

import iconChampignon from "../images/icons/Q_Icon_Champignon.svg";
import iconChampignonVar from "../images/icons/Q_Icon_ChampignonVar.svg";

import iconBirchBoletus from "../images/icons/Q_Icon_Birch_Boletus.svg";
import iconBirchBoletusVar from "../images/icons/Q_Icon_Birch_BoletusVar.svg";

import mushroomQ1_1 from "../images/tests/Q_MushroomQ1-1.png";
import mushroomQ1_2 from "../images/tests/Q_MushroomQ1-2.png";

import mushroomQ2_1 from "../images/tests/Q_MushroomQ2-1.png";
import mushroomQ2_2 from "../images/tests/Q_MushroomQ2-2.png";

import mushroomQ3_1 from "../images/tests/Q_MushroomQ3-1.png";
import mushroomQ3_2 from "../images/tests/Q_MushroomQ3-2.png";

import mushroomQ4_1 from "../images/tests/Q_MushroomQ4-1.png";
import mushroomQ4_2 from "../images/tests/Q_MushroomQ4-2.png";

import mushroomQ5_1 from "../images/tests/Q_MushroomQ5-1.png";
import mushroomQ5_2 from "../images/tests/Q_MushroomQ5-2.png";

let currentStage = 0;
let userAnswers = [];

const stages = [
  {
    description: "Найди съедобный белый гриб среди двух",
    answers: [
      {
        image: mushroomQ1_2,
        alt: "Белый гриб среди травы",
        icon: iconWhiteMushroom,
        count: 0,
      },
      {
        image: mushroomQ1_1,
        alt: "Белый гриб в лесу",
        icon: iconWhiteMushroomVar,
        count: 1,
      },
    ],
  },

  {
    description: "Найди настоящую съедобную лисичку",
    answers: [
      {
        image: mushroomQ2_2,
        alt: "Лисичка среди мха",
        icon: iconChanterelleVar,
        count: 0,
      },
      {
        image: mushroomQ2_1,
        alt: "Лисичка в лесу",
        icon: iconChanterelle,
        count: 1,
      },
    ],
  },

  {
    description: "Найди настоящий съедобный опёнок",
    answers: [
      {
        image: mushroomQ3_1,
        alt: "Опёнок в лесу",
        icon: iconHoneyFungusVar,
        count: 1,
      },
      {
        image: mushroomQ3_2,
        alt: "Опёнок на древесине",
        icon: iconHoneyFungus,
        count: 0,
      },
    ],
  },

  {
    description: "Какой гриб можно положить в корзину?",
    answers: [
      {
        image: mushroomQ4_1,
        alt: "Шампиньон в траве",
        icon: iconChampignon,
        count: 1,
      },
      {
        image: mushroomQ4_2,
        alt: "Шампиньон в лесу",
        icon: iconChampignonVar,
        count: 0,
      },
    ],
  },

  {
    description: "Найди настоящий съедобный подберёзовик",
    answers: [
      {
        image: mushroomQ5_1,
        alt: "Подберёзовик в лесу",
        icon: iconBirchBoletusVar,
        count: 1,
      },
      {
        image: mushroomQ5_2,
        alt: "Подберёзовик в траве",
        icon: iconBirchBoletus,
        count: 0,
      },
    ],
  },
];

const config = {
  storageKey: "MushroomsResult",
  resultPage: "./result_Mushrooms.html",
};

const mushroomPage = document.querySelector(".O_MushroomPage");

if (mushroomPage) {
  const description = document.querySelector(".A_Paragraph");
  const cards = document.querySelectorAll(".M_MushroomCard");
  const images = document.querySelectorAll(".Q_MushroomImage");
  const icons = document.querySelectorAll(".Q_TagIconImg");
  const progressSteps = document.querySelectorAll(".A_ProgressStep");

  function renderStage() {
    const stage = stages[currentStage];

    description.textContent = stage.description;

    stage.answers.forEach((answer, index) => {
      images[index].src = answer.image;
      images[index].alt = answer.alt;
      icons[index].src = answer.icon;

      cards[index].classList.remove("is-selected");

      if (userAnswers[currentStage] === index) {
        cards[index].classList.add("is-selected");
      }
    });

    updateProgress();
  }

  function updateProgress() {
    progressSteps.forEach((step, index) => {
      step.classList.remove("is-active", "is-completed");

      if (index < currentStage) {
        step.classList.add("is-completed");
      }

      if (index === currentStage) {
        step.classList.add("is-active");
      }
    });
  }

  function calculateResult() {
    let result = 0;

    userAnswers.forEach((answerIndex, stageIndex) => {
      if (answerIndex !== undefined) {
        result += stages[stageIndex].answers[answerIndex].count;
      }
    });

    return result;
  }

  function showResult() {
    const result = calculateResult();

    localStorage.setItem(config.storageKey, result);

    window.location.href = config.resultPage;
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      cards.forEach((item) => item.classList.remove("is-selected"));

      card.classList.add("is-selected");
      userAnswers[currentStage] = index;

      setTimeout(() => {
        if (currentStage < stages.length - 1) {
          currentStage++;
          renderStage();
        } else {
          showResult();
        }
      }, 800);
    });
  });

  progressSteps.forEach((step, index) => {
    step.addEventListener("click", () => {
      currentStage = index;
      renderStage();
    });
  });

  renderStage();
}
