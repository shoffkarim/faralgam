class Validation {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector(".js-submit")) {
      let btnsSubmit = document.querySelectorAll(".js-submit");
      btnsSubmit.forEach((i) => i.addEventListener("click", function (e) {
        const form = i.closest(".js-form");
        let validList = form.querySelectorAll(".js-valid");
        validList.forEach(function (j) {
          let value = j.value;
          let type = j.getAttribute("type");
          switch (type) {
            case "tel":
              // eslint-disable-next-line no-case-declarations, no-useless-escape
              let regTel = new RegExp(
                // eslint-disable-next-line no-useless-escape
                /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
                );
              if (!regTel.test(value)) {
                j.classList.add("error");
                j.classList.remove("good");
                e.preventDefault();
              } else {
                j.classList.add("good");
                j.classList.remove("error");
              }
              break;
            case "text":
              // eslint-disable-next-line no-case-declarations
              let regText = new RegExp(/^[а-яА-ЯёЁ]/);
              // eslint-disable-next-line no-case-declarations
              let regTextNumber = new RegExp(/[0-9]/);
              // eslint-disable-next-line no-case-declarations
              let regTextSimbol = new RegExp(/[-().^+,*@$%;&?!]/);
              // eslint-disable-next-line max-len
              if (!regText.test(value) || regTextNumber.test(value) || regTextSimbol.test(value)) {
                j.classList.add("error");
                j.classList.remove("good");
                e.preventDefault();
              } else {
                j.classList.add("good");
                j.classList.remove("error");
              }
              break;
            case "email":
              // eslint-disable-next-line no-case-declarations
              let regEmail = new RegExp(
                /^(?!.*@.*@.*$)(?!.*@.*--.*..*$)(?!.*@.*-..*$)(?!.*@.*-$)(.*@.+(..{1,11})?)$/
              );
              if (!regEmail.test(value)) {
                j.classList.add("error");
                j.classList.remove("good");
                e.preventDefault();
              } else {
                j.classList.add("good");
                j.classList.remove("error");
              }
              break;
            case "checkbox":
              // eslint-disable-next-line no-case-declarations, no-useless-escape
              let check = j.checked;
              if (!check) {
                j.classList.add("error");
                j.classList.remove("good");
                e.preventDefault();
              } else {
                j.classList.add("good");
                j.classList.remove("error");
              }
              break;
            case "date":
              // eslint-disable-next-line no-case-declarations
              let regDate = new RegExp(
                /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
              );
              if (!regDate.test(value)) {
                j.classList.add("error");
                j.classList.remove("good");
                e.preventDefault();
              } else {
                j.classList.add("good");
                j.classList.remove("error");
              }
              break;
            default:
              break;
          }
        });
      }));
    }
  }
}
// eslint-disable-next-line import/prefer-default-export
export default Validation;
