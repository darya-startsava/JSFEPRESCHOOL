const slideLeft = document.querySelector('.left-side-with-slides');
const slideRight = document.querySelector('.right-side-slide');
const slideLength = slideLeft.querySelectorAll('.left-side-slide').length;
const buttonUp = document.querySelector('.button-action-up');
const buttonDown = document.querySelector('.button-action-down');

let activeSlideIndex = 0;
console.log(slideLength);
slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0;
        };
    }
    else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        };
    };
    slideRight.style.transform = `translateY(-${activeSlideIndex * slideLeft.clientHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideLeft.clientHeight}px)`;
};


function wheel(e) {
    if (e.deltaY > 0) {
        activeSlideIndex++;
        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0;
        };
    }
    else if (e.deltaY < 0) {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        };
    };
    slideRight.style.transform = `translateY(-${activeSlideIndex * slideLeft.clientHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideLeft.clientHeight}px)`;
};

buttonUp.addEventListener('click', () => changeSlide('up'));
buttonDown.addEventListener('click', () => changeSlide('down'));
document.addEventListener('wheel', wheel);
