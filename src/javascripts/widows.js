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

  const menuButton = document.querySelector(".A_MenuButton");
  const closeButton = document.querySelector(".A_MenuCloseButton");
  const mobileMenu = document.querySelector(".O_MobileMenu");

  if (menuButton && closeButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.remove("O_MobileMenu--hidden");
      document.body.classList.add("menu-open");
    });

    closeButton.addEventListener("click", () => {
      mobileMenu.classList.add("O_MobileMenu--hidden");
      document.body.classList.remove("menu-open");
    });
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-download]");

    if (!button) return;

    event.preventDefault();
    event.stopPropagation();

    const filePath = button.dataset.download;

    console.log("download:", filePath);

    const link = document.createElement("a");
    link.href = filePath;
    link.download = "";

    document.body.appendChild(link);
    link.click();
    link.remove();
  });
});
