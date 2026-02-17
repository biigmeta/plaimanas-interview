// initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguageDropdown();
  initializeMenuToggle();
  initializeScrollAnimations();
});

document.addEventListener("scroll", () => {
  const floatingImg = document.getElementById("plaimanas-floating-img");
  if (window.scrollY > 0) {
    floatingImg.classList.add("scale-down");
  } else {
    floatingImg.classList.remove("scale-down");
  }
});

function initializeScrollAnimations() {
  $(".scrolling").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    swipe: false,
    swipeToSlide: false,
    cssEase: "linear",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.25,
        },
      },
    ],
  });
}

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

function initializeMenuToggle() {
  const menuToggleBtn = document.getElementById("menu-toggle-button");
  const menuImage = document.querySelector("#menu-toggle-button img");
  const menu = document.getElementById("mobile-menu");
  menuToggleBtn.addEventListener("click", () => {
    menuToggleBtn.classList.toggle("active");
    const isActive = menuToggleBtn.classList.contains("active");
    if (isActive) {
      menu.classList.remove("hidden");
      menuImage.src = "assets/svg/close-menu.svg";
    } else {
      menu.classList.add("hidden");
      menuImage.src = "assets/svg/menu.svg";
    }
  });
}

function initializeMobileMenuToggle() {}

function toggleMobileAccordion(e) {
  const target = e.target;
  target.classList.toggle("font-bold");
  target.classList.toggle("text-[24px]");

  const content = document.getElementById("mobile-accordion-menu");
  const icon = document.getElementById("mobile-accordion-icon");

  // close
  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    content.style.padding = "0";
    content.style.marginBottom = "0";
    content.classList.add("invisible");
    icon.classList.remove("rotate-180");
    icon.classList.remove("w-4");
    icon.classList.remove("h-4");
    icon.classList.remove("mb-4");
  } else {
    // open
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.padding = "18px";
    content.style.marginBottom = "42px";
    content.classList.remove("invisible");
    icon.classList.add("rotate-180");
    icon.classList.add("w-4");
    icon.classList.add("h-4");
    icon.classList.add("mb-4");
  }
}

async function selectFAQMenu() {
  $(".faq-menu").removeClass("active");
  $(this).addClass("active");
  const target = $(this).attr("name");

  $(".faq-content").removeClass("active");
  $(`#faq-${target}`).addClass("active");
}

function toggleFAQAccordion(name, index) {
  const content = document.getElementById(`content-${name}-${index}`);
  const icon = document.getElementById(`icon-${name}-${index}`);

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    icon.classList.add("rotate-180");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.remove("rotate-180");
  }
}
