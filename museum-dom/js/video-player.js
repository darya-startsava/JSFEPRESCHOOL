const video = document.getElementById('video-main');
video.controls = false;


// buttons
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const bigPlayButton = document.getElementById('play-big');

playButton.addEventListener('click', playButtonToggle);
pauseButton.addEventListener('click', playButtonToggle);
bigPlayButton.addEventListener('click', playButtonToggle);
video.addEventListener('click', playButtonToggle);

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

function playButtonToggle() {
    togglePlay();
    toggleButtons();
}

function toggleButtons() {
    bigPlayButton.classList.toggle('hidden');
    playButton.classList.toggle('hidden');
    pauseButton.classList.toggle('hidden');
}

// progress-bar

const seek = document.getElementById('seek');

function initializeVideo() {
    const videoDuration = Math.round(video.duration);
    seek.setAttribute('max', videoDuration);
}

function updateProgress() {
    seek.value = Math.round(video.currentTime);
    seek.style.background = `linear-gradient(to right, #710707 0%, #710707 ${Math.round(seek.value * 100 / Math.round(video.duration))}%, #C4C4C4 ${Math.round(seek.value * 100 / Math.round(video.duration))}%, #C4C4C4 100%)`;
    if (seek.value == Math.round(video.duration)) {
        toggleButtons();
    }
}

function skipAhead(event) {
    const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    video.currentTime = skipTo;
    seek.value = skipTo;
    seek.style.background = `linear-gradient(to right, #710707 0%, #710707 ${Math.round(skipTo * 100 / Math.round(video.duration))}%, #C4C4C4 ${Math.round(skipTo * 100 / Math.round(video.duration))}%, #C4C4C4 100%)`;
    if (seek.value == Math.round(video.duration)) {
        toggleButtons();
    }
}

seek.addEventListener('input', skipAhead);


video.addEventListener('loadedmetadata', initializeVideo);
video.addEventListener('timeupdate', updateProgress);

// volume

const volume = document.getElementById('volume');
const buttonVolume = document.getElementById('button-volume');
const buttonVolumeOff = document.getElementById('button-volume-off');

buttonVolume.addEventListener('click', buttonVolumeToggle);
buttonVolumeOff.addEventListener('click', buttonVolumeToggle);


function toggleVolumeIcons() {
    buttonVolume.classList.toggle('hidden');
    buttonVolumeOff.classList.toggle('hidden');

}

function buttonVolumeToggle() {
    if (video.volume === 0) {
        video.volume = 0.5;
    } else {
        video.volume = 0
    };
    toggleVolumeIcons();
}

function toggleVolumeButtons() {

    if (video.muted || video.volume === 0) {
        buttonVolumeOff.classList.remove('hidden');
        buttonVolume.classList.add('hidden');
    } else {
        buttonVolume.classList.remove('hidden');
        buttonVolumeOff.classList.add('hidden');
        volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${video.volume * 100}%, #C4C4C4 ${video.volume * 100}%, #C4C4C4 100%)`;
    }
}

volume.addEventListener('input', updateVolume);

function updateVolume() {
    if (video.muted) {
        video.muted = false;
    }

    video.volume = volume.value;
}

video.addEventListener('volumechange', toggleVolumeButtons);

// fullscreen

const videoContainer = document.getElementById('video-container')
const fullscreen = document.getElementById('fullscreen');
const fullscreenExit = document.getElementById('fullscreen-exit');

fullscreen.addEventListener('click', toggleFullScreen);
fullscreenExit.addEventListener('click', toggleFullScreen);

function changeFullscreenIcon() {
    fullscreen.classList.toggle('hidden');
    fullscreenExit.classList.toggle('hidden');
}


function toggleFullScreen() {
    if (document.fullscreenElement) {
        console.log(1);
        video.style.height = '650px';
        document.exitFullscreen();
    } else {
        console.log(3);
        video.style.height = '95vh';
        videoContainer.webkitRequestFullscreen();
    }
    changeFullscreenIcon()
}


function updateFullscreenButton() {
    changeFullscreenIcon()
    if (document.fullscreenElement) {
        fullscreen.setAttribute('data-title', 'Exit full screen (f)');
    } else {
        fullscreenExit.setAttribute('data-title', 'Full screen (f)');
    }
}

videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);

// Hotkeys
function keyboardShortcuts(event) {
    const { code } = event;
    switch (code) {
        case 'KeyM':
            buttonVolumeToggle();
            break;
        case 'KeyF':
            toggleFullScreen();
            break;
        case 'Space':
            event.preventDefault();
            playButtonToggle();
            break;
    }
}

document.addEventListener('keydown', keyboardShortcuts);

