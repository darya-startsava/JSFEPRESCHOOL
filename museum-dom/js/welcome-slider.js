document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        arrows: false,
        pagination: false
    });
    splide.mount();

    const sliderBullets = document.querySelectorAll(".slider-bullet");

    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i] = sliderBullets[i].addEventListener("click", () => {
            updateBullets(i);
            splide.go(i);
        })
    }

    splide.on( 'move', () => {const index = splide.index;
        updateBullets(index);} )

    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    arrowLeft.addEventListener("click", prevSlide);
    arrowRight.addEventListener("click", nextSlide);

    function prevSlide() {
        splide.go('<');
        const index = splide.index;
        updateBullets(index);
    }

    function nextSlide() {
        splide.go('>');
        const index = splide.index;
        updateBullets(index);
    }

    function updateBullets(i) {
        sliderBullets.forEach((item, itemIndex) => item.classList.remove("active"))
        sliderBullets[i].classList.add("active");
        document.getElementById("slider-counter").innerHTML=`0${i+1}`;
    }

})




