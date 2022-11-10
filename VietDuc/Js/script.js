// Nav toggle
let toggle = document.querySelector(".navOpen"),
  navOpenBtn = document.querySelector(".menu-content");
toggle.onclick = function () {
  navOpenBtn.classList.toggle("open");
};
// message toggle
let toggle1 = document.querySelector(".mess-icon"),
  messOpenBtn = document.querySelector(".messageBox");
toggle1.onclick = function () {
  messOpenBtn.classList.toggle("open");
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
});

// popup newsletter
const openPopup = document.getElementById("oPopup");
const closePopup = document.getElementById("cPopup");
const popup = document.getElementById("popup");
openPopup.addEventListener("click", function() {
  popup.classList.add("show");
});
closePopup.addEventListener("click", function() {
  popup.classList.remove("show");
});
