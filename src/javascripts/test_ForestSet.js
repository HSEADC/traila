import forestSetQ1_1 from "../images/tests/Q_ForestSetQ1-1.svg";
import forestSetQ1_2 from "../images/tests/Q_ForestSetQ1-2.svg";
import forestSetQ1_3 from "../images/tests/Q_ForestSetQ1-3.svg";
import forestSetQ1_4 from "../images/tests/Q_ForestSetQ1-4.svg";

import forestSetQ2_1 from "../images/tests/Q_ForestSetQ2-1.svg";
import forestSetQ2_2 from "../images/tests/Q_ForestSetQ2-2.svg";
import forestSetQ2_3 from "../images/tests/Q_ForestSetQ2-3.svg";
import forestSetQ2_4 from "../images/tests/Q_ForestSetQ2-4.svg";

import forestSetQ3_1 from "../images/tests/Q_ForestSetQ3-1.svg";
import forestSetQ3_2 from "../images/tests/Q_ForestSetQ3-2.svg";
import forestSetQ3_3 from "../images/tests/Q_ForestSetQ3-3.svg";
import forestSetQ3_4 from "../images/tests/Q_ForestSetQ3-4.svg";

import forestSetQ4_1 from "../images/tests/Q_ForestSetQ4-1.svg";
import forestSetQ4_2 from "../images/tests/Q_ForestSetQ4-2.svg";
import forestSetQ4_3 from "../images/tests/Q_ForestSetQ4-3.svg";
import forestSetQ4_4 from "../images/tests/Q_ForestSetQ4-4.svg";

import forestSetQ5_1 from "../images/tests/Q_ForestSetQ5-1.svg";
import forestSetQ5_2 from "../images/tests/Q_ForestSetQ5-2.svg";
import forestSetQ5_3 from "../images/tests/Q_ForestSetQ5-3.svg";
import forestSetQ5_4 from "../images/tests/Q_ForestSetQ5-4.svg";

let currentStage = 0;
let userAnswers = [];

const stages = [
  {
    question: "Вопрос 1",
    title: "Дождливый вечер в лесу",
    description: "Ты идёшь на прогулку после дождя. Что стоит взять с собой?",
    answers: [
      {
        image: forestSetQ1_1,
        alt: "Непромокаемая куртка с капюшоном",
        tooltip: "Куртка с защитой от дождя",
        count: 1,
      },
      {
        image: forestSetQ1_2,
        alt: "Ручной фонарик для освещения",
        tooltip: "Компактный ручной фонарик",
        count: 1,
      },
      {
        image: forestSetQ1_3,
        alt: "Лёгкие открытые сандалии",
        tooltip: "Открытая обувь для прогулок",
        count: 0,
      },
      {
        image: forestSetQ1_4,
        alt: "Бумажная карта маршрута",
        tooltip: "Карта местности и троп",
        count: 1,
      },
    ],
  },

  {
    question: "Вопрос 2",
    title: "Незнакомый маршрут",
    description:
      "Ты идёшь по незнакомому маршруту без связи. Что поможет не потеряться?",
    answers: [
      {
        image: forestSetQ2_1,
        alt: "Туристический компас",
        tooltip: "Компас для определения направления",
        count: 1,
      },
      {
        image: forestSetQ2_2,
        alt: "Беспроводные наушники",
        tooltip: "Наушники для прослушивания музыки",
        count: 0,
      },
      {
        image: forestSetQ2_3,
        alt: "Портативный аккумулятор",
        tooltip: "Внешний аккумулятор для устройств",
        count: 1,
      },
      {
        image: forestSetQ2_4,
        alt: "Бумажная карта маршрута",
        tooltip: "Карта местности и троп",
        count: 1,
      },
    ],
  },

  {
    question: "Вопрос 3",
    title: "Летняя прогулка",
    description:
      "Ты идёшь к лесному озеру вечером, когда много насекомых. Что лучше взять?",
    answers: [
      {
        image: forestSetQ3_1,
        alt: "Небольшая декоративная свеча",
        tooltip: "Свеча в металлической банке",
        count: 0,
      },
      {
        image: forestSetQ3_2,
        alt: "Широкополая панама",
        tooltip: "Лёгкая панама от солнца",
        count: 1,
      },
      {
        image: forestSetQ3_3,
        alt: "Спрей от насекомых",
        tooltip: "Средство от комаров и мошек",
        count: 1,
      },
      {
        image: forestSetQ3_4,
        alt: "Лёгкая куртка на молнии",
        tooltip: "Лёгкая верхняя одежда",
        count: 1,
      },
    ],
  },

  {
    question: "Вопрос 4",
    title: "Холодное утро",
    description:
      "На улице прохладно и ветрено, но маршрут будет. Что поможет сохранить комфорт?",
    answers: [
      {
        image: forestSetQ4_1,
        alt: "Тёплые перчатки для прогулок",
        tooltip: "Перчатки для прохладной погоды",
        count: 1,
      },
      {
        image: forestSetQ4_2,
        alt: "Тёплая утеплённая куртка",
        tooltip: "Куртка для прохладной погоды",
        count: 1,
      },
      {
        image: forestSetQ4_3,
        alt: "Лёгкая хлопковая футболка",
        tooltip: "Футболка с коротким рукавом",
        count: 0,
      },
      {
        image: forestSetQ4_4,
        alt: "Многофункциональный бафф",
        tooltip: "Тканевый бафф для шеи",
        count: 1,
      },
    ],
  },

  {
    question: "Вопрос 5",
    title: "Поход за грибами",
    description:
      "Ты отправляешься в лес искать грибы на несколько часов. Что стоит взять?",
    answers: [
      {
        image: forestSetQ5_1,
        alt: "Грибной нож",
        tooltip: "Нож для сбора грибов",
        count: 1,
      },
      {
        image: forestSetQ5_2,
        alt: "Плетёная корзина для грибов",
        tooltip: "Корзина для лесных находок",
        count: 1,
      },
      {
        image: forestSetQ5_3,
        alt: "Приложение для определения грибов",
        tooltip: "Справочник грибов в телефоне",
        count: 1,
      },
      {
        image: forestSetQ5_4,
        alt: "Пластиковый пакет",
        tooltip: "Пакет для переноски вещей",
        count: 1,
      },
    ],
  },
];

const config = {
  storageKey: "ForestSetResult",
  resultPage: "./result_ForestSet.html",
};

const forestSetPage = document.querySelector(".O_ForestSetPage");

if (forestSetPage) {
  const question = document.querySelector(".W_ForestSetContent > .A_Paragraph");
  const title = document.querySelector(".A_Heading-H1");
  const description = document.querySelector(".M_ForestSetInfo .A_Paragraph");
  const button = document.querySelector(".A_ForestSetButton");
  const buttonText = document.querySelector(".A_ButtonText");
  const cards = document.querySelectorAll(".M_ForestSetCard");
  const images = document.querySelectorAll(".Q_ForestSetImage");
  const tooltips = document.querySelectorAll(".A_ForestSetTooltipText");

  function renderStage() {
    const stage = stages[currentStage];

    question.textContent = stage.question;
    title.textContent = stage.title;
    description.textContent = stage.description;

    stage.answers.forEach((answer, index) => {
      images[index].src = answer.image;
      images[index].alt = answer.alt;
      tooltips[index].textContent = answer.tooltip;

      cards[index].classList.remove("is-selected");

      if (userAnswers[currentStage]?.includes(index)) {
        cards[index].classList.add("is-selected");
      }
    });

    if (currentStage === stages.length - 1) {
      buttonText.textContent = "Показать результат";
    } else {
      buttonText.textContent = "Следующий вопрос";
    }

    if (window.fixWidows) {
      window.fixWidows();
    }
  }

  function calculateResult() {
    let result = 0;

    stages.forEach((stage, stageIndex) => {
      const selectedAnswers = userAnswers[stageIndex] || [];

      const correctAnswers = stage.answers
        .map((answer, index) => {
          if (answer.count === 1) {
            return index;
          }

          return null;
        })
        .filter((index) => index !== null);

      const selectedCorrectly =
        selectedAnswers.length === correctAnswers.length &&
        correctAnswers.every((correctIndex) =>
          selectedAnswers.includes(correctIndex),
        );

      if (selectedCorrectly) {
        result += 1;
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
    card.addEventListener("click", (event) => {
      if (event.target.closest(".M_ForestSetTooltip")) return;

      if (!userAnswers[currentStage]) {
        userAnswers[currentStage] = [];
      }

      const selectedAnswers = userAnswers[currentStage];
      const selectedIndex = selectedAnswers.indexOf(index);

      if (selectedIndex === -1) {
        selectedAnswers.push(index);
        card.classList.add("is-selected");
      } else {
        selectedAnswers.splice(selectedIndex, 1);
        card.classList.remove("is-selected");
      }
    });
  });

  button.addEventListener("click", () => {
    if (currentStage < stages.length - 1) {
      currentStage++;
      renderStage();
    } else {
      showResult();
    }
  });

  renderStage();
}
