window.fixWidows = function () {
  document
    .querySelectorAll("p, h1, h2, h3, h4, h5, h6, span")
    .forEach((element) => {
      element.innerHTML = element.innerHTML.replace(
        /(^|[\s>])([а-яё]{1,2})\s/gi,
        "$1$2&nbsp;",
      );
    });
};

document.addEventListener("DOMContentLoaded", () => {
  window.fixWidows();
});
