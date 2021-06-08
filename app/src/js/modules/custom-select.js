/* eslint-disable class-methods-use-this */
class CustomSelect {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-custom-select")) {
      const wraps = document.querySelectorAll(".js-custom-select");
      wraps.forEach(function (i) {
        const active = i.querySelector(".js-select-choice");
        const input = i.querySelector(".js-select-input");
        const dropdown = i.querySelector(".js-select-dropdown");
        const elems = i.querySelectorAll(".js-select-item");
        const overlay = i.querySelector(".js-select-overlay");
        input.value = elems[0].dataset.value;
        active.innerHTML = elems[0].innerHTML;
        active.addEventListener("click", function () {
          dropdown.classList.toggle("open-dropdown");
          active.classList.toggle("open-dropdown");
        });
        overlay.addEventListener("click", function () {
          dropdown.classList.toggle("open-dropdown");
          active.classList.toggle("open-dropdown");
        });
        elems.forEach((j) => j.addEventListener("click", function () {
          input.value = j.dataset.value;
          active.innerHTML = j.innerHTML;
          active.classList.toggle("open-dropdown");
          dropdown.classList.toggle("open-dropdown");
        }));
      });
    }
  }
}
export default CustomSelect;