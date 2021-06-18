/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.679646, 37.279393],
    zoom: 16
  });
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Московская обл., г.Одинцово, ул.Ново&#8209;Спортивная, д. 4, кор. 3, офис 2',
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      // Размеры метки.
      iconImageSize: [55.679646, 37.279393],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-30, -40]
  });
  myMap.geoObjects.add(myPlacemark);
}
