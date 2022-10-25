
  // Nav toggle
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
  
  });