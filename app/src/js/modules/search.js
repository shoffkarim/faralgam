/* eslint-disable class-methods-use-this */
class Search {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-search")) {
      const searchList = document.querySelectorAll(".js-search");
      searchList.forEach(function (item) {
        const input = item.querySelector("input");
        const del = item.querySelector(".js-search-del");
        input.addEventListener("keyup", function () {
          if (input.value !== "") {
            del.classList.remove("hidden");
          } else {
            del.classList.add("hidden");
          }
        });
        del.addEventListener("click", function () {
          input.value = "";
          del.classList.add("hidden");
        });
      });
    }
  }
}

export default Search;