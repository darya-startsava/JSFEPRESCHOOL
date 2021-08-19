const slideLeft = document.querySelector('.left-side-with-slides');

const slideRight = document.querySelector('.right-side-slide');
const slideLength = slideLeft.querySelectorAll('.left-side-slide').length;
const buttonUp = document.querySelector('.button-action-up');
const buttonDown = document.querySelector('.button-action-down');

let activeSlideIndex = 0;
console.log(slideLength);
slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

const changeSlide = (direction) => {
    const sliderHeight = slideLeft.clientHeight;
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
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
buttonUp.addEventListener('click', () => changeSlide('up'));
buttonDown.addEventListener('click', () => changeSlide('down'));




// const sliderContainer = document.querySelector('.container-fluid')
// const slideRight = document.querySelector('.right-slide')
// const slideLeft = document.querySelector('.left-slide')
// const upButton = document.querySelector('.up-button')
// const downButton = document.querySelector('.down-button')
// const slidesLength = slideRight.querySelectorAll('div').length

// let activeSlideIndex = 0

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// upButton.addEventListener('click', () => changeSlide('up'))
// downButton.addEventListener('click', () => changeSlide('down'))

// const changeSlide = (direction) => {
//     const sliderHeight = sliderContainer.clientHeight
//     if(direction === 'up') {
//         activeSlideIndex++
//         if(activeSlideIndex > slidesLength - 1) {
//             activeSlideIndex = 0
//         }
//     } else if(direction === 'down') {
//         activeSlideIndex--
//         if(activeSlideIndex < 0) {
//             activeSlideIndex = slidesLength - 1
//         }
//     }

//     slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
//     slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
// }