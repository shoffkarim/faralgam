/* eslint-disable class-methods-use-this */
class Seo {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector("a[data-al]")) {
      const links = document.querySelectorAll("a[data-al]");
      links.forEach(function (i) {
        i.setAttribute("href", i.dataset.al);
        i.removeAttribute("data-al");
      });
    }
  }
}

export default Seo;