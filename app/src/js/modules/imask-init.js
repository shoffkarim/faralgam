class InputMask {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector('.tel-mask')) {
      let tellist = document.querySelectorAll('.tel-mask');
      tellist.forEach(function (el) {
        let telMaskOptions = {
          mask: '+{7}(000)000-00-00',
          lazy: false,
        };
        // eslint-disable-next-line no-undef, no-unused-vars
        let mask = IMask(el, telMaskOptions);
      });
    }
  }
}
// eslint-disable-next-line import/prefer-default-export
export default InputMask;