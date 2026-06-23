document.addEventListener("DOMContentLoaded", () => {
  const filterHeader = document.querySelector(".M_FilterHeader");
  const filterGroups = document.querySelectorAll(".M_FilterGroup");
  const articles = Array.from(document.querySelectorAll(".M_GuideFlex"));
  const showMoreButton = document.querySelector(".A_ShowMoreButton");

  const ITEMS_PER_PAGE = 9;

  let visibleCount = ITEMS_PER_PAGE;
  let activeCategory = "all";
  let activeTime = null;

  const categoryMap = {
    все: "all",
    безопасность: "safety",
    навигация: "navigation",
    экипировка: "equipment",
    питание: "food",
    экспертиза: "expertise",
    микология: "mycology",
  };

  filterHeader.addEventListener("click", () => {
    filterGroups.forEach((group) => {
      group.classList.toggle("is-open");
    });
  });

  const categoryTags = filterGroups[0].querySelectorAll(".M_FilterTag");
  const timeTags = filterGroups[1].querySelectorAll(".M_FilterTag");

  categoryTags.forEach((tag) => {
    const text = tag.textContent.trim().toLowerCase();

    if (text === "все") {
      tag.classList.add("M_FilterTag--active");
    }
  });

  function getFilteredArticles() {
    return articles.filter((article) => {
      const categoryMatch =
        activeCategory === "all" || article.dataset.category === activeCategory;

      const timeMatch =
        activeTime === null || article.dataset.time === activeTime;

      return categoryMatch && timeMatch;
    });
  }

  function renderArticles() {
    const filteredArticles = getFilteredArticles();

    articles.forEach((article) => {
      article.style.display = "none";
    });

    filteredArticles.slice(0, visibleCount).forEach((article) => {
      article.style.display = "flex";
    });

    if (filteredArticles.length > visibleCount) {
      showMoreButton.style.display = "flex";
    } else {
      showMoreButton.style.display = "none";
    }
  }

  categoryTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      categoryTags.forEach((item) => {
        item.classList.remove("M_FilterTag--active");
      });

      tag.classList.add("M_FilterTag--active");

      const text = tag.textContent.trim().toLowerCase();
      activeCategory = categoryMap[text] || "all";

      visibleCount = ITEMS_PER_PAGE;
      renderArticles();
    });
  });

  timeTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const isActive = tag.classList.contains("M_FilterTag--active");

      timeTags.forEach((item) => {
        item.classList.remove("M_FilterTag--active");
      });

      if (isActive) {
        activeTime = null;
      } else {
        tag.classList.add("M_FilterTag--active");
        activeTime = tag.textContent.trim().replace(" мин", "");
      }

      visibleCount = ITEMS_PER_PAGE;
      renderArticles();
    });
  });

  showMoreButton.addEventListener("click", () => {
    visibleCount += ITEMS_PER_PAGE;
    renderArticles();
  });

  renderArticles();
});
