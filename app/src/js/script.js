/* eslint-disable no-undef */
// STYLES=============================================================================
import '../sass/style.sass';

// eslint-disable-next-line no-unused-vars
let shopsSlider = new Swiper(".shops-slider", {
  slidesPerView: 4,
  spaceBetween: 35,
  navigation: {
    nextEl: ".shops-slider-next",
    prevEl: ".shops-slider-prev",
  },
});