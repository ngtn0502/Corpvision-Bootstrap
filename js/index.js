"use strict";

////////////////////////////////////////////////////// Search

document
  .querySelector("#header__search")
  .addEventListener("click", function (e) {
    e.preventDefault();

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
    .querySelector("#carousel__overlay1")
    .classList.toggle("dark-mode-overlay");
  document
    .querySelector("#carousel__overlay2")
    .classList.toggle("dark-mode-overlay");
  document
    .querySelector("#carousel__overlay3")
    .classList.toggle("dark-mode-overlay");
});

////////////////////////////////////////////////////// Header turn black & modify height

const checkHeader = function () {
  let scrollPositon = window.pageYOffset;
  if (scrollPositon >= 650) {
    document.querySelector("header").classList.add("header__darkMode");
    // ////
    document.querySelector(".header__navbar").classList.remove("my-3");
  }
  if (scrollPositon < 650) {
    document.querySelector("header").classList.remove("header__darkMode");
    document.querySelector(".header__navbar").classList.add("my-3");
  }
};
window.addEventListener("scroll", checkHeader);

////////////////////////////////////////////////////// Header DROPDOWN

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function (e) {
    document.querySelector("header").classList.toggle("dropdown__btn");
  });

////////////////////////////////////////////////////// Carousel mod
