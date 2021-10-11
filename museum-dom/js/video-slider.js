function initSlider() {
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
            changeMainVideo(i);
            stopPlayerWhenChangeSlide();
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
        changeMainVideo(index);
        stopPlayerWhenChangeSlide();
    }

    function nextSlide() {
        splide.go('>');
        const index = splide.index;
        updateBullets(index);
        changeMainVideo(index);
        stopPlayerWhenChangeSlide();
    }

    function updateBullets(i) {
        sliderBullets.forEach((item, itemIndex) => item.classList.remove("active"))
        sliderBullets[i].classList.add("active");
        document.getElementById("slider-counter").innerHTML = `0${i + 1}`;
    }

    function changeMainVideo(i) {
        let video = document.getElementById('video-main');
        let source = document.getElementById('source');

        video.setAttribute('poster', `assets/img/video-slider-posters/poster${i}.jpg`);
        source.setAttribute('src', `https://github.com/rolling-scopes-school/stage1-tasks/blob/museum/assets/video/video${i}.mp4?raw=true`);
        buttonsInitialState();
        function buttonsInitialState() {
            bigPlayButton.classList.remove('hidden');
            playButton.classList.remove('hidden');
            pauseButton.classList.add('hidden');
            seek.style.background = 'linear-gradient(to right, #710707 0%, #710707 0%, #C4C4C4 0%, #C4C4C4 100%)';
        }

        video.load();
    }

}


// YOUTUBE
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const players = [];
function createPlayer(domId, videoId) {
    player = new YT.Player(domId, {
        videoId,
        height: '390',
        width: '640',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    players.push(player);
}

function onYouTubeIframeAPIReady() {

    createPlayer('ytplayer1', 'zp1BXPX8jcU');
    createPlayer('ytplayer2', 'Vi5D6FKhRmo');
    createPlayer('ytplayer3', 'NOhDysLnTvY');
    createPlayer('ytplayer4', 'aWmJ5DgyWPI');
    createPlayer('ytplayer5', '2OR0OCr6uRE');

    // initialize video slider
    initSlider();
}

function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING) {
        players.forEach(p => {
            if (p.id !== event.target.id) {
                p.stopVideo()
            }
        })
    }
}

function stopPlayerWhenChangeSlide() {
    document.querySelectorAll('.yt-player').forEach(el => {
        el.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
}

