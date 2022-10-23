// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Nav open close
let toggle = document.querySelector(".navOpen"),
  navOpenBtn = document.querySelector(".menu-content");
toggle.onclick = function () {
  navOpenBtn.classList.toggle("open");
};

// Search
let Box = document.querySelector(".search"),
  searchIcon = document.querySelector(".search-icon"),
  closeIcon = document.querySelector(".close-icon");

searchIcon.addEventListener("click", () => Box.classList.add("ope"));
closeIcon.addEventListener("click", () => Box.classList.remove("ope"));

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY > 100) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }
  console;

  // Scroll up button
  const scrollUpBtn = document.querySelector(".scrollUp-btn");

  if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }
  // Nav link indicator
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 100;

    let navId = document.querySelector(
      `.menu-content a[href='#${section.id}']`
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-nav");
    } else {
      navId.classList.remove("active-nav");
    }

    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    });
  });
});
// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter
.logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, {interval:100,})

sr.reveal(`.about-imageContent, .menu-items`, {origin: 'left'})
sr.reveal(`.about-details, .time-table`, {origin: 'right'})
