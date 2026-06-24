const articles = [
  {
    title: "Клещи",
    url: "https://traila.adc.ac/pages/articles/article_ticks.html",
  },
  {
    title: "Гроза",
    url: "https://traila.adc.ac/pages/articles/article_storm.html",
  },
  {
    title: "Потерялся",
    url: "https://traila.adc.ac/pages/articles/article_lost.html",
  },
  {
    title: "Маршрут",
    url: "https://traila.adc.ac/pages/articles/article_route.html",
  },
  {
    title: "Ориентиры",
    url: "https://traila.adc.ac/pages/articles/article_landmarks.html",
  },
  {
    title: "Компас",
    url: "https://traila.adc.ac/pages/articles/article_compass.html",
  },
  {
    title: "Лесной экзамен",
    url: "https://traila.adc.ac/pages/interactive/main_ForestExam.html",
  },
  {
    title: "Помощь на тропе",
    url: "https://traila.adc.ac/pages/interactive/main_Help.html",
  },
  {
    title: "Съедобное или... нет?",
    url: "https://traila.adc.ac/pages/interactive/main_Mushrooms.html",
  },
  {
    title: "Что взять с собой?",
    url: "https://traila.adc.ac/pages/interactive/main_ForestSet.html",
  },
  {
    title: "Спокойное движение",
    url: "https://traila.adc.ac/pages/interactive/main_CalmMovement.html",
  },
  {
    title: "Что взять в лес",
    url: "https://traila.adc.ac/pages/interactive/main_WhatToTake.html",
  },
  {
    title: "Наблюдение",
    url: "https://traila.adc.ac/pages/interactive/main_Observation.html",
  },
  {
    title: "Чтение маршрута",
    url: "https://traila.adc.ac/pages/interactive/main_Route.html",
  },
  {
    title: "Куда идти?",
    url: "https://traila.adc.ac/pages/interactive/main_WhereToGo.html",
  },
  {
    title: "Озеро Бездонное",
    url: "https://traila.adc.ac/pages/routes/bottomlessLake.html",
  },
  {
    title: "Заповедный лес",
    url: "https://traila.adc.ac/pages/routes/reserveForest.html",
  },
  {
    title: "Тропарёвский лес",
    url: "https://traila.adc.ac/pages/routes/troparevoForest.html",
  },
  {
    title: "Воробьёвы горы",
    url: "https://traila.adc.ac/pages/routes/sparrowHills.html",
  },
  {
    title: "Лосиный остров",
    url: "https://traila.adc.ac/pages/routes/losinyOstrovTrail.html",
  },
];

initSearch(articles);

function initSearch(articles) {
  const openButton = document.querySelector(".A_Search");
  const searchContainer = document.querySelector(".W_Search");
  const input = document.querySelector(".A_SearchInput");
  const closeButton = document.querySelector(".A_SearchButton");
  const dropdown = document.querySelector(".M_SearchDropdown");

  if (!openButton || !searchContainer || !input || !closeButton || !dropdown)
    return;

  openButton.addEventListener("click", () => {
    searchContainer.classList.add("is-open");
    openButton.classList.add("is-hidden");
    input.focus();
  });

  closeButton.addEventListener("click", () => {
    closeSearch(openButton, searchContainer, input, dropdown);
  });

  input.addEventListener("input", () => {
    handleSearchInput(articles, input, dropdown);
  });
}

function closeSearch(openButton, searchContainer, input, dropdown) {
  input.value = "";
  dropdown.innerHTML = "";
  dropdown.style.display = "none";

  searchContainer.classList.remove("is-open");
  openButton.classList.remove("is-hidden");
}

function handleSearchInput(articles, input, dropdown) {
  const value = input.value.trim().toLowerCase();

  dropdown.innerHTML = "";

  if (value.length < 2) {
    dropdown.style.display = "none";
    return;
  }

  const results = articles.filter((article) =>
    article.title.toLowerCase().includes(value),
  );

  if (results.length === 0) {
    dropdown.style.display = "none";
    return;
  }

  renderDropdown(results, dropdown, value);
}

function renderDropdown(results, dropdown, value) {
  dropdown.innerHTML = "";
  dropdown.style.display = "flex";

  results.forEach((result) => {
    const item = document.createElement("a");
    item.classList.add("M_SearchResult");
    item.href = result.url;

    item.innerHTML = `
  <span>${highlight(result.title, value)}</span>
  <span class="Q_SearchArrow"></span>
`;

    dropdown.appendChild(item);
  });
}
function highlight(text, value) {
  const regex = new RegExp(value, "gi");

  return text.replace(regex, (match) => {
    return `<span class="Q_Highlight">${match}</span>`;
  });
}
