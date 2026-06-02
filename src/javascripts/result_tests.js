import result0 from "../images/tests/Q_Progress-0.png";
import result20 from "../images/tests/Q_Progress-20.png";
import result40 from "../images/tests/Q_Progress-40.png";
import result60 from "../images/tests/Q_Progress-60.png";
import result80 from "../images/tests/Q_Progress-80.png";
import result100 from "../images/tests/Q_Progress-100.png";

const results = {
  0: {
    percent: "0%",
    header: "Опасный уровень",
    paragraph:
      "Тебе пока сложно ориентироваться и принимать безопасные решения в лесу",
    image: result0,
  },
  1: {
    percent: "20%",
    header: "Слабый результат",
    paragraph:
      "Ты знаешь базовые вещи, но легко теряешься в стрессовой ситуации",
    image: result20,
  },
  2: {
    percent: "40%",
    header: "Есть понимание",
    paragraph:
      "Ты начинаешь ориентироваться в лесу, но пока не всегда уверен в действиях",
    image: result40,
  },
  3: {
    percent: "60%",
    header: "Уверенный старт",
    paragraph: "Ты понимаешь основы поведения в лесу, но навыки стоит укрепит",
    image: result60,
  },
  4: {
    percent: "80%",
    header: "Очень хороший результат",
    paragraph: "Ты уверенно ориентируешься и действуешь в большинстве ситуаций",
    image: result80,
  },
  5: {
    percent: "100%",
    header: "Шикарный результат",
    paragraph: "Ты хорошо понимаешь лесную среду и уверенно принимаешь решения",
    image: result100,
  },
};

const resultKey = document.body.dataset.resultKey;
const resultCount = Number(localStorage.getItem(resultKey)) || 0;
const resultData = results[resultCount];

const resultImage = document.querySelector(".Q_ResultChartImg");
const resultPercent = document.querySelector(".A_ResultPercent");
const resultHeader = document.querySelector(".A_ResultTitle");
const resultParagraph = document.querySelector(".A_Paragraph");

if (resultData) {
  resultImage.src = resultData.image;
  resultImage.alt = `Диаграмма результата: ${resultData.percent}`;
  resultPercent.innerText = resultData.percent;
  resultHeader.innerText = resultData.header;
  resultParagraph.innerText = resultData.paragraph;
}
