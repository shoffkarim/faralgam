/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// STYLES=============================================================================
import '../sass/style.sass';
import BubbleCreator from './modules/bubble-hover';
import CustomSelect from './modules/custom-select';
import Popup from './modules/popup';
import scrollMagic from "./modules/scrollMagicInit";

if (document.querySelector(".js-bubble-hover")) {
  let bubbleCreators = [];
  document.querySelectorAll(".js-bubble-hover").forEach(function (item) {
      bubbleCreators.push(new BubbleCreator(item));
  });

  window.addEventListener("resize", function () {
      bubbleCreators.forEach(function (item) {
          item.calcBubbleSize();
      });
  });
}

const popup = new Popup();
const select = new CustomSelect();
// eslint-disable-next-line no-unused-vars
let shopsSlider = new Swiper(".shops-slider", {
  slidesPerView: 5,
  spaceBetween: 35,
  loop: false,
  navigation: {
    nextEl: ".shops-slider-next",
    prevEl: ".shops-slider-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15
    },
    650: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3.5
    },
    1366: {
      slidesPerView: 5
    }
  }
});

const swiper = new Swiper(".gallery-popup-slider", {
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery-slider-next",
    prevEl: ".gallery-slider-prev",
  },
});

scrollMagic();