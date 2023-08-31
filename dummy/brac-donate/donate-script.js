var $container = document.getElementById("container");
var $containerWidth = $container.offsetWidth;
TweenMax.set("#container", { perspective: $containerWidth * 1.5 });
TweenMax.set(".slide", {
    backfaceVisibility: "hidden",
    transformOrigin: "50% 50% -" + $containerWidth / 2
});

window.addEventListener("resize", function() {
    var $containerWidth = $container.offsetWidth;

    TweenMax.set("#container", { perspective: $containerWidth * 1.5 });
    TweenMax.set(".slide", {
        transformOrigin: "50% 50% -" + $containerWidth / 2
    });
});

document.getElementById("prev").addEventListener("click", function() {
    setSlide(slides[currentSlide.index - 1] || slides[slides.length - 1]);
});

document.getElementById("next").addEventListener("click", function() {
    setSlide(slides[currentSlide.index + 1] || slides[0]);
});

TweenLite.defaultEase = Back.easeOut;

var slideDelay = 1.5;
var slideDuration = 1;

var slideElements = document.querySelectorAll(".slide");
var slides = Array.prototype.map.call(slideElements, createSlide);

slides.forEach(function(slide, i) {
    slide.next = slides[i + 1] || slides[0];
    slide.duration = slideDuration;
});

var currentSlide = slides[0];

//var autoPlay = TweenLite.delayedCall(slideDelay, setSlide);

function setSlide(slide) {
    //autoPlay.restart(true);

    if (slide === currentSlide) {
        return;
    }

    if (currentSlide.index === 0 && slide.index === slides.length - 1) {
        currentSlide.setPrevInactive();
        currentSlide = slide;
        currentSlide.setPrevActive();
    } else if (currentSlide.index === slides.length - 1 && slide.index === 0) {
        currentSlide.setInactive();
        currentSlide = slide;
        currentSlide.setActive();
    } else if (slide.index < currentSlide.index) {
        currentSlide.setPrevInactive();
        currentSlide = slide;
        currentSlide.setPrevActive();
    } else {
        currentSlide.setInactive();
        currentSlide = slide;
        currentSlide.setActive();
    }
}

function createSlide(element, index) {
    var slide = {
        next: null,
        duration: 0,
        index: index,
        element: element,
        isActive: false,
        setActive: setActive,
        setInactive: setInactive,
        setPrevActive: setPrevActive,
        setPrevInactive: setPrevInactive
    };

    if (index === 0) {
        setActive();
    } else {
        setInactive();
    }

    function setActive() {
        slide.isActive = true;
        TweenLite.fromTo(
            element,
            slide.duration,
            { rotationY: -90, autoAlpha: 1 },
            { xPercent: 0, rotationY: 0 }
        );
    }

    function setPrevActive() {
        slide.isActive = true;
        TweenLite.fromTo(
            element,
            slide.duration,
            { rotationY: 90, autoAlpha: 1 },
            { rotationY: 0 }
        );
    }

    function setInactive() {
        slide.isActive = false;
        TweenLite.to(element, slide.duration, {
            rotationY: 90,
            onComplete: setAlpha
        });
    }

    function setPrevInactive() {
        slide.isActive = false;
        TweenLite.to(element, slide.duration, {
            rotationY: -90,
            onComplete: setAlpha
        });
    }

    function setAlpha() {
        var $this = this.target;
        TweenMax.set($this, { autoAlpha: 0 });
    }

    return slide;
}


var myPlay = 0;
var choiceNo = Math.ceil(Math.random() * 7); 
var randomImage = document.querySelector('.magic_slide');

randomImage.src = "//ms.purplepatch.online/dummy/brac-donate/"+choiceNo+".jpg";


setInterval(()=>{
    setSlide(slides[currentSlide.index + 1] || slides[0]);
},3e3);

// document.querySelector('#container').addEventListener('click',()=>{
//     window.open('https://www.brac.net/covid19/donate/','_blank');
// });



