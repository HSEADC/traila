import whereToGoQ1_1 from "../images/tests/Q_WhereToGoQ1-1.png";
import whereToGoQ1_2 from "../images/tests/Q_WhereToGoQ1-2.png";
import whereToGoQ1_3 from "../images/tests/Q_WhereToGoQ1-3.png";

import whereToGoQ2_1 from "../images/tests/Q_WhereToGoQ2-1.png";
import whereToGoQ2_2 from "../images/tests/Q_WhereToGoQ2-2.png";
import whereToGoQ2_3 from "../images/tests/Q_WhereToGoQ2-3.png";

import whereToGoQ3_1 from "../images/tests/Q_WhereToGoQ3-1.png";
import whereToGoQ3_2 from "../images/tests/Q_WhereToGoQ3-2.png";
import whereToGoQ3_3 from "../images/tests/Q_WhereToGoQ3-3.png";

import whereToGoQ4_1 from "../images/tests/Q_WhereToGoQ4-1.png";
import whereToGoQ4_2 from "../images/tests/Q_WhereToGoQ4-2.png";
import whereToGoQ4_3 from "../images/tests/Q_WhereToGoQ4-3.png";

import whereToGoQ5_1 from "../images/tests/Q_WhereToGoQ5-1.png";
import whereToGoQ5_2 from "../images/tests/Q_WhereToGoQ5-2.png";
import whereToGoQ5_3 from "../images/tests/Q_WhereToGoQ5-3.png";

let currentStage = 0;
let userAnswers = [];

const stages = [
  {
    title: "Какой маршрут безопаснее?",
    description: "Выбери тропу, по которой безопаснее продолжить путь",
    answers: [
      {
        image: whereToGoQ1_1,
        alt: "Лесная тропа с маркировкой на дереве",
        tooltip: "Маркировка на деревьях вдоль тропы",
        count: 1,
      },
      {
        image: whereToGoQ1_2,
        alt: "Тропа вдоль заболоченного участка",
        tooltip: "Тропа рядом с заболоченным участком",
        count: 0,
      },
      {
        image: whereToGoQ1_3,
        alt: "Узкая тропа в густом лесу",
        tooltip: "Узкая тропа среди густого леса",
        count: 0,
      },
    ],
  },

  {
    title: "Где лучше переждать грозу?",
    description: "Выбери место, где безопаснее остановиться во время грозы",
    answers: [
      {
        image: whereToGoQ2_1,
        alt: "Одинокое высокое дерево во время грозы",
        tooltip: "Одинокое дерево на открытом месте",
        count: 0,
      },
      {
        image: whereToGoQ2_2,
        alt: "Низкорослый лес во время грозы",
        tooltip: "Низкорослый лесной участок",
        count: 1,
      },
      {
        image: whereToGoQ2_3,
        alt: "Открытая поляна перед грозой",
        tooltip: "Открытая поляна перед лесом",
        count: 0,
      },
    ],
  },

  {
    title: "Какой ориентир надёжнее?",
    description: "Что поможет не потерять маршрут?",
    answers: [
      {
        image: whereToGoQ3_1,
        alt: "Лесная дорога после дождя",
        tooltip: "Лесная дорога после дождя",
        count: 0,
      },
      {
        image: whereToGoQ3_2,
        alt: "Маркировка туристического маршрута на дереве",
        tooltip: "Маркировка туристического маршрута",
        count: 1,
      },
      {
        image: whereToGoQ3_3,
        alt: "Лесная тропа с грибами",
        tooltip: "Лесная тропа с грибами",
        count: 0,
      },
    ],
  },

  {
    title: "Куда двигаться при потере тропы?",
    description: "Выбери самое безопасное решение",
    answers: [
      {
        image: whereToGoQ4_1,
        alt: "Узкая лесная тропа без маркировки",
        tooltip: "Тропа без заметных ориентиров",
        count: 0,
      },
      {
        image: whereToGoQ4_2,
        alt: "Густые заросли в лесу",
        tooltip: "Густые заросли лесной растительности",
        count: 0,
      },
      {
        image: whereToGoQ4_3,
        alt: "Тропа с маркировкой туристического маршрута",
        tooltip: "Маркированный участок лесной тропы",
        count: 1,
      },
    ],
  },

  {
    title: "Где безопаснее сделать привал?",
    description: "Выбери подходящее место для остановки",
    answers: [
      {
        image: whereToGoQ5_1,
        alt: "Открытый сухой участок лесной тропы",
        tooltip: "Открытый участок рядом с тропой",
        count: 1,
      },
      {
        image: whereToGoQ5_2,
        alt: "Берег быстрого лесного ручья",
        tooltip: "Берег быстрого лесного ручья",
        count: 0,
      },
      {
        image: whereToGoQ5_3,
        alt: "Наклонённое дерево над тропой",
        tooltip: "Наклонённое дерево над тропой",
        count: 0,
      },
    ],
  },
];

const config = {
  storageKey: "WhereToGoResult",
  resultPage: "./result_WhereToGo.html",
};

const whereToGoPage = document.querySelector(".W_WhereToGoCards");

if (whereToGoPage) {
  const title = document.querySelector(".A_Heading-H1");
  const description = document.querySelector(".A_Paragraph");
  const cards = document.querySelectorAll(".M_WhereToGoCard");
  const images = document.querySelectorAll(".Q_WhereToGoImage");
  const tooltips = document.querySelectorAll(".A_InfoTooltipText");
  const progressSteps = document.querySelectorAll(".A_ProgressStep");

  function renderStage() {
    const stage = stages[currentStage];

    title.textContent = stage.title;
    description.textContent = stage.description;

    stage.answers.forEach((answer, index) => {
      images[index].src = answer.image;
      images[index].alt = answer.alt;
      tooltips[index].textContent = answer.tooltip;

      cards[index].classList.remove("is-selected");

      if (userAnswers[currentStage] === index) {
        cards[index].classList.add("is-selected");
      }
    });

    updateProgress();

    if (window.fixWidows) {
      window.fixWidows();
    }
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
    card.addEventListener("click", (event) => {
      if (event.target.closest(".M_InfoTooltip")) return;

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
