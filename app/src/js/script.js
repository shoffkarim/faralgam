/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// STYLES=============================================================================
import '../sass/style.sass';

import scrollMagic from "./modules/scrollMagicInit";

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
    768: {
      slidesPerView: 3
    },
    1366: {
      slidesPerView: 5
    }
  }
});

scrollMagic();