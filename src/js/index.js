import {tns} from "../../node_modules/tiny-slider/src/tiny-slider.js"

var slider = tns({
    container: '.projects__slider',
    items: 4,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    autoWidth: true,
    autoHeight: true,
    controls: false
  });

document.querySelector(".projects__arrow-left").addEventListener('click',() => {
    slider.goTo('prev');
})

document.querySelector(".projects__arrow-right").addEventListener('click',() => {
    slider.goTo('next');
})