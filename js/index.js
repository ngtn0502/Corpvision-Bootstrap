"use strict";
///////////// Smooth scrolling by delegate DOM

document.querySelector("#navbar-nav").addEventListener("click", (element) => {
  element.preventDefault();
  console.log(element.target);
  if (element.target.classList.contains("nav-a")) {
    const id = element.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

////////////////////////////////////////////////////// Search

document
  .querySelector("#header__search")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".overlay__search").classList.toggle("hidden");
    document.querySelector(".search__text").focus();
  });

document.onkeydown = function (e) {
  if (e.key == "Escape" || e.key == "Esc" || e.key == "Enter") {
    document.querySelector(".overlay__search").classList.add("hidden");
    document.querySelector(".search__text").value = "";
  }
};

document
  .querySelector(".search__exitbtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".overlay__search").classList.add("hidden");
    document.querySelector(".search__text").value = "";
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
  let headerHeight = document.querySelector("#header").clientHeight;
  if (scrollPositon >= headerHeight) {
    document.querySelector("#header").classList.add("header__darkMode");
    // ////
    document.querySelector(".header__navbar").classList.remove("my-3");
  }
  if (scrollPositon < 650) {
    document.querySelector("#header").classList.remove("header__darkMode");
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

////////////////////////////////////////////////////// Owl Carousel LIB
