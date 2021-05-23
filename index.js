"use strict";

////////////////////////////////////////////////////// Search

document
  .querySelector("#header__search")
  .addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "block";
  });

////////////////////////////////////////////////////// Darkmode body

const buttonDarkMode = document.getElementById("darkMode-btn");
buttonDarkMode.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark");
});

////////////////////////////////////////////////////// Darkmode overlay

buttonDarkMode.addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(".carousel__overlay")
    .classList.toggle("dark-mode-overlay");
});

////////////////////////////////////////////////////// Carousel mod

////////////////////////////////////////////////////// Fixed header turn black

const checkHeader = function () {
  let scrollPositon = window.pageYOffset;
  if (scrollPositon >= 650) {
    document.querySelector("header").classList.add("header__darkMode");
  }
  if (scrollPositon < 650) {
    console.log(`sds`);
    document.querySelector("header").classList.remove("header__darkMode");
  }
};
window.addEventListener("scroll", checkHeader);
