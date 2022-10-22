// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    // spaceBetween: 30,
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
const body = document.querySelector('body'),
navMenu = body.querySelector('.menu-content'),
navOpenBtn = body.querySelector('.navOpen'),
navCloseBtn = body.querySelector('.navClose');

if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add("open");
    })
}
if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
    })
}
// Change header bg color


// Scroll up button
  
  
  
// Nav link indicator
 
  
// Scroll Reveal Animation
// Search
let Box = document.querySelector(".search"),
searchIcon = document.querySelector(".search-icon"),
closeIcon = document.querySelector(".close-icon");

searchIcon.addEventListener('click', () => Box.classList.add("ope"));
closeIcon.addEventListener('click', () => Box.classList.remove("ope"));