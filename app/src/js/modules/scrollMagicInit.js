/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function scrollMagic() {
  if (
    document.documentElement.clientWidth > 1200 && document.querySelector(".js-gallery")
  ) {
    let controller = new ScrollMagic.Controller({
      loglevel: 0,
    });
    let scenes = [];
    let cloudAnimation1 = new TimelineMax();
    cloudAnimation1
    .to(".gallery-column--1", 500, { x: "-=250%", ease: Power2.easeOut }, 0)
    .to(".gallery-column--2", 500, { x: "-=250%", ease: Power2.easeOut }, 0)
    .to(".gallery-column--4", 500, { x: "+=250%", ease: Power2.easeOut }, 0)
    .to(".gallery-column--5", 500, { x: "+=250%", ease: Power2.easeOut }, 0)
    .to(".gallery-main", 500, { y: "-=250%", ease: Power2.easeOut }, 0)
    .to(".gallery-column--3 .gallery-item", 500, {
      width: "100%",
      ease: Power2.easeOut,
    }, 0);
    // TweenMax.set(".gallery-column--3 .gallery-item", { transformOrigin: "0% 0%" });
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".js-gallery",
        duration: "500%",
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
        duration: "500%",
        triggerHook: 0,
        offset: 0,
      })
        .setPin(".gallery-wrapper")
        .addTo(controller)
    );
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".js-shops",
        duration: "300%",
        triggerHook: 0.8,
        offset: 0,
      })
        .setClassToggle(".js-shops", "animate")
        .addTo(controller)
    );
  }
  if (
    document.documentElement.clientWidth > 1200 && document.querySelector(".js-numbers")
  ) {
    let controller = new ScrollMagic.Controller({
      loglevel: 0,
    });
    let scenes = [];
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".js-numbers",
        duration: "200%",
        triggerHook: 0.8,
        offset: 0,
      })
        .setClassToggle(".js-numbers", "animation")
        .addTo(controller)
    );
  }
  if (
    document.documentElement.clientWidth > 1200 && document.querySelector(".js-achievements")
  ) {
    let controller = new ScrollMagic.Controller({
      loglevel: 0,
    });
    let scenes = [];
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".about-achievements__background--1",
        duration: "120%",
        triggerHook: 1,
        offset: 0,
      })
        .setClassToggle(".about-achievements__background--1", "show")
        .addTo(controller)
    );
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".about-achievements__background--2",
        duration: "120%",
        triggerHook: 1,
        offset: 0,
      })
        .setClassToggle(".about-achievements__background--2", "show")
        .addTo(controller)
    );
    scenes.push(
      new ScrollMagic.Scene({
        triggerElement: ".about-achievements__background--3",
        duration: "120%",
        triggerHook: 1,
        offset: 0,
      })
        .setClassToggle(".about-achievements__background--3", "show")
        .addTo(controller)
    );
  }
}

export default scrollMagic;
