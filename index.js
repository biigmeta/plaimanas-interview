// initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguageDropdown();
});

function initializeLanguageDropdown() {
  const languageWrapper = document.getElementById("language-wrapper");
  const languageMenuBtn = document.getElementById("language-menu-button");
  const languageDropdown = document.getElementById("language-dropdown");

  const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;

  const openMenu = () => {
    languageDropdown.classList.remove("opacity-0", "invisible");
    languageDropdown.classList.add("opacity-100", "visible");
  };

  const closeMenu = () => {
    languageDropdown.classList.add("opacity-0", "invisible");
    languageDropdown.classList.remove("opacity-100", "visible");
  };

  /* ------------------ desktop behavior: show menu on hover ------------------ */
  languageWrapper.addEventListener("mouseenter", () => {
    if (isDesktop()) openMenu();
  });

  languageWrapper.addEventListener("mouseleave", () => {
    if (isDesktop()) closeMenu();
  });

  /* ------------------ mobile behavior: toggle menu on click ----------------- */
  languageMenuBtn.addEventListener("click", (e) => {
    if (!isDesktop()) {
      e.stopPropagation();
      languageDropdown.classList.contains("visible") ? closeMenu() : openMenu();
    }
  });

  document.addEventListener("click", (e) => {
    if (!languageWrapper.contains(e.target)) closeMenu();
  });

  window.addEventListener("resize", closeMenu);
}
