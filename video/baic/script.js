selectedCar = 'pp_carSmall2';
setCar = 2;
checker = false;
// console.log(video.paused);
function changeOpacity() {
  document.querySelectorAll('.pp_carSmall').forEach(element => {
    // console.log(element);
    if (element.classList.contains(selectedCar)) {
      element.classList.remove('opacityLow')
      element.classList.add('opacityFull')
    } else {
      element.classList.add('opacityLow')
      element.classList.remove('opacityFull')
    }
  });
}

changeOpacity();

function carSelectOperation(carSerial) {
  selectedCar = 'pp_carSmall' + carSerial;
  changeOpacity();
  moveCar(carSerial);
}

function moveCar(newCar) {
  if (newCar == setCar) {
    console.log('noChange');
  } else {
    gsap.to(`.pp_carBig${setCar}`, { opacity: 0,display:'none', x: -100, y: 20, duration: .3 })
    gsap.fromTo(`.pp_carBig${newCar}`, { opacity: 0,display:'none', x: 200, y: -20 }, { opacity: 1,display:'block', x: 0, y: 0, duration: .5 })
    // gsap.to(`.pp_carBig${setCar}`, { opacity: 0, x: 200, y: 20, duration: .3 })
    // gsap.fromTo(`.pp_carBig${newCar}`, { opacity: 0, x: -100, y: -20 }, { opacity: 1, x: 0, y: 0, duration: .5 })
    setCar = newCar;
  }
}


document.querySelector('.bottomSide').addEventListener('click', () => {
  gsap.fromTo('.pp_slide_2', { opacity: 0,display:'none', y: 250 }, { display: 'block', opacity: 1, y: 0 });
  if (video.paused) {
    checker = false;
  } else {
    checker = true;
    togglePlay();
  }
})


document.querySelector('.pp_cross').addEventListener('click', (e) => {
e.stopPropagation()
  gsap.fromTo('.pp_slide_2', { display: 'block', opacity: 1, y: 0 }, { opacity: 0, y: 250, display: 'none' });
  if (checker) {
    togglePlay();
  }
})



// copied
// video code
document.querySelector('#myVideo').volume = .1;

mute = true;
var player = document.querySelector('#videoContainer');
var video = player.querySelector('#myVideo');
var toggle = player.querySelector('#toggle');
var sound = player.querySelector('#sound');

var playIcon = `<i class="material-icons">play_arrow</i>`;
var pauseIcon = `<i class="material-icons">pause</i>`;
var volumeUp = `<i class="material-icons">volume_up</i>`;
var volumeOff = `<i class="material-icons">volume_off</i>`;
var replayIcon = `<i class="material-icons">replay</i>`;

if (!mute) {
  video.muted = false;
  sound.innerHTML = volumeUp;
} else {
  video.muted = true;
  sound.innerHTML = volumeOff;
}

toggle.innerHTML = video.paused ? playIcon : pauseIcon;
function togglePlay(e) {
  var playOrPause = video.paused ? 'play' : 'pause';
  video[playOrPause]();
  e.stopPropagation();
}

function updatePlayPause(e) {
  e.stopPropagation();
  var playPauseIcon = this.paused ? playIcon : pauseIcon;
  toggle.innerHTML = playPauseIcon;
}

function toggleSound(e) {
  e.stopPropagation();
  if (video.muted) {
    video.muted = false;
    sound.innerHTML = volumeUp;
    mute = 0;
  } else {
    video.muted = true;
    sound.innerHTML = volumeOff;
    mute = 1;
  }
}

video.addEventListener('play', updatePlayPause);
video.addEventListener('pause', updatePlayPause);
toggle.addEventListener('click', togglePlay);
sound.addEventListener('click', toggleSound);

function playMute() {

  if (!mute) {
    video.muted = false;
    sound.innerHTML = volumeUp;
  } else {
    video.muted = true;
    sound.innerHTML = volumeOff;
  }
  // console.log(video.paused);

}
playMute();


// document.querySelector('.bottomSide').click()