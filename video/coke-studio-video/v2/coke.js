let slide_1 = document.querySelector(".slide_1");
    let slide_2 = document.querySelector(".slide_2");
    let Container = document.querySelector("#video-container");
    var tag = document.createElement('script');
    var isPlay = false;
    let played = true;
    let audioControl = document.querySelector(".audio_control");
    let device = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? 'mobile' : 'desktop';

    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    document.querySelector("#ytplayer").src = "https://www.youtube.com/embed/3vDyCnOHo7w?rel=0&showinfo=0&autoplay=1&controls=0&enablejsapi=1&playerapiid=ytplayer&loop=1";

    var player;

    function onYouTubePlayerAPIReady() {
        player = new YT.Player('ytplayer', {
            events: {
                'onStateChange': ShowMe,
                'onReady': onPlayerReady
            },
            playerVars: {
                showinfo: 0,
                ecver: 2
            },
            
        });
    }



    function ShowMe(event) {
        var sStatus;

        sStatus = player.getPlayerState();
        if (sStatus == 0) {
            if (isPlay) {
                player.stopVideo();
            }
        } else if (sStatus == 1) {
            if (played) {
                played = false;
            }
        } 
        if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
              window.open('{CLICK_MACRO}')
          
          }
    }

    function toggleMute() {
        if (player.isMuted()) {
            player.unMute();
            audioControl.innerHTML = '<i class="material-icons">volume_up</i>';
        } else {
            player.mute();
            audioControl.innerHTML = '<i class="material-icons">volume_off</i>';
        }
    }

    if (device == 'desktop') {
        function onPlayerReady(event) {
            event.target.mute();
        }

    }

    setTimeout(() => {
        add_class(slide_1, 'd_none');
        remove_class(slide_2, 'd_none', 'fadeIn');
    }, 2700);

    function remove_class(element, classname, newclass = '') {
        element.className = element.className.replace(classname, newclass);
    }

    function add_class(element, classname) {
        element.classList ? element.classList.add(classname) : element.className += (' ' + classname);
    }