"use strict";
const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
const activeCard = document.querySelector(".active");

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("card")) {
    const link = e.target;

    const siblings = link.closest(".container").querySelectorAll(".card");

    siblings.forEach(function (el) {
      el.classList.remove("active");
      if (el === link) {
        el.classList.add("active");
      }
    });
  }
});

// You can also do it like this

// cards.forEach(function (e) {
//   e.addEventListener("click", function () {
//     removeActive();
//     e.classList.add("active");
//   });
// });

// function removeActive() {
//   cards.forEach(function (e) {
//     e.classList.remove("active");
//   });
// }
