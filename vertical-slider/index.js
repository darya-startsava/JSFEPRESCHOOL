const slideLeft = document.querySelector('.left-side-with-slides');
const slideRight = document.querySelector('.right-side-slide');
const slideLength = slideLeft.querySelectorAll('.left-side-slide').length;
const buttonUp = document.querySelector('.button-action-up');
const buttonDown = document.querySelector('.button-action-down');

let activeSlideIndex = 0;
let isEnabled = true;
slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

function transform() {
    slideRight.style.transform = `translateY(-${activeSlideIndex * slideLeft.clientHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideLeft.clientHeight}px)`;
    slideRight.addEventListener('transitionend', () => { isEnabled = true; });
};

function changeSlide(direction) {
    if (isEnabled) {
        isEnabled = false;
        if (direction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex > slideLength - 1) {
                activeSlideIndex = 0;
            }
        }
        else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slideLength - 1;
            }
        }
        transform();
    }
};


function wheel(e) {
    if (isEnabled) {
        isEnabled = false;
        if (e.deltaY > 0) {
            activeSlideIndex++;
            if (activeSlideIndex > slideLength - 1) {
                activeSlideIndex = 0;
            }
        }
        else if (e.deltaY < 0) {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slideLength - 1;
            }
        }
        transform();
    }
};

buttonUp.addEventListener('click', () => changeSlide('up'));
buttonDown.addEventListener('click', () => changeSlide('down'));
document.addEventListener('wheel', wheel);
