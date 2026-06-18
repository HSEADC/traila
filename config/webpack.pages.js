const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", [
    "index",
    "allStyles",
    "widows",
    "searchVanilla",
  ]),
  createPages("./src/pages/interactive.html", "pages/interactive.html", [
    "index",
    "allStyles",
    "widows",
    "searchVanilla",
  ]),
  createPages(
    "./src/pages/interactive/main_ForestExam.html",
    "pages/interactive/main_ForestExam.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_ForestExam.html",
    "pages/interactive/test_ForestExam.html",
    [
      "index",
      "allStyles",
      "widows",
      "searchVanilla",
      "test_ForestExam",
      "tests",
    ],
  ),
  createPages(
    "./src/pages/interactive/result_ForestExam.html",
    "pages/interactive/result_ForestExam.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages(
    "./src/pages/interactive/main_Help.html",
    "pages/interactive/main_Help.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_Help.html",
    "pages/interactive/test_Help.html",
    ["index", "allStyles", "widows", "searchVanilla", "test_Help", "tests"],
  ),
  createPages(
    "./src/pages/interactive/result_Help.html",
    "pages/interactive/result_Help.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages(
    "./src/pages/interactive/main_CalmMovement.html",
    "pages/interactive/main_CalmMovement.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_CalmMovement.html",
    "pages/interactive/test_CalmMovement.html",
    [
      "index",
      "allStyles",
      "widows",
      "searchVanilla",
      "test_CalmMovement",
      "tests",
    ],
  ),
  createPages(
    "./src/pages/interactive/result_CalmMovement.html",
    "pages/interactive/result_CalmMovement.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages(
    "./src/pages/interactive/main_Route.html",
    "pages/interactive/main_Route.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_Route.html",
    "pages/interactive/test_Route.html",
    ["index", "allStyles", "widows", "searchVanilla", "test_Route", "tests"],
  ),
  createPages(
    "./src/pages/interactive/result_Route.html",
    "pages/interactive/result_Route.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages(
    "./src/pages/interactive/main_WhatToTake.html",
    "pages/interactive/main_WhatToTake.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_WhatToTake.html",
    "pages/interactive/test_WhatToTake.html",
    [
      "index",
      "allStyles",
      "widows",
      "searchVanilla",
      "test_WhatToTake",
      "tests",
    ],
  ),
  createPages(
    "./src/pages/interactive/result_WhatToTake.html",
    "pages/interactive/result_WhatToTake.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages(
    "./src/pages/interactive/main_Observation.html",
    "pages/interactive/main_Observation.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_Observation.html",
    "pages/interactive/test_Observation.html",
    [
      "index",
      "allStyles",
      "widows",
      "searchVanilla",
      "test_Observation",
      "tests",
    ],
  ),
  createPages(
    "./src/pages/interactive/result_Observation.html",
    "pages/interactive/result_Observation.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages(
    "./src/pages/interactive/main_Mushrooms.html",
    "pages/interactive/main_Mushrooms.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_Mushrooms.html",
    "pages/interactive/test_Mushrooms.html",
    ["index", "allStyles", "widows", "searchVanilla", "test_Mushrooms"],
  ),
  createPages(
    "./src/pages/interactive/result_Mushrooms.html",
    "pages/interactive/result_Mushrooms.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages(
    "./src/pages/interactive/main_WhereToGo.html",
    "pages/interactive/main_WhereToGo.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_WhereToGo.html",
    "pages/interactive/test_WhereToGo.html",
    ["index", "allStyles", "widows", "searchVanilla", "test_WhereToGo"],
  ),
  createPages(
    "./src/pages/interactive/result_WhereToGo.html",
    "pages/interactive/result_WhereToGo.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages(
    "./src/pages/interactive/main_ForestSet.html",
    "pages/interactive/main_ForestSet.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_ForestSet.html",
    "pages/interactive/test_ForestSet.html",
    ["index", "allStyles", "widows", "searchVanilla", "test_ForestSet"],
  ),
  createPages(
    "./src/pages/interactive/result_ForestSet.html",
    "pages/interactive/result_ForestSet.html",
    ["index", "allStyles", "widows", "searchVanilla", "result_tests"],
  ),
  createPages("./src/pages/calendar.html", "pages/calendar.html", [
    "index",
    "allStyles",
    "widows",
    "searchVanilla",
    "calendardata",
    "calendar",
  ]),
  createPages("./src/pages/aboutus.html", "pages/aboutus.html", [
    "index",
    "allStyles",
    "widows",
    "searchVanilla",
  ]),
  // после не правила
  // после не правила
  createPages("./src/404.html", "./404.html", ["index"]),
  createPages("./src/pages/articles.html", "pages/articles.html", [
    "index",
    "allStyles",
    "sectionArticles",
  ]),

  createPages(
    "./src/pages/articles/article_ticks.html",
    "pages/articles/article_ticks.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_storm.html",
    "pages/articles/article_storm.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_compass.html",
    "pages/articles/article_compass.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_trail.html",
    "pages/articles/article_trail.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_backpack.html",
    "pages/articles/article_backpack.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_clothing.html",
    "pages/articles/article_clothing.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_fire.html",
    "pages/articles/article_fire.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_tea.html",
    "pages/articles/article_tea.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_seasons.html",
    "pages/articles/article_seasons.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_biotopes.html",
    "pages/articles/article_biotopes.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_borovik.html",
    "pages/articles/article_borovik.html",
    ["index", "allStyles"],
  ),
  createPages(
    "./src/pages/articles/article_fox.html",
    "pages/articles/article_fox.html",
    ["index", "allStyles"],
  ),
];

module.exports = htmlPages;
