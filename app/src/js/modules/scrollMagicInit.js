/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function scrollMagic() {
  if (
    document.documentElement.clientWidth > 767 && document.querySelector(".js-gallery")
  ) {
    let controller = new ScrollMagic.Controller({
      loglevel: 0,
    });
    let scenes = [];
    let cloudAnimation1 = new TimelineMax();
    cloudAnimation1
    .to(".gallery-column--1", 50, { x: "-100%", ease: Power1.easeOut }, 0)
    .to(".gallery-column--2", 150, { x: "-250%", ease: Power1.easeOut }, 0)
    .to(".gallery-column--4", 150, { x: "250%", ease: Power1.easeOut }, 0)
    .to(".gallery-column--5", 50, { x: "100%", ease: Power1.easeOut }, 0);
    // .to(".gallery-column--3", 150, {
    //   width: "100%",
    //   ease: Circ.easeOut,
    // }, 0);
    // TweenMax.set(".gallery-column--3", { transformOrigin: "0% 0%" });
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".js-gallery",
        duration: "100%",
        triggerHook: 0,
        offset: 0,
      })
        .setTween(cloudAnimation1)
        .setClassToggle(".gallery-column--3", "top")
        .addTo(controller)
    );
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".gallery-wrapper",
        duration: "120%",
        triggerHook: 0,
        offset: 0,
      })
        .setPin(".gallery-wrapper")
        .addTo(controller)
    );
  }
}

export default scrollMagic;
