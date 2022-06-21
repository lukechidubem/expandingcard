'use strict';
const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
const activeCard = document.querySelector('.active');

const bImages = [
  'WA0061',
  'WA0062',
  'WA0063',
  'WA0064',
  'WA0065',
  'WA0066',
  'WA0067',
  'WA0068',
  'WA0069',
  'WA0070',
  'WA0071',
  'WA0072',
  'WA0107',
  'WA0120',
  'WA0167',
  'WA0052',
  'WA0053',
  'WA0054',
  'WA0055',
  'WA0056',
  'WA0057',
  'WA0058',
  'WA0059',
  'WA0114',
  'WA0117',
  'WA0120',
  'WA0141',
  'WA0159',
  'WA0167',
  'WA0176',
  'WA0187',
  'WA0221',
  'WA0248',
  'WA0273',
  'WA0317',
  'WA0362',
  'WA0363',
  'WA0440',
  'WA0490',
];

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('card')) {
    const link = e.target;

    const siblings = link.closest('.container').querySelectorAll('.card');

    const bRandom = Math.floor(Math.random() * bImages.length);

    siblings.forEach(function (el) {
      el.classList.remove('active');
      if (el === link) {
        el.classList.add('active');
        el.style.backgroundImage = `url('/B-images/IMG-20210203-${bImages[bRandom]}.jpg')`;
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

// Progress Bar

// const btnUp = document.querySelector(".btn-up");
// const btnDown = document.querySelector(".btn-down");
// const progress = document.querySelector("progress");
// const proPercent = document.querySelector(".pro-percent");

// btnUp.addEventListener("click", function () {
//   if (progress.value < 100) {
//     progress.value += 20;
//     proPercent.textContent = `${progress.value}%`;
//   }
// });

// btnDown.addEventListener("click", function () {
//   if (progress.value <= 100) {
//     progress.value -= 20;
//     proPercent.textContent = `${progress.value}%`;
//   }
// });
