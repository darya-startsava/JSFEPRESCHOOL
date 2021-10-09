document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide-video', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '3em',
        drag: false,
        arrows: false,
        pagination: false
    });

    splide.mount();


    const sliderBullets = document.querySelectorAll(".video-slider-bullet");

    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i] = sliderBullets[i].addEventListener("click", () => {
            updateBullets(i);
            splide.go(i);
        })
    }

    const arrowLeft = document.querySelector(".video-slider-arrow-left");
    const arrowRight = document.querySelector(".video-slider-arrow-right");

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
        document.getElementById("slider-counter").innerHTML = `0${i + 1}`;
    }

})



// YOUTUBE
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    console.log('onYouTubeIframeAPIReady')
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'zp1BXPX8jcU',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    console.log('onPlayerStateChange')
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}