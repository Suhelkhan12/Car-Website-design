"use strict";

const toggleMenu = document.querySelector(".nav--toggle");
const navMenu = document.querySelector(".nav--menu");
const closeMenu = document.querySelector(".nav--close");
const navLink = document.querySelectorAll(".nav--link");

// showing menu
toggleMenu.addEventListener("click", () => {
  navMenu.classList.add("active");
});

// hiding menu
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// hiding menu after clicking one link

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    const nav__menu = document.getElementById("nav_menu");
    nav__menu.classList.remove("active");
  })
);

//  color of header will be changed when we scroll otherwise header will be transparent

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  //  if the height of scroll becomes greater than 50% then do the following code
  this.scrollY >= 10
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
});

// swiper
let swiper = new Swiper(".popular--container", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
      // spaceBetween: 48,
    },
    0: {
      slidesPerView: 1,
      // spaceBetween: 48,
    },
  },
});

// mixitup filte featured

let mixerFeatured = mixitup(".featured--content", {
  selectors: {
    target: ".featured--card",
  },
  animation: {
    duration: 300,
  },
});

// active link fetureda
const linkFeatured = document.querySelectorAll(".featured--item");

function activeFeatured() {
  linkFeatured.forEach((l) => l.classList.remove("active--featured"));
  this.classList.add("active--featured");
}

linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

//  scroll up

function scrollUp() {
  const scrollUp = document.getElementById("scrollup");

  this.scrollY > 500
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//  scroll reveal animations

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: true,
});

sr.reveal(
  ".home--title , .popular--container , .features--img , .featured--filters "
);
sr.reveal(".home--subtitle", { delay: 350 });
sr.reveal(".home--elec", { delay: 400 });
sr.reveal(".home--img", { delay: 500 });
sr.reveal(".home--car-data", { delay: 550, interval: 100, origin: "bottom" });
sr.reveal(".home--button", { delay: 2000, interval: 100, origin: "bottom" });
sr.reveal(".about--group ,.offer--data", { origin: "left" });
sr.reveal(".about--data ,.offer--img", { origin: "right" });
sr.reveal(".features--map", { delay: 600, origin: "bottom" });
sr.reveal(".features--card-1", { origin: "left" });
sr.reveal(".features--card-2", { origin: "right" });
sr.reveal(".features--card-3", { origin: "left" });
sr.reveal(".featured--card", { interval: 300 });
sr.reveal(".featured--card ,.logos--content", { interval: 100 });
