const slideLeft = document.querySelector('.left-side-with-slides');
const slideRight = document.querySelector('.right-side-slide');
const slideLength = slideLeft.querySelectorAll('.left-side-slide').length;
const buttonUp = document.querySelector('.button-action-up');
const buttonDown = document.querySelector('.button-action-down');

slideLeft.style.top = `-${(slideLength - 2) * 100}vh`;
slideRight.style.top = `-${(slideLength - 5) * 100}vh`;
let activeSlideIndex = 1;
let isEnabled = true;


function transform() {
    slideLeft.classList.add('shifting');
    slideRight.classList.add('shifting');

    slideLeft.style.top = `${(activeSlideIndex - 5) * 100}vh`
    slideRight.style.top = `${-activeSlideIndex * 100}vh`

    slideLeft.addEventListener('transitionend', () => {
        isEnabled = true;
        slideLeft.classList.remove('shifting');
        slideRight.classList.remove('shifting');

        if (activeSlideIndex == slideLength - 1) {
            slideLeft.style.top = `-${(slideLength - 2) * 100}vh`;
            slideRight.style.top = `-${(slideLength - 5) * 100}vh`;
            activeSlideIndex = 1;
        }
        if (activeSlideIndex == 0) {
            slideLeft.style.top = `-${(slideLength - 5) * 100}vh`;
            slideRight.style.top = `-${(slideLength - 2) * 100}vh`;
            activeSlideIndex = slideLength - 2;
        }
    });
};

function changeSlide(direction) {
    if (isEnabled) {
        isEnabled = false;
        if (direction === 'up') {
            activeSlideIndex++;
        }
        else if (direction === 'down') {
            activeSlideIndex--;
        }
        transform();
    }
};


function wheel(e) {
    if (isEnabled) {
        isEnabled = false;
        if (e.deltaY > 0) {
            activeSlideIndex++;
        }
        else if (e.deltaY < 0) {
            activeSlideIndex--;
        }
        transform();
    }
};

buttonUp.addEventListener('click', () => changeSlide('up'));
buttonDown.addEventListener('click', () => changeSlide('down'));
document.addEventListener('wheel', wheel);

console.log('Самооценка: 30/30 (исходный проект + бесконечный слайдер + пролистывание слайдера колесиком мыши).')
