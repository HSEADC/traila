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
    "searchVanilla",
  ]),
  createPages("./src/pages/interactive.html", "pages/interactive.html", [
    "index",
    "allStyles",
    "searchVanilla",
  ]),
  createPages(
    "./src/pages/interactive/main_ForestExam.html",
    "pages/interactive/main_ForestExam.html",
    ["index", "allStyles", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/test_ForestExam.html",
    "pages/interactive/test_ForestExam.html",
    ["index", "allStyles", "searchVanilla"],
  ),
  createPages(
    "./src/pages/interactive/result_ForestExam.html",
    "pages/interactive/result_ForestExam.html",
    ["index", "allStyles", "searchVanilla"],
  ),
  // после не правила
  createPages("./src/404.html", "./404.html", ["index"]),
  createPages("./src/pages/articles.html", "pages/articles.html", [
    "index",
    "allStyles",
    "sectionArticles",
  ]),

  createPages("./src/pages/calendar.html", "pages/calendar.html", [
    "index",
    "allStyles",
  ]),
  createPages(
    "./src/pages/interactive/main_test_mushroom.html",
    "pages/interactive/main_test_mushroom.html",
    ["index"],
  ),

  createPages(
    "./src/pages/interactive/main_test2_questions.html",
    "pages/interactive/main_test2_questions.html",
    ["index"],
  ),
  createPages(
    "./src/pages/interactive/test_mushroom.html",
    "pages/interactive/test_mushroom.html",
    ["index", "testMushrooms"],
  ),

  createPages(
    "./src/pages/interactive/test2_questions.html",
    "pages/interactive/test2_questions.html",
    ["index", "allStyles", "testsExam", "testForestAttention"],
  ),
  createPages(
    "./src/pages/interactive/results_test_mushrooms.html",
    "pages/interactive/results_test_mushrooms.html",
    ["index", "testMushroomResult", "allStyles"],
  ),

  createPages(
    "./src/pages/interactive/results_test_exam_attention.html",
    "pages/interactive/results_test_exam_attention.html",
    ["index", "testForestAttentionResult", "allStyles"],
  ),
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
