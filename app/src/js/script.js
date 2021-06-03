/* eslint-disable no-undef */
// STYLES=============================================================================
import '../sass/style.sass';

// eslint-disable-next-line no-unused-vars
let shopsSlider = new Swiper(".shops-slider", {
  slidesPerView: 5,
  spaceBetween: 35,
  loop: true,
  navigation: {
    nextEl: ".shops-slider-next",
    prevEl: ".shops-slider-prev",
  },
});