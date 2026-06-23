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
  createPages("./src/404.html", "./404.html", [
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
  createPages("./src/pages/routes.html", "pages/routes.html", [
    "index",
    "allStyles",
    "widows",
    "searchVanilla",
  ]),
  createPages(
    "./src/pages/routes/bottomlessLake.html",
    "pages/routes/bottomlessLake.html",
    ["index", "allStyles", "widows", "searchVanilla", "map_bottomlessLake"],
  ),
  createPages(
    "./src/pages/routes/losinyOstrovTrail.html",
    "pages/routes/losinyOstrovTrail.html",
    ["index", "allStyles", "widows", "searchVanilla", "map_losinyOstrovTrail"],
  ),
  createPages(
    "./src/pages/routes/reserveForest.html",
    "pages/routes/reserveForest.html",
    ["index", "allStyles", "widows", "searchVanilla", "map_reserveForest"],
  ),
  createPages(
    "./src/pages/routes/sparrowHills.html",
    "pages/routes/sparrowHills.html",
    ["index", "allStyles", "widows", "searchVanilla", "map_sparrowHills"],
  ),
  createPages(
    "./src/pages/routes/troparevoForest.html",
    "pages/routes/troparevoForest.html",
    ["index", "allStyles", "widows", "searchVanilla", "map_troparevoForest"],
  ),
  createPages("./src/pages/articles.html", "pages/articles.html", [
    "index",
    "allStyles",
    "widows",
    "searchVanilla",
    "sectionArticles",
  ]),
  createPages(
    "./src/pages/articles/interview.html",
    "pages/articles/interview.html",
    ["index", "allStyles", "widows", "searchVanilla"],
  ),
];

module.exports = htmlPages;
