
const sliderLeft = document.querySelector('.left-side-with-slides');

const sliderRight = document.querySelector('.right-side-slide');
const sliderLength = sliderLeft.querySelectorAll('.left-side-slide').length;
const buttonUp = document.querySelector('.button-action-up');
const buttonDown =document.querySelector('.button-action-down')
let activeSliderIndex = 0;
console.log(sliderLength);
//sliderLeft.style.top = `-300vh`;
// buttonDown.style.top = `350vh`