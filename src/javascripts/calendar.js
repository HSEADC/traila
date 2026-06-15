document.addEventListener("DOMContentLoaded", () => {
  const STATIC = window.CALENDAR_STATIC;
  const DATA = window.CALENDAR_MONTHS;

  if (!STATIC || !DATA) {
    console.error("Не найден calendar-data.js");
    return;
  }

  const state = {
    month: getCurrentMonthKey(),
    season: null,
    collectItems: [],
    modalIndex: 0,
  };

  const nodes = {
    header: document.querySelector(".O_HeaderCalendar"),
    monthIcon: document.querySelector(".M_CalendarMonth .Q_CalendarMonthIcon"),
    monthTitle: document.querySelector(".M_CalendarMonth .A_Heading-H2"),
    seasonTabs: document.querySelector(".M_SeasonTabs"),
    monthTabs: document.querySelector(".M_MonthTabs"),

    forestIndexCard: document.querySelector(".M_ForestIndexCard"),
    currentConditionsCard: document.querySelector(".M_CurrentConditionsCard"),
    trailComfortCard: document.querySelector(".M_TrailComfortCard"),
    passabilityIndexCard: document.querySelector(".M_PassabilityIndexCard"),
    skyConditionCard: document.querySelector(".M_SkyConditionCard"),
    natureActivityCard: document.querySelector(".M_NatureActivityCard"),

    collectTitle: document.querySelector(".O_CalendarCollect > .A_Heading-H2"),
    collectGroups: document.querySelector(".W_CollectGroups"),

    modal: document.querySelector(".O_CollectModal"),
    modalBack: document.querySelector(".A_CollectBack"),
    modalPrev: document.querySelector(".A_CollectModalPrev"),
    modalNext: document.querySelector(".A_CollectModalNext"),
  };

  init();

  function init() {
    if (!DATA[state.month]) state.month = "march";

    state.season = DATA[state.month].season;

    bindSeasonTabs();
    renderMonthTabs(state.season);
    renderMonth(state.month);
    bindModalControls();
  }

  function getCurrentMonthKey() {
    const keys = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    return keys[new Date().getMonth()];
  }

  function bindSeasonTabs() {
    if (!nodes.seasonTabs) return;

    const seasonButtons = nodes.seasonTabs.querySelectorAll("button");

    seasonButtons.forEach((button) => {
      const seasonKey = getSeasonKeyByTitle(button.textContent.trim());

      if (!seasonKey) return;

      button.dataset.season = seasonKey;

      button.addEventListener("click", () => {
        const firstMonth = STATIC.seasons[seasonKey].months[0];

        state.season = seasonKey;
        renderMonthTabs(seasonKey);
        renderMonth(firstMonth);
      });
    });
  }

  function getSeasonKeyByTitle(title) {
    return Object.entries(STATIC.seasons).find(
      ([, season]) => season.title.toLowerCase() === title.toLowerCase(),
    )?.[0];
  }

  function renderMonthTabs(seasonKey) {
    if (!nodes.monthTabs) return;

    nodes.monthTabs.innerHTML = "";

    STATIC.seasons[seasonKey].months.forEach((monthKey) => {
      const button = document.createElement("button");

      button.className = "A_SeasonTag A_ParagraphVar";
      button.type = "button";
      button.textContent = STATIC.monthNames[monthKey];
      button.dataset.month = monthKey;

      button.addEventListener("click", () => {
        renderMonth(monthKey);
      });

      nodes.monthTabs.appendChild(button);
    });
  }

  function renderMonth(monthKey) {
    const data = DATA[monthKey];

    if (!data) {
      console.warn(`Нет данных для месяца: ${monthKey}`);
      return;
    }

    state.month = monthKey;
    state.season = data.season;

    renderActiveTabs(monthKey, data.season);
    renderHeader(monthKey, data);
    renderDashboard(monthKey, data);
    renderCollect(data);
  }

  function renderActiveTabs(monthKey, seasonKey) {
    document
      .querySelectorAll(".M_SeasonTabs .A_SeasonTag")
      .forEach((button) => {
        button.classList.toggle(
          "is-active",
          button.dataset.season === seasonKey,
        );
      });

    document.querySelectorAll(".M_MonthTabs .A_SeasonTag").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.month === monthKey);
    });
  }

  function renderHeader(monthKey, data) {
    const season = STATIC.seasons[data.season];

    if (nodes.header) {
      nodes.header.style.backgroundImage = `url("../images/calendar/Q_HeaderCalendar_${capitalize(data.season)}.webp")`;
    }

    if (nodes.monthIcon) {
      nodes.monthIcon.src = season.icon;
      nodes.monthIcon.alt = `Иконка сезона: ${season.title}`;
    }

    if (nodes.monthTitle) {
      nodes.monthTitle.textContent = STATIC.monthNames[monthKey];
    }
  }

  function renderDashboard(monthKey, data) {
    renderCardBackgrounds(monthKey);

    renderForestIndex(monthKey, data);
    renderCurrentConditions(data);
    renderTrailComfort(monthKey, data);

    renderInfoCard("daylight", data.daylight, data.season);
    renderInfoCard("temperature", data.temperature, data.season);
    renderInfoCard("precipitation", data.precipitation, data.season);
    renderInfoCard("wind", data.wind, data.season);

    renderPassability(data);
    renderSky(data);
    renderNature(data);
  }

  function renderCardBackgrounds(monthKey) {
    const month = capitalize(monthKey);

    setCardBackground(nodes.forestIndexCard, `Q_ForestIndexChart_${month}.svg`);
    setCardBackground(
      nodes.currentConditionsCard,
      `Q_CurrentConditions_${month}.svg`,
    );
    setCardBackground(
      nodes.trailComfortCard,
      `Q_TrailComfortChart_${month}.svg`,
    );
    setCardBackground(
      nodes.passabilityIndexCard,
      `Q_PassabilityIndex_${month}.svg`,
    );
    setCardBackground(nodes.skyConditionCard, `Q_SkyCondition_${month}.svg`);
    setCardBackground(
      nodes.natureActivityCard,
      `Q_NatureActivity_${month}.svg`,
    );
  }

  function setCardBackground(element, fileName) {
    if (!element) return;

    element.style.backgroundImage = `url("../images/calendar/${fileName}")`;
  }

  function renderForestIndex(monthKey, data) {
    const result = nodes.forestIndexCard?.querySelector(".M_ConditionResult");
    const value = result?.querySelector(".A_Heading-H4");
    const label = result?.querySelector(".A_Paragraph, .A_Tag-Text");
    const icon = nodes.forestIndexCard?.querySelector(".Q_ConditionIcon");

    if (value) value.textContent = data.forestIndex[0];
    if (label) label.textContent = data.forestIndex[1];

    if (icon) {
      icon.src = STATIC.seasons[data.season].icon;
      icon.alt = `Иконка сезона: ${STATIC.seasons[data.season].title}`;
    }
  }

  function renderCurrentConditions(data) {
    const items =
      nodes.currentConditionsCard?.querySelectorAll(".M_ConditionItem") || [];

    items.forEach((item, index) => {
      const condition = data.current[index];
      const staticCondition = STATIC.currentConditions[index];

      if (!condition) return;

      updateConditionResult(item, condition[0], condition[1]);

      const icon = item.querySelector(".Q_ConditionIcon");
      if (icon && staticCondition?.icon) {
        icon.src = staticCondition.icon;
      }
    });
  }

  function renderTrailComfort(monthKey, data) {
    const dateLabels =
      nodes.trailComfortCard?.querySelectorAll(
        ".W_TrailComfortData .A_Tag-Text",
      ) || [];

    dateLabels.forEach((label, index) => {
      label.textContent = data.trailDates[index] || "";
    });
  }

  function renderInfoCard(cardKey, values, seasonKey) {
    const config = STATIC.infoCards[cardKey];
    const card = document.querySelector(config.selector);

    if (!card) return;

    const items = card.querySelectorAll(".M_InfoItem");

    items.forEach((item, index) => {
      const configItem = config.items[index];

      const labelText =
        cardKey === "precipitation" && seasonKey === "winter" && index === 1
          ? configItem.winterLabel
          : configItem.label;

      const icon = item.querySelector(".Q_InfoIcon");
      const label = item.querySelector(".A_Tag-Text, .A_Paragraph");
      const value = item.querySelector(".A_Heading-H4");

      if (icon) {
        icon.src = configItem.icon;
        icon.alt = `Иконка: ${labelText}`;
      }

      if (label) label.textContent = labelText;
      if (value) value.textContent = values[index] || "";
    });
  }

  function renderPassability(data) {
    STATIC.passability.forEach((config) => {
      const item = document.querySelector(config.selector);
      const value = data.passability[config.key];

      if (!item || value === undefined) return;

      updateConditionResult(item, value, config.label);

      const icon = item.querySelector(".Q_InfoIcon, .Q_ConditionIcon");
      const shouldRemoveIcon = data.manualLayout?.removeInfoIcon?.[config.key];

      if (icon) {
        icon.src = config.icon;
        icon.alt = `Иконка: ${config.label}`;

        if (shouldRemoveIcon) {
          icon.style.display = "none";
        } else {
          icon.style.display = "";
        }
      }

      const manualTop = data.manualLayout?.passabilityTop?.[config.key];

      item.style.top =
        manualTop !== undefined
          ? `${manualTop}rem`
          : `${getPassabilityTop(value)}rem`;

      item.style.setProperty("--passability-height", `${getPercent(value)}%`);
    });
  }

  function renderSky(data) {
    STATIC.sky.forEach((config) => {
      const item = document.querySelector(config.selector);
      const value = data.sky[config.key];

      if (!item || value === undefined) return;

      updateConditionResult(item, value, config.label);

      const icon = item.querySelector(".Q_InfoIcon, .Q_ConditionIcon");
      const shouldRemoveIcon = data.manualLayout?.removeInfoIcon?.[config.key];

      if (icon) {
        icon.src = config.icon;
        icon.alt = `Иконка: ${config.label}`;

        if (shouldRemoveIcon) {
          icon.style.display = "none";
        } else {
          icon.style.display = "";
        }
      }

      const manualPaddingLeft = data.manualLayout?.skyPaddingLeft?.[config.key];

      item.style.paddingLeft =
        manualPaddingLeft !== undefined
          ? `${manualPaddingLeft}rem`
          : `${getSkyPadding(value)}rem`;

      item.style.setProperty("--sky-width", `${getPercent(value)}%`);
    });
  }

  function renderNature(data) {
    const items = document.querySelectorAll(".M_NatureActivityItem");

    items.forEach((item, index) => {
      const config = STATIC.nature[index];
      if (!config) return;

      const value = data.nature[config.key];

      updateConditionResult(item, value, config.label);

      const icon = item.querySelector(".Q_InfoIcon, .Q_ConditionIcon");
      if (icon) {
        icon.src = config.icon;
        icon.alt = `Иконка: ${config.label}`;
      }

      item.style.setProperty("--activity-value", `${getPercent(value)}%`);
    });
  }

  function updateConditionResult(root, valueText, labelText) {
    const value = root.querySelector(".M_ConditionResult .A_Heading-H4");
    const label = root.querySelector(
      ".M_ConditionResult .A_Tag-Text, .M_ConditionResult .A_Paragraph",
    );

    if (value) value.textContent = valueText;
    if (label) label.textContent = labelText;
  }

  function renderCollect(data) {
    if (!nodes.collectTitle || !nodes.collectGroups) return;

    nodes.collectTitle.textContent = data.collectTitle;
    nodes.collectGroups.innerHTML = "";

    state.collectItems = normalizeCollectItems(data.collect);

    data.collect.forEach((group) => {
      const groupElement = document.createElement("div");
      groupElement.className = "M_CollectCategory";

      groupElement.innerHTML = `
        <div class="M_CollectCategoryHeader">
          <img
            class="Q_InfoIcon"
            src="${STATIC.collectCategoryIcons[group.type]}"
            alt="Иконка категории"
          />
          <h3 class="A_Heading-H3">${group.title}</h3>
        </div>

        <div class="W_CollectCards">
          ${group.items.map((title) => renderCollectCard(title)).join("")}
        </div>
      `;

      nodes.collectGroups.appendChild(groupElement);
    });

    bindCollectCards();
  }

  function normalizeCollectItem(item, groupTitle) {
    const isObject = typeof item === "object";

    const id = isObject ? item.id : item;
    const title = isObject ? item.title : item;

    const modalData =
      window.COLLECT_MODAL_DATA?.[id] ||
      window.COLLECT_MODAL_DATA?.[title] ||
      {};

    const image =
      window.COLLECT_IMAGES?.[id] ||
      window.COLLECT_IMAGES?.[title] ||
      "../images/calendar/Q_CollectImage_Placeholder.webp";

    return {
      id,
      title,
      image,
      description:
        modalData.description || getDefaultDescription(title, groupTitle),
      chance: modalData.chance || "—",
      ease: modalData.ease || "—",
      group: groupTitle,
    };
  }

  function normalizeCollectItems(groups) {
    return groups.flatMap((group) =>
      group.items.map((item) => normalizeCollectItem(item, group.title)),
    );
  }

  function renderCollectCard(item) {
    const collectItem = normalizeCollectItem(item, "");

    return `
    <div class="M_CollectCard" data-collect-id="${escapeHtml(collectItem.id)}">
      <div class="M_CollectCardMedia">
        <img
          class="Q_CollectImage"
          src="${collectItem.image}"
          alt="Изображение: ${escapeHtml(collectItem.title)}"
          loading="lazy"
        />
        <button class="A_Button A_CollectLink" type="button" aria-label="Открыть карточку">
          <img
            class="Q_CollectLink"
            src="${STATIC.collectArrowIcon}"
            alt="Иконка стрелки"
          />
        </button>
      </div>
      <h4 class="A_Heading-H4">${escapeHtml(collectItem.title)}</h4>
    </div>
  `;
  }

  function bindCollectCards() {
    document.querySelectorAll(".M_CollectCard").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.collectId;
        const index = state.collectItems.findIndex((item) => item.id === id);

        openCollectModal(index >= 0 ? index : 0);
      });
    });
  }

  function bindModalControls() {
    if (!nodes.modal) return;

    nodes.modalBack?.addEventListener("click", closeCollectModal);

    nodes.modalPrev?.addEventListener("click", () => {
      showCollectModalItem(state.modalIndex - 1);
    });

    nodes.modalNext?.addEventListener("click", () => {
      showCollectModalItem(state.modalIndex + 1);
    });

    nodes.modal
      .querySelector(".W_CollectModalOverlay")
      ?.addEventListener("click", closeCollectModal);

    document.addEventListener("keydown", (event) => {
      if (nodes.modal.hidden) return;

      if (event.key === "Escape") closeCollectModal();
      if (event.key === "ArrowLeft") showCollectModalItem(state.modalIndex - 1);
      if (event.key === "ArrowRight") {
        showCollectModalItem(state.modalIndex + 1);
      }
    });
  }

  function openCollectModal(index) {
    if (!state.collectItems.length) return;

    showCollectModalItem(index);

    nodes.modal.hidden = false;
    document.body.classList.add("is-modal-open");
  }

  function closeCollectModal() {
    nodes.modal.hidden = true;
    document.body.classList.remove("is-modal-open");
  }

  function showCollectModalItem(index) {
    const count = state.collectItems.length;

    if (!count) return;

    state.modalIndex = (index + count) % count;

    const item = state.collectItems[state.modalIndex];

    nodes.modal.querySelector("[data-modal-title]").textContent = item.title;
    nodes.modal.querySelector("[data-modal-description]").textContent =
      item.description;
    nodes.modal.querySelector("[data-modal-chance]").textContent = item.chance;
    nodes.modal.querySelector("[data-modal-risk]").textContent = item.ease;

    const image = nodes.modal.querySelector(".Q_CollectModalImage");

    if (image) {
      image.src = item.image;
      image.alt = `Изображение: ${item.title}`;
    }
  }

  function getDefaultDescription(title, groupTitle) {
    return `${title}: сезонная находка из категории «${groupTitle}».`;
  }

  function getPercent(value) {
    return Number.parseInt(String(value).replace("%", ""), 10) || 0;
  }

  function getPassabilityTop(value) {
    const percent = getPercent(value);
    return Math.round(80 - percent);
  }

  function getSkyPadding(value) {
    const percent = getPercent(value);
    return Math.round(20 + percent * 0.85);
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function escapeHtml(string) {
    return String(string)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
});
