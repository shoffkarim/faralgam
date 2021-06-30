/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

import '../sass/style.sass';
import BubbleCreator from './modules/bubble-hover';
import Cookie from './modules/cookie';
import CustomSelect from './modules/custom-select';
import InputMask from './modules/imask-init';
import Popup from './modules/popup';
import scrollMagic from "./modules/scrollMagicInit";
import Search from './modules/search';
import Seo from './modules/seo';
import Validation from './modules/validation';

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

const seo = new Seo();
const popup = new Popup();
const select = new CustomSelect();
const valid = new Validation();
const search = new Search();
const cookie = new Cookie();
const inputMask = new InputMask();

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

const gallerySlider = new Swiper(".gallery-popup-slider", {
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery-slider-next",
    prevEl: ".gallery-slider-prev",
  },
});
const galleryBtns = document.querySelectorAll(".js-gallery-btn");
galleryBtns.forEach((btn) => btn.addEventListener("click", function () {
  gallerySlider.slideTo(btn.dataset.id - 1, 0);
}));

let cardThumbSlider = new Swiper(".card-thumb", {
  slidesPerView: 1,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

let cardSlider = new Swiper(".card-slider", {
  slidesPerView: 1,
  loop: false,
  thumbs: {
    swiper: cardThumbSlider,
  },
  navigation: {
    nextEl: ".card-slider-btn--next",
    prevEl: ".card-slider-btn--prev",
  },
});

let awardsSlider = new Swiper(".awards-slider", {
  slidesPerView: 9,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".awards-btn-next",
    prevEl: ".awards-btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2.5
    },
    480: {
      slidesPerView: 4
    },
    767: {
      slidesPerView: 5
    },
    1200: {
      slidesPerView: 7
    },
    1367: {
      slidesPerView: 9
    }
  }
});

let newsSlider = new Swiper(".news-slider", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".news-btn-next",
    prevEl: ".news-btn-prev",
  },
  breakpoints: {
    1366: {
      slidesPerView: 1
    }
  }
});

scrollMagic();
