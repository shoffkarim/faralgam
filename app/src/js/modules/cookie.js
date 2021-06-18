/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class Cookie {
  constructor() {
    this.init();
  }

  init() {
    const cookie = document.querySelector(".cookie");
    const btnCloseCookie = document.querySelector(".js-btn-cookie");
    btnCloseCookie.addEventListener("click", function (e) {
      e.preventDefault();
      cookie.classList.remove("cookie-open");
      // this.setCookie("cookie", "close");;
    });
  }

  // TO DO когда будет тестовая сделать сохранение куки
  // setCookie(name, value) {
  //   let cookieString = `${name}=${escape(value)}`;
  //   let path = "/";
  //   let expires = "expires=Mon,01-Jan-2120 00:00:00 GMT;";
  //   if (path) cookieString += `; path=${escape(path)}`;
  //   if (expires) cookieString += `;${expires}`;
  //   document.cookie = cookieString;
  // }

  // getCookie(cookieName) {
  //   let results = document.cookie.match(`(^|;) ?${cookieName}=([^;]*)(;|$)`);

  //   if (results) {
  //     return (unescape(results[2]));
  //   }
  //   return null;
  // }
}
export default Cookie;