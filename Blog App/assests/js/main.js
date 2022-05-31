// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure that ${selector} exists or is typed correctly`
  );
};

// nav style on scroll
const scrollHeader = () => {
  const headerElement = selectElement("#header");
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);
// open menu and search popup
const menuToggleIcon = selectElement("#menu-toggle-icon");
const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.add("activated");
  menuToggleIcon.classList.add("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);
// open/close Search Popup
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");

formOpenBtn.addEventListener("click", () =>
  searchFormContainer.classList.add("activated")
);

formCloseBtn.addEventListener("click", () =>
  searchFormContainer.classList.remove("activated")
);
// close the search popup on esc keypress
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") searchFormContainer.classList.remove("activated");
});
// Switch theme add to localStorage
const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem('currentTheme');
if(currentTheme){
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click',()=>{
    bodyElement.classList.add('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme','themeActive');
    }else{
        localStorage.removeItem("currentTheme");
    }
});
// Swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }
});
